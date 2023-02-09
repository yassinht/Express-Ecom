const mongoose=require('mongoose');

const dbConnection=()=>{
    mongoose.connect(process.env.DB_URL).then((conn)=>{
        console.log(`DataBase Connected:${conn.connection.host}`)
    }).catch((err)=>{
        console.log(`DataBase Error ${err}`);
        process.exit(1)
    })
    
}

module.exports=dbConnection