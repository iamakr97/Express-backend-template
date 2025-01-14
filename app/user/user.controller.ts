import asyncHandler from "express-async-handler";
import { type Request, type Response } from "express";
import * as userService from "./user.service";
import { createResponse } from "../common/helper/response.helper";

export const createUser = asyncHandler(async (req: Request, res: Response) => {
    const data = req.body;
    const user = await userService.createUser(data);
    res.send(createResponse(user, "user created successfully"));
});