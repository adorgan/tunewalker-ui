const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const verify = require('./authVerify')




router.post('/admin/signup', async(req, res) => {

    const priorUser = await User.findOne({username: req.body.username});
    if(priorUser){
        return res.status(400).send("username already exists");
    }

    const salt = await bcrypt.genSalt(14);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        password: hashedPassword
    })

    user.save()
    .then(() => {
        res.status(200).send("user added successfully");
    })
    .catch(err => {
        res.status(500).send(err);
    });
})

router.post('/admin/login', async(req, res) => {

    const user = await User.findOne({username: req.body.username});
    if(!user){
        return res.status(404).send("username not found");
    }


    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(401).send('incorrect credentials');
    }

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.status(200).send({token: token})


})

router.get('/admin/users', verify, (req, res) => {
    User.find({}, (err, users) => {
        if(err){
            return res.status(500).send(err);
        }

        return res.status(200).json(users);
    } )
})


module.exports = router;