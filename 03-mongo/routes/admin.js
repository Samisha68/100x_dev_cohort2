const express=require('express');
const adminMiddleware = require("../middleware/admin");
const {Admin,Course}=require("../db");
const router = express.Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    //check if a user with this username already exists?
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: 'admin created successfully'
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title= req.body.title;
    const description= req.body.description;
    const imagelink= req.body.imagelink;
    const price= req.body.price;
    const newCourse= await Course.create({
        title,
        description,
        imagelink,
        price
    })
    res.json({
        message: 'Course created Successfully',courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    const response= await Course.find({ })
    .then(function(response){
        res.json(
            {
                courses: response
            }
        )
    })
});

module.exports = router;