import express from 'express';
import { taskRouter } from './src/routes/taskRoutes.js';
import { startDB } from './src/conf/database.js';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors())

const port= 3000;

app.use('/', taskRouter)

app.listen(port,() => {
         console.log(`server listening http://localhost:${port}`)
         startDB()
})
 
/*app.post('/api/posteo', function (req,res){
      const data= req.body;

      res.send(data)
})
*/
/*app.get('/',(req, res) => {

       // res.send("Hola mundo")
 });
*/
  