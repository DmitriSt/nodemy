const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  text: {type: String, required: true},
  author: {type: String},
  date: {type: Date, default: Date.now},
  // clicks: {type: Number, default: 0},
  // owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('News', schema)
