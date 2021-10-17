const mongoose = require('mongoose');

const bagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
   image: {
       type:String,
       required:true
   },
   client: {
    type:String,
    required:true
}

});

bagSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

bagSchema.set('toJSON', {
    virtuals: true,
});

exports.Bag = mongoose.model('Bag', bagSchema);
exports.bagSchema = bagSchema;
