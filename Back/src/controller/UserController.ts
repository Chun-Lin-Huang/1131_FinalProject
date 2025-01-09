import { Contorller } from "../abstract/Contorller";
import { Request, response, Response } from "express";
import { UserService } from "../Service/UserService";
import { resp } from "../utils/resp";
import { DBResp } from "../interfaces/DBResp";
import { Order } from "../interfaces/Order";
require('dotenv').config()

export class UserController extends Contorller {
    protected service: UserService;

    constructor() {
        super();
        this.service = new UserService();
    }

    public async findAll(Request: Request, Response: Response) {

        const res: resp<Array<DBResp<Order>> | undefined> = {
            code: 200,
            message: "",
            body: undefined
        }

        const dbResp = await this.service.getAllOrders();
        if (dbResp) {
            res.body = dbResp;
            res.message = "find sucess";
            Response.send(res);
        } else {
            res.code = 500;
            res.message = "server error";
            Response.status(500).send(res);
        }

    }

    public async insertOne(Request: Request, Response: Response) {
        const resp = await this.service.insertOne(Request.body)
        Response.status(resp.code).send(resp)
    }

    public async deleteBySid(Request: Request, Response: Response) {
        const { sid } = Request.query;
        if (!sid || typeof sid !== "string") {
            return Response.status(400).send({ message: "Invalid sid provided" });
        }
        const resp = await this.service.deleteBySid(sid);
        Response.status(resp.code).send(resp);
    }

    public async updateOrderBySid(Request: Request, Response: Response) {
        const { sid, name, phoneNumber, remark } = Request.body;
        const resp = await this.service.updateOrderBySid(sid, name, phoneNumber, remark);
        Response.status(resp.code).send(resp);
    }
    
    // 查詢單筆訂單
    public async findOne(Request: Request, Response: Response) {
        const { sid } = Request.query;
        const res: resp<DBResp<Order> | undefined> = {
            code: 200,
            message: "",
            body: undefined
        };

        if (!sid || typeof sid !== "string") {
            res.code = 400;
            res.message = "Invalid sid provided";
            return Response.status(400).send(res);
        }

        const dbResp = await this.service.getOrderBySid(String(sid)); 
        if (dbResp) {
            res.body = dbResp;
            res.message = "Order found";
            return Response.send(res);
        } else {
            res.code = 404;
            res.message = "Order not found";
            return Response.status(404).send(res);
        }
    }
}