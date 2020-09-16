const mongoose = require('mongoose');

const post = require('./models/post');

mongoose.connect('mongodb://localhost/node-js-test-blog', {useNewUrlParser: true, useUnifiedTopology: true}, (err, obj) => {
    if (err === null) {
        console.log("Conexión exitosa")        
    }
});

post.findByIdAndDelete()

post.find({}, (err, obj) => {
    obj.find()
})

/*==============================
=            SELECT            =
==============================*/
/*
const posts = post.find({
    title: 'This is the title of my third post'
}, (err, object) => {
    console.log(object);
});
*/
/*=====  End of SELECT  ======*/


/*==============================
=            Insert            =
==============================*/
/*
post.create({
    title: 'This is the title of my third post',
    description: 'This is the description of my third post',
    content: 'this is the content of my third post'
}, (error, object) => {
    if (error === null) {
        console.log("Inserción exitosa");
    }
});
*/
/*=====  End of Insert  ======*/

console.log("is in test");