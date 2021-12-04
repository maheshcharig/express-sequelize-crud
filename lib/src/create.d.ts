import { RequestHandler } from 'express';
export declare type Create<I extends string | number, R, req, res> = (body: R) => Promise<R & {
    id: I;
}>;
export declare const create: <I extends string | number, R>(doCreate: any) => RequestHandler;
