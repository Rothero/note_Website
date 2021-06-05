import mongoose from 'mongoose';

const connection ={}

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

async function dbConnect(){
  if (connection.isConnected){
    return;  
  }
  const db= await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  connection.isConnected= db.connections[0].readyState;
  console.log(connection.isConnected);
}

  export default dbConnect;


