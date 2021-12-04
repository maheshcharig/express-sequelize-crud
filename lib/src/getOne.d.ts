import { RequestHandler } from 'express';
export declare type GetOne<R> = (identifier: string, req: any, res: any) => Promise<R | null>;
export declare const getOne: <R>(doGetOne: GetOne<R>) => RequestHandler;
