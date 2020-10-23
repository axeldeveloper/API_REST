const users = require('../models/users');

module.exports = {
    async index(req, res) {
        const response = await users.find();
        return res.status(200).json({data: response})
    },
    async store(req, res) {
        const {name, lastName } = req.body
        const response = await new users({name: name, lastName: lastName}).save()

        return res.status(201).json({data: response});
    },
    async update(req, res) {
        const {id} = req.params;
        const {name, lastName } = req.body
        const response = await users.findByIdAndUpdate({_id: id}, {name: name, lastName: lastName})
        return res.status(200).json({data: response});
    },
    async delete(req, res) {
        const {id} = req.params;
        const response = await users.findByIdAndRemove({_id: id});
        return res.status(200).json({data: {message: 'Deleted', data: response}});
    }
}