const { db } = require("../database");
const { firebase } = require("../firebase/config");

module.exports = {
  //! Add a new rating and review for a specific barber
  addRating: async (req, res) => {
    try {
      const { score, review, barber_id } = req.body
      const user = firebase.auth().currentUser
      
      if (!user) {
        return res.status(403).json("Unauthorized")
      }

      const rating = await db.rating.create({
        score,
        review,
        barber_id,
        client_idclient: user.uid,
      })

      res.status(201).json(rating)
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  },

  //! Get all ratings and reviews for a specific barber
  getRatingsByBarberId: async (req, res) => {
    try {
      const { barber_id } = req.params
      const ratings = await db.rating.findAll({
        where: { barber_id },
        include: [
          {
            model: db.client,
            attributes: ["firstname", "lastname"],
          },
        ],
      })

      res.status(200).json(ratings)
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  },

  //! Get all ratings and reviews given by a specific client
  getRatingsByClientId: async (req, res) => {
    try {
      const user = firebase.auth().currentUser
      if (!user) {
        return res.status(403).json("Unauthorized")
      }

      const ratings = await db.rating.findAll({
        where: { client_idclient: user.uid },
        include: [
          {
            model: db.barber,
            attributes: ["firstname", "lastname"],
          },
        ],
      })

      res.status(200).json(ratings)
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  },
}
