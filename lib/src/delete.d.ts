import { RequestHandler } from 'express';
export declare type Destroy = (id: string, req: any, res: any) => Promise<any>;
export declare const destroy: (doDetroy: Destroy) => RequestHandler;
