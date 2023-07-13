const express = require('express');
const mongoose = require('mongoose');
const db = require('./db');
const bodyParser = require('body-parser');
var cors = require('cors')


const UserModel = require('./models/userModel');
const CourseModel = require('./models/coursesModel');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send("Yokoso");
});

app.get('/login', async (req, res) => {
    const { uname, pass, role } = req.query;

    const user = await UserModel.findOne({ username: uname });

    if (!user) {
        return res.status(400).json({ auth: false, message: 'Invalid username or password', nav: role });
    }

    if (pass === user.password && role === user.role) {
        res.status(200).json({ auth: true, message: 'Login successful', nav: role });
    } else {
        return res.status(400).json({ auth: false, message: 'Invalid username or password', nav: role });
    }
});


const saltRounds = 10;

app.get('/signup', (req, res) => {
    const { username, email, password, role } = req.query;

    console.log(username, email, password, role);

    const user = new UserModel({
        username: username,
        email: email,
        password: password,
        role: role
    });
    user.save();

    console.log("user created");

    res.status(201).json({ auth: true, message: 'User created' });
});

app.get('/userDetails', async (req, res) => {
    const { username } = req.query;
    console.log(req.body);
    const user = await UserModel.findOne({ username });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json({ details: user });
});

app.get("/getCourses", async (req, res) => {
    const courses = await CourseModel.find();
    console.log(courses);
    res.send(courses);
});

app.get("/getCoursedesc", async (req, res) => {
    const {courseid} = req.query
    const course = await CourseModel.findOne({ courseid });
    console.log(course);
    res.send(course);
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});

// app.get('/userDetails', async (req, res) => {
//     const { username } = req.query;
//     const user = await UserModel.findOne({ username });
  
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
  
//     res.status(200).json({ details: user });
//   });
  
//   app.listen(3001, () => {
//     console.log('Server started on port 3001');
//   });
