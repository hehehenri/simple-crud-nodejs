const User = require('../model/user.model')

module.exports = {
    //GET
    async list(req, res) {
      const user = await User.find()
      res.json(user)
    },

    //POST
    async create(req, res) {
      const {
        name,
        email,
        senha,
       } = req.body
              
      const data = {
        name,
        email,
        senha,
      }

      let sameEmail = await User.findOne({ email })

      if(!sameEmail) {
        const dataUser = await User.create(data)
        return res.json(dataUser)
      } else {
        return res.json({ msg: "same email bro" })
      }
      
     
    },

    //PUT
    async update(req, res) {
        const { _id } = req.params
        const {
          name,
          email,
          senha
        } = req.body
        
        const data = {
          name,
          email,
          senha
        }
        
        const user = await User.findByIdAndUpdate({_id}, data)
        return res.json(user)
    },

    //DELETE
    async delete(req, res) {
        const { _id } = req.params
       
        const user = await User.findByIdAndDelete({_id})
        return res.json({ msg: user.name+" was deleted" })
        //fazer o if la eh isso
        //a gente nao conseguiu fazer pq eh burro     
    }
}