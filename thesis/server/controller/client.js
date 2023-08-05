const { db } = require("../database")

module.exports = {
  //! Find specific client on login (Handled by front-end)
  getOne: async (req, res) => {
    const { email, password } = req.body
    try {
      res.status(400).json("welcome ")
    } catch (err) {
      console.log(err)
      res.status(500).send(err.message)
    }
  },

  //! Add client using hashed password (Handled by front-end)
  Add: async (req, res) => {
    const {
      firstname,
      lastname,
      email,
      password,
      profile_pic,
      phone_number,
      location,
    } = req.body
    try {
      res.status(400).json("Please handle client registration in the front-end using Firebase SDK")
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  },

  //! Update client profile
  updateProfile: async (req, res) => {
    const {
      firstname,
      lastname,
      profile_pic,
      phone_number,
      location,
    } = req.body
    try {
      const user = req.user 
      if (!user) {
        res.status(401).json("Unauthorized")
        return
      }
      await user.updateProfile({
        displayName: `${firstname}  ${lastname}`,
        photoURL: profile_pic,
      })
      const updatedClient = await db.client.update(
        {
          firstname,
          lastname,
          profile_pic,
          phone_number,
          location,
        },
        { where: { idclient: user.uid } }
      )
      res.status(200).json(updatedClient)
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  },

  //! Delete client account
  deleteAccount: async (req, res) => {
    try {
      const user = req.user 
      if (!user) {
        res.status(401).json("Unauthorized")
        return
      }
      await user.delete()
      await db.client.destroy({ where: { idclient: user.uid } })
      res.status(200).json("Account deleted successfully")
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  },
}
