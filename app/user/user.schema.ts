import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { type IUser } from "./user.dto";

const hashPassword = async function (password: string): Promise<string> {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

const UserSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        required: true
    }
}, { timestamps: true });

UserSchema.pre("save", async function (next) {
    if (this.password) {
        this.password = await hashPassword(this.password);
    }
    next();
});

export default mongoose.model<IUser>("User", UserSchema);