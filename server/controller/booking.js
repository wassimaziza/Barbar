const firebase = require ("../firebase/config")
require ("firebase/auth")
const {sequelize,db} = require ("../database")

module.exports ={
    //!new booking (specific time/date)
    addBooking: async (req, res) => {
      const { date, time, barber_id } = req.body
      try {
        const token = req.headers.authorization
        if (!token) {
          return res.status(401).json("You must be logged in to add a booking")
        }
  
        const decodedToken = jwt.verify(token, jwtConfig.secret)
        const client_id = decodedToken.clientId
  
        const bookingCount = await db.booking.count({
          where: {
            client_id,
            barber_id,
            status: "accepted",
          },
        })
  
        const booking = await db.booking.create({
          date,
          time,
          status: "pending",
          client_id,
          barber_id,
          loyalty: bookingCount >= 3 ? bookingCount + 1 : 0,
        })
  
        res.status(201).json(booking)
      } catch (err) {
        console.log(err)
        res.status(500).json(err.message)
      }
    },
//!update booking
updateBooking:async (req,res) => { 
    const {id} = req.params
    const {date,time}=req.body
    try{
    const booking = await db.booking.findByPk(id)
    if(!booking) {
        return res.status(404).json("no booking related found")
    }
    booking.date = date
    booking.time = time
    await booking.save()
    res.status(200).json(booking)
    }catch (err){
 console.log(err)
 res.status(500).json(err.message)
    }
},
//! delete booking
deleteBooking: async (req,res) => {
    const {id}=req.params
    try {
const booking = await db.booking.findByPk(id)
if (!booking) {
    return res.status(404).json("not authorized to make changes or delete booking")
}
const user = firebase.auth().currentUser
if(!user || booking.client_id !== user.id) {
    return res.status(403).json("unauthorized to delete this booking")
}
await booking.destroy()

res.status(200).json("success with deleting booking")
    }catch (err){
        console.log(err)
        res.status(500).json(err.message)
    }
},
//! update booking status
updateBookingStatus:async (req,res)=>{
    const {id}=req.params
    const {status}=req.body
    try {
  const booking = await db.booking.findByPk(id)
  if(!booking){
    return res.status(404).json("booking not found")
  }
  const user = firebase.auth().currentUser
  if (!user || booking.barber_id != user.uid){
    return res.status(403).json("unauthorized to update booking status")
  }
  booking.status=status
  await booking.save()
  if(status=="accepted"){
    const client = await db.client.findByPk(booking.client_id)
    if(client){
        client.loyalty+=1 
        await client.save()
    }
  }
  res.status(200).json(booking)
    }catch (err){
        console.log(err)
        res.status(500).json(err.message)
    }
},
//!get client's bookings
getClientBookings: async (req, res) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json("You must be logged in to access your bookings")
    }

    const decodedToken = jwt.verify(token, jwtConfig.secret)
    const client_id = decodedToken.clientId

    const bookings = await db.booking.findAll({ where: { client_id } })

    res.status(200).json(bookings)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
},
}