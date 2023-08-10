const jwt = require("jsonwebtoken")
const jwtConfig = require("../jwtConfig/config")
const { db } = require("../database")
// const cloudinary = require("cloudinary") 

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body
    try {
      const barber = await db.barber.findOne({ where: { email } })
      if (!barber) {
        res.status(404).json({ error: 'Barber not found' })
      } else {
        const token = jwt.sign({ barberId: barber.idbarber }, jwtConfig.secret, {
          expiresIn: jwtConfig.expiresIn,
        })
        res.status(200).json({ token })
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  signup: async (req, res) => {
    const {
      firstname,
      lastname,
      email,
      password,
      profile_pic,
    } = req.body

    try {
      const barber = await db.barber.create({
        firstname,
        lastname,
        email,
        password,
        profile_pic,
      })

      // Generate JWT token
      const token = jwt.sign({ barberId: barber.idbarber }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
      })

      res.status(201).json({ token })
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  signupShop: async (req, res) => {
    const {
      shop_name,
      shop_logo,
      diploma,
      idCard,
      location,
    } = req.body
    const barberId = req.barberId 
    try {
      const barber = await db.barber.findByPk(barberId)
      if (!barber) {
        return res.status(404).json({ error: 'Barber not found' })
      }

      //! Create BarberShop for specific barber
      const shop = await db.BarberShop.create({
        shop_name,
        shop_logo,
        diploma,
        idCard,
        location,
        BarberId: barber.idbarber,
      })

      res.status(201).json(shop)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  updateBarberInfo: async (req, res) => {
    const {
      firstname,
      lastname,
      profile_pic,
      shop_logo,
      shop_name,
    } = req.body
    const barberId = req.barberId //! Get barberid from JWT 

    try {
      //! Update barber's info
      const barber = await db.barber.findByPk(barberId)
      if (!barber) {
        return res.status(404).json({ error: 'Barber not found' })
      }

      barber.firstname = firstname
      barber.lastname = lastname
      barber.profile_pic = profile_pic
      await barber.save()

      //!  Update barber shop info
      const shop = await db.BarberShop.findOne({ where: { BarberId: barber.idbarber } })
      if (shop) {
        shop.shop_name = shop_name
        shop.shop_logo = shop_logo
        await shop.save()
      }

      res.status(200).json({ message: 'Barber info updated successfully' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  logout: async (req, res) => {
    const barberId = req.barberId

    try {
      //! Delete barber and his shop
      const barber = await db.barber.findByPk(barberId)
      if (!barber) {
        return res.status(404).json({ error: 'Barber not found' })
      }
      await barber.destroy()

      res.status(200).json({ message: 'Barber account and shop details no more exists' })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  },

  getBarberBookings: async (req, res) => {
    const barberId = req.barberId 

    try {
      const bookings = await db.booking.findAll({ where: { BarberId: barberId } })
      res.status(200).json(bookings)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  updateBookingStatus: async (req, res) => {
    const barberId = req.barberId
    const { bookingId, status } = req.body

    try {
     
      const booking = await db.booking.findByPk(bookingId)
      if (!booking || booking.BarberId !== barberId) {
        return res.status(404).json({ error: 'Booking not found' })
      }

      booking.status = status
      await booking.save()

      //! Add points if booking is accepted
      if (status === 'accepted') {
        const barber = await db.barber.findByPk(barberId)
        if (barber) {
          barber.points += booking.points
          await barber.save()
        }
      }

      res.status(200).json({ message: 'Booking status updated successfully' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  cancelBooking: async (req, res) => {
    const barberId = req.barberId
    const { bookingId } = req.params

    try {
      //! decline a booking and send alert to client
      const booking = await db.booking.findByPk(bookingId)
      if (!booking || booking.BarberId !== barberId) {
        return res.status(404).json({ error: 'Booking not found' })
      }
      await booking.destroy()
      res.status(200).json({ message: 'Booking cancelled successfully' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

  getBarberProfile: async (req, res) => {
    const barberId = req.barberId 

    try {
      const barber = await db.barber.findByPk(barberId, { include: db.BarberShop })
      if (!barber) {
        return res.status(404).json({ error: 'Barber not found' })
      }

      res.status(200).json(barber)
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: 'Internal server error' })
    }
  },

 getRatingByBarber:async (req,res)=>{
  try {
  const user = req.user
  if(!user){
    return res.status(403).json("cannot access")
  }
  const ratings = await db.rating.findAll({
    where:{barber_id:user.idbarber},
      include :[
        {
          model :db.client,
          attributes:["firstname", "lastname"]
        }
      ]
  })
   const totalRatings = ratings.length
   const totalScore = ratings.reduce((acc, rating) =>acc + rating.score, 0)
   const averageRating = totalRatings>0 ? totalScore / totalRatings : 0;


   res.status(200).json({ratings,averageRating})
  }catch (err){
  console.log(err)
  res.status(500).json(err.message)
  }
 },
 getRatingsByClient:async (req,res)=>{
  try {
    const user = req.user 
    if(!user) {
      return res.status(403).json("cannot access")
    }
    const ratings = await db.rating.findAll({
      where: {barber_id:user.idbarber,client_idclient:req.params.client_idclient}
    })
    res.status(200).json(ratings)
  }catch (err){
    console.log(err)
    res.status(500).json(err.message)
  }
 },
 addWork:async (req,res)=>{
  const barberId = req.user.uid
   const {image,video,description,haircut_title,price,discount}=req.body
   try{
    const work = await db.work.create({
      image,
      video,
      description,
      haircut_title,
      price,
      discount,
      barber_id:barberId
    })
    res.status(201).json(work)
   }catch(err){
console.log(err);
res.status(500).json(err)
   }
},
updateWork:async (req,res)=>{
  const {work_id}=req.params
  const {image,video,description,haircut_title,price,discount}=req.body
  try{
    const work = db.work.findByPk(work_id) 
    if (!work){
      return res.status(404).json("work not found")
    }
    work.image = image,
    work.video = video,
    work.description = description,
    work.haircut_title =haircut_title,
    work.price = price,
    work.discount = discount,
    await work.save()
    res.json(work)
  }
  catch(err){
   console.log(err);
   res.status(500).json(err.message)
  }
},
deleteWork:async (req,res)=>{
  const {work_id}=req.params
  try{
await db.work.destroy({where:{id:work_id}})
res.status(200).json("work no more exists")
  }catch(err){
console.log(err)
res.status(500).json(err)
}
}
}