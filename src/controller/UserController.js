import { userModel } from "../model/UserModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users);
    } catch (error) {
        res.send("");
    }
}

export const getUsersById = async (req, res) => {
    const { id } = req.params;
    const users = await userModel.findById(id);
    res.send(users);
}


export const addUser = async (req, res) => {
    try {
        const { Username, Email, Password, Age, isMarried } = req.body;
        const newUser = new userModel({
            Username,
            Email,
            Password,
            Age,
            isMarried,
        });
        await newUser.save();
        res.status(200).send("successfull");
    } catch (error) {
        res.send("not added");
    }
}

export const updateUserById = async (req, res) => {
    const { Username, Email, Password, Age, isMarried } = req.body;
    const { id } = req.params;
    const users = await userModel.findByIdAndUpdate(id,{ Username, Email, Password, Age, isMarried });
    res.send("ugurla yenilendi");
}

export const deleteUserById = async (req, res) => {
    const { id } = req.params;
    const users = await userModel.findByIdAndDelete(id);
    res.send("ugurla temizlendi");
}