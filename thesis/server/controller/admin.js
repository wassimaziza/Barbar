const  {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}  = require("../firebase/config")
const {db} = require("../database")
console.log(db,"db")
module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body
    try {
      const adminUser = await db.Admin.findOne({ where: { email: email } })
      if (!adminUser) {
        res.status(404).json({ error: 'Admin not found' })
      } else {
        const userCredentials = await signInWithEmailAndPassword(auth,email, password)
        const token = await userCredentials.user.getIdToken()
        res.status(200).json({ token })
      }
    } catch (err) {
      console.log('Error', err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  addAdmin: async (req, res) => {
    const { email, password } = req.body
    try {
      const createdCredential = await createUserWithEmailAndPassword(auth,email, password)
      const admin = await db.Admin.create({
        email: createdCredential.user.email,
        password: createdCredential.user.password, 
      })
      res.status(201).json(admin)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  getOneUser: async (req, res) => {
    const { email } = req.body
    try {
      const adminUser = await db.Admin.findOne({ where: { email: email } })
      if (!adminUser) {
        res.status(404).json({ error: 'Admin not found' })
      } else {
        res.status(200).json(adminUser)
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' })
    }
  },
}
