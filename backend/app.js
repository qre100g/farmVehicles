
const express = require('express');
const ownerRegister = require('./Models/ownerRegister');
const userRegister = require('./Models/userRegister');
const adminModel = require('./Models/adminModel');
const app = express();

app.get('/',(req, res) => {
    res.send(`dashboard`);
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/login', async (req, res) => {
    console.log(req.body)
    const {usertype, username, password} = req.body;
    if(!usertype || !username || !password) {
        return res.send({
            status: 400,
            message: 'Fields should not empty'
        })
    }

    var user ;

    if(usertype === 'user') {
        try{
            user = await userRegister.findOne({username: username})
        }
        catch(err) {
            return res.send({
                status: 501,
                message: 'Intenal Server Error while fetching the data'
            })
        }
        
        if(!user) {
            return res.send({
                status: 404,
                message: 'User Not Found'
            })
        }
    }
    else if(usertype === 'owner') {
        try{
            user = await ownerRegister.findOne({username: username})
        }
        catch(err){
            return res.send({
                status: 501,
                message: 'Intenal Server Error while fetching the data'
            })
        }
        
        if(!user) {
            return res.send({
                status: 404,
                message: 'User Not Found'
            })
        }
    }
    else if(usertype === 'admin') {
        try {
            user = await adminModel.findOne({username: username})
        }
        catch(err) {
            return res.send({
                status: 501,
                message: 'Intenal Server Error while fetching the data'
            })
        }

        if(!user) {
            console.log(user);
            return res.send({
                status: 404,
                message: 'Incorrect username'
            })
        }
    }
    
    console.log(user);

    if(user.password != password) {
        return res.send({
            status: 406,
            message: 'Invalid Password'
        })
    }
    res.send({
        status: 200,
        message: 'User Sucessfully Logid in'
    })
})



app.post('/userRegister', async (req, res) => {
    const {name, username, email, phoneNo, password} = req.body;
    if(!name || !username || !email || !phoneNo || !password) {
        return res.send({
            status: 200,
            message: 'missing data'
        })
    }
    const userModel = new userRegister({
        name: name,
        username: username,
        email: email,
        phoneNo: phoneNo,
        password: password
    })

    userModel.save().then((re) => {
        return res.send({
            status: 400,
            message: 'Registration Successfully'
        })
    }).catch((err) => {
        return res.send({
            status: 200,
            message: 'database error'
        })
    })
})

app.post('/ownerRegister', (req, res) => {
    const {name, username, email, phoneNo, password} = req.body;
    if(!name || !username || !email || !phoneNo || !password) {
        return res.send({
            status: 200,
            message: 'missing fields'
        })
    }
    const ownerModel = new ownerRegister({
        name: name,
        username: username,
        email: email,
        phoneNo: phoneNo,
        password: password
    })

    ownerModel.save().then(re => {
        return res.send({
            status: 400,
            message: 'Successfully Registered'
        })
    }).catch(err => {
        return res.send({
            status: 200,
            message: 'error while inserting the data in database'
        })
    })
})

module.exports = app;