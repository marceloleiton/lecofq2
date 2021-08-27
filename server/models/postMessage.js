import mongoose from 'mongoose';

//Modelo

const postSchema = mongoose.Schema({
    titulo: String,
    mensaje: String,
});
const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;