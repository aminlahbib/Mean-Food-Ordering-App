import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    auth0ID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    name: {
        type: String,
    },
    adressLine1: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema);

export default User;