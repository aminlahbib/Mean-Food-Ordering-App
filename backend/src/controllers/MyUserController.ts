import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
    // 1. check if the user exists
    // 2. create the user if it doesnt exist
    // 3. return the user object to the calling client

    try {
        const { auth0ID } = req.body;                          // step 1.
        const existingUser = await User.findOne({ auth0ID });  //goes and try too find any user that have an auth0Id thats the same as the auth0Id that we just recived
        if (existingUser) {
            return res.status(200).send();
          }      

        const newUser = new User (req.body);                // step 2.
        await newUser.save();

        res.status(201).json(newUser.toObject());             // step 3.  
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating user" });
      }
    };

export default {
    createCurrentUser,
};