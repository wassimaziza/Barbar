const { db } = require("../database")
const jwt = require("jsonwebtoken")
const jwtConfig = require("../jwtConfig/config")

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body
    try {
      const client = await db.client.findOne({ where: { email: email } })
      if (!client || client.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" })
      }

      const token = jwt.sign({ idclient: client.idclient }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
      })
      res.status(200).json({ token })
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Internal server error" })
    }
  },

  signUp: async (req, res) => {
    const {
      firstname,
      lastname,
      email,
      password,
      profile_pic,
      phone_number,
    } = req.body
    try {
      const createdClient = await db.client.create({
        firstname,
        lastname,
        email,
        password,
        profile_pic,
        phone_number,
        points: 100,
      })
      res.status(201).json(createdClient)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Internal server error" })
    }
  },

  updateProfile: async (req, res) => {
    const { firstname, lastname, profile_pic, phone_number } = req.body
    try {
      const clientId = req.user.idclient
      const updatedClient = await db.client.update(
        {
          firstname,
          lastname,
          profile_pic,
          phone_number,
        },
        { where: { idclient: clientId } }
      )
      res.status(200).json(updatedClient)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Internal server error" })
    }
  },

  deleteAccount: async (req, res) => {
    const clientId = req.user.idclient
    try {
      await db.client.destroy({ where: { idclient: clientId } })
      res.status(200).json({ message: "Account deleted successfully" })
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: "Internal server error" })
    }
  },
  addRating:async (req,res) =>{
    try {
      const {score,review,barber_id} = req.body
      const user =req.user 
      if(!user){
        return res.status(403).json("cannot access")
      }
      const rating = await db.rating.create({
        score,
        review,
        barber_id,
        client_idclient:user.idclient
      })
      res.status(201).json(rating)
    }catch (err){
      console.log(err)
      res.status(500).json(err.message)
    }
  },
  getWorkByBarber:async(req,res)=>{
    const {barber_id} = req.params
    try{
      const works = await db.work.findAll({
        where:{barber_id}
      })
      res.status(200).json(works)
        }catch(err){
console.log(err)
res.status(500).json(err)
    }
  },
  getOneWork:async(req,res)=>{
    const {work_id}=req.params
    try{
      const work = await db.work.findByPk(work_id)
      if(!work){
        return res.status(404).json("work not found")
      }
      res.status(200).json(work)
    }catch(err){
console.log(err)
res.status(500).json(err)
    }
  }
}