const jwt = require("jsonwebtoken")
const { db } = require("../database")
const jwtConfig = require("../jwtConfig/config")

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body
    try {
      const adminUser = await db.Admin.findOne({ where: { email: email } })
      if (!adminUser || adminUser.password !== password) {
        res.status(401).json({ error: 'Invalid credentials' })
      } else {
        //! Generate JWT token
        const token = jwt.sign({ userId: adminUser.id }, jwtConfig.secretKey, { expiresIn: jwtConfig.expiresIn })

        res.status(200).json({ token })
      }
    } catch (err) {
      console.log('Error', err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  //! Delete a barber by ID
  deleteBarber: async (req, res) => {
    const { barberId } = req.params
    try {
      const deletedBarber = await db.Barber.destroy({ where: { id: barberId } })
      if (!deletedBarber) {
        res.status(404).json({ error: 'Barber not found' })
      } else {
        res.status(204).end()
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  //! Get bookings for a specific barber
  getBarberBookings: async (req, res) => {
    const { barberId } = req.params
    try {
      const bookings = await db.Booking.findAll({ where: { barberId: barberId } })
      res.status(200).json(bookings)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  //! Get points for a specific barber
  getBarberPoints: async (req, res) => {
    const { barberId } = req.params
    try {
      const points = await db.Points.findAll({ where: { barberId: barberId } })
      res.status(200).json(points)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  // Get all logged-in users
  getAllLoggedInUsers: async (req, res) => {
    try {
      const loggedInUsers = await db.User.findAll({ where: { loggedIn: true } })
      res.status(200).json(loggedInUsers)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },


}
