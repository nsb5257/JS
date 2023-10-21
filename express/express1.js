const express = require('express');

const app = express();

app.use(express.json());

const courses = [
    {id: 1, reason:'pragna'},
    {id: 2, reason:'santosh'},
    {id: 3, reason:'abhishek'},
];

app.get('/',(req,res) =>{
    res.send("HI!!");
});

app.get('/api/courses',(req,res) => {
    res.send([1,2,3])
});

//POST REQUEST
app.post('/api/courses', (req,res)=>{
    const course = {
        id: courses.length +1,
        reason: req.body.reason
    };
    courses.push(course);
    res.send(course);
})

app.get('/api/courses/:id', (req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('NOT FOUND');
    else res.send(course);
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`SUNRAHE VEEDU!! ${port}`))