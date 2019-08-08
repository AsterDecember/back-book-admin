const moongoose = require ('mongoose')
const Schema = moongoose.Schema

const bookSchema = new Schema({
        year: Number,
        title: String,
        bookAuthor: String,
        editorial: String,
        studentId: String,
        studentName: String,
        studentCareer: String,
        period: String,
        donationDate: Date,
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