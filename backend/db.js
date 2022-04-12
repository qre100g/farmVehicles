
const mongoose = require('mongoose');
const mongoURL = require('./privateConsts');
const app = require('./app');

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((res) => {
    console.log('Connected to database');
    const port = 4000;
    app.listen(port, () => {
        console.log(`Listen's everything on port : ${port}`);
    })
}).catch((err) => {
    console.log('Error in connecting database');
    console.log(err)
})
