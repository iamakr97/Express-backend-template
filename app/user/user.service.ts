import { type IUser } from "./user.dto";
import userSchema from "./user.schema";

export const createUser = async(data: IUser) => {
    const user = new userSchema(data);
    return await user.save();
}