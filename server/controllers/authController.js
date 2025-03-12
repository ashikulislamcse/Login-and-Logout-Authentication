import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async(req, res) => {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashPassword });
    try {
        await newUser.save();
    res.status(201).json("User created successfully");
    } catch (error) {
        res.status(500).json({success: false, message: 'User already exists'});
    }
};