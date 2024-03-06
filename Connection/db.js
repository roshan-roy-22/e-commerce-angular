const mongoose = require('mongoose');

const connectionString=process.env.connectionString

mongoose.connect(connectionString).then(
    (res)=>{
        console.log("Daily Cart connected succesfully");
    }
).catch((err)=>{
    console.log(err);
})