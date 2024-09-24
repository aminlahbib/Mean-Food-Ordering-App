import  express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected to DB!"));
    
const app = express();                                                  /* create a new express server and assign it to express var */
app.use(express.json());                                                /* auto convert the body to any request we make to our api server to json */
app.use(cors());

app.get("/test", async (req: Request, res: Response)=>{                 /* when the backend gets a request it gives a response saying hello */                    
    res.json({ message: "Hello!"});
});

app.listen(5500, ()=> {
    console.log("server started on localhost:5500");
})