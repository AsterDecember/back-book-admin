const moongoose = require ('mongoose')
const Schema = moongoose.Schema

const bookSchema = new Schema({
        name: String,
        year: Number,
        description: String,
        author:
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ,
    },
    {
        timestamps:{
            createdAt : true,
            updatedAt : true,
        }

    })

module.exports = moongoose.model('Book',bookSchema)