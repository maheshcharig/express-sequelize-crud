import { RequestHandler } from 'express'

export type Create<I extends string | number, R,req,res> = (
  body: R
) => Promise<R & { id: I }>

export const create = <I extends string | number, R>(
  doCreate: any
): RequestHandler => async (req, res, next) => {
  try {
    const record = await doCreate(req.body,req,res)
    res.status(201).json(record)
  } catch (error) {
    next(error)
  }
}
