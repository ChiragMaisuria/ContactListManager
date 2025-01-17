import mongoose from 'mongoose';

const contactListManagerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const contactListManagerModel = mongoose.model('contactListmanagerModel', contactListManagerSchema);

export default contactListManagerModel;