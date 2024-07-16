const express = require('express');
const app = express();

// app.use('/',(req, res)=>{
//     res.send("hello world");
// });

// app.get('/',(req,res)=>{
//     res.send("metode get");
// });

// app.post('/',(req,res)=>{
//     res.send("metode post");
// });

// app.delete('/',(req,res)=>{
//     res.send("metode delete");
// });

app.put('/',(req,res)=>{
    res.send("metode put");
});

app.listen(8000,()=>{
    console.log("Server running on port:8000");
});