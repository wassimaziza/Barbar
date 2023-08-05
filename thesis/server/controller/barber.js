const firebase = require("../firebase/config")
require("firebase/auth");
const {db} = require("../database")

module.exports = {
  //! Find specific seller on login
  getOne: async (req, res) => {
    const { email, password } = req.body
    try {
      const barber = await db.barber.findOne({ where: { email } })
      if (!barber) {
        res.status(404).json("Barber not found")
      } else {
        const userCredentials = await firebase.auth().signInWithEmailAndPassword(email, password)
        const token=userCredentials.user.accessToken
        res.status(201).json({token,profile_pic:barber.profile_pic})
         
    }}
 catch (err) {
      console.log("err", err)
      res.status(500).send(err)
    }
  },
  
  //! Sign up a new barber
  addBarber: async (req, res) => {
    const {
      firstname,
      lastname,
      email,
      password,
      shop_name,
      shop_logo,
      profile_pic,
      diploma,
      idCard,
      location,
    } = req.body

    try {
      const createdCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const barber = await db.barber.create({
        firstname,
        lastname,
        email,
        password: createdCredential.user.uid,
        shop_name,
        shop_logo,
        profile_pic,
        diploma,
        idCard,
        location,
        points: 0,
      })

      res.status(201).json(barber)
    } catch (err) {
      console.log(err)
      res.status(500).send(err)
    }
  },

  //! Update barber profile and associated barber shop
  updateBarber: async (req, res) => {
    const { id } = req.params
    const {
      firstname,
      lastname,
      profile_pic,
      shop_name,
      shop_logo,
      location,
      idCard,
    } = req.body

    try {
      const barber = await db.barber.findByPk(id)
      if (!barber) {
        return res.status(404).json( "barber not found" )
      }

      //! Check if the provided idCard matches the idCard in the barber

      if (barber.idCard !== idCard) {
        return res.status(404).json( " idCard not found" )
      }

      barber.firstname = firstname
      barber.lastname = lastname
      barber.profile_pic = profile_pic
      barber.shop_name = shop_name
      barber.shop_logo = shop_logo
      barber.location = location
      await barber.save()
      res.json(barber)
}
 catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  },

  //! Delete barber and associated barber shop
  deleteBarber: async (req, res) => {
    const { id } = req.params
    try {
      await db.barber.destroy({ where: { id } })
      res.status(201).json( "Barber deleted successfully" )
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  },

}
