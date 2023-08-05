const {db} = require ("../database")

module.exports = {
    addWork : async (req,res)=>{
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
     console.log(err)
     res.status(500).json(err)
  } 
   },
   updateWork:async (req,res)=>{
    const {work_id}=req.params
    const {image,video,description,haircut_title,price,discount}=req.body
    try {
     const work = await db.work.findByPk(work_id)
     if(!work){
        return res.status(404).json("not found")
     }
     work.image=image,
     work.video=video,
     work.description=description,
     work.haircut_title=haircut_title,
     work.price=price,
     work.discount=discount
     await work.save()
     res.json(work)
    }catch (err){
        console.log(err)
        res.status(500).json(err)
    }
   },

   deleteWork : async (req,res)=>{
    const {work_id}=req.params
    try {
 await db.work.destroy({where:{id:work_id}})
 res.status(200).json('work no more exists')
    }catch (err){
console.log(err)
res.status(500).json(err)
    }
   },
   getWorksByBarberId: async (req, res) => {
    const { barber_id } = req.params
    try {
      const works = await db.work.findAll({
        where: { barber_id },
      })
      res.status(200).json(works)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  },
  getOneWork: async (req, res) => {
    const { work_id } = req.params;
    try {
      const work = await db.work.findByPk(work_id);
      if (!work) {
        return res.status(404).json('Work not found');
      }
      res.status(200).json(work);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}