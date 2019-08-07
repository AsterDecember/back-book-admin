const moongoose = require ('mongoose')
const Schema = moongoose.Schema

const bookSchema = new Schema({
        name: String,
        year: Number,
        bookName: String,
        donationDate: Date,
        bookAuthor: String,
        editorial: String,
        studentName: String,
        studentId: String,
        studentCareer: String,
        period: String,
        title: String,
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