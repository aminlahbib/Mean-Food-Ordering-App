import  express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute"; 
/* */

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)           /* Connecting the app to the designied db*/
    .then(() => console.log("Connected to DB!"));                       /* displays that the connection was succ with a lil text */

const app = express();                                                  /* create a new express server and assign it to express var */
app.use(express.json());                                                /* auto convert the body to any request we make to our api server to json */
app.use(cors());

app.use("/api/my/user", myUserRoute)                                    /* this line is gonna tell express that any request that starts with /api/my/user is gonna foward the request to myUserRoute file*/
app.listen(5500, ()=> {
    console.log("server started on localhost:5500");
});