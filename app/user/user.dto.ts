import { type BaseSchema } from "../common/dto/base.dto";

export interface IUser extends BaseSchema {
    name: string;
    email: string;
    password: string;
    active: boolean;
    role: "USER" | "ADMIN";
}