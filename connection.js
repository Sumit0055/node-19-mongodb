//2:-
const mongoose=require('mongoose');

//.................................yah asynchronus code hai ......................
async function connection(){
    try{
        await mongoose.connect(`mongodb://localhost:27017/batch-3`);//.....connect yah promise return kar rha hai 100% 
        console.log("data base is connected");
    }catch(err){
        console.log(err);
    }
}
module.exports=connection;