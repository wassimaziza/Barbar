const { db } = require("../database");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../jwtConfig/config");

module.exports = {
  addBooking: async (req, res) => {
    const { date, time, barber_id } = req.body;
    try {
      const token = req.headers.authorization
      if (!token) {
        return res.status(401).json("You must be logged in to add a booking");
      }

      const decodedToken = jwt.verify(token, jwtConfig.secret);
      const client_id = decodedToken.idclient;

      const bookingCount = await db.Booking.count({
        where: {
          client_id,
          barber_id,
          status: "accepted",
        },
      });

      const booking = await db.Booking.create({
        date,
        time,
        status: "pending",
        client_id,
        barber_id,
        loyalty: bookingCount >= 3 ? bookingCount + 1 : 0,
      });

      res.status(201).json(booking);
    } catch (err) {
      console.log(err);
      res.status(500).json(err.message);
    }
  },

  updateBooking: async (req, res) => {
    const { id } = req.params;
    const { date, time } = req.body;
    try {
      const booking = await db.booking.findByPk(id);
      if (!booking) {
        return res.status(404).json("No booking related found");
      }
      booking.date = date;
      booking.time = time;
      await booking.save();
      res.status(200).json(booking);
    } catch (err) {
      console.log(err);
      res.status(500).json(err.message);
    }
  },

  deleteBooking: async (req, res) => {
    const { id } = req.params;
    try {
      const booking = await db.booking.findByPk(id);
      if (!booking) {
        return res.status(404).json("Booking not found");
      }
      await booking.destroy();

      res.status(200).json("Booking deleted successfully");
    } catch (err) {
      console.log(err);
      res.status(500).json(err.message);
    }
  },

  updateBookingStatus: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const booking = await db.booking.findByPk(id);
      if (!booking) {
        return res.status(404).json("Booking not found");
      }
      booking.status = status;
      await booking.save();
      
      if (status === "accepted") {
        const client = await db.client.findByPk(booking.client_id);
        if (client) {
          client.loyalty += 1;
          await client.save();
        }
      }
      
      res.status(200).json(booking);
    } catch (err) {
      console.log(err);
      res.status(500).json(err.message);
    }
  },

  getClientBookings: async (req, res) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json("You must be logged in to access your bookings");
      }

      const decodedToken = jwt.verify(token, jwtConfig.secret);
      const client_id = decodedToken.idclient;

      const bookings = await db.booking.findAll({ where: { client_id } });

      res.status(200).json(bookings);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
