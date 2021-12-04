import { RequestHandler } from 'express'

export type Destroy = (id: string,req:any,res:any) => Promise<any>

export const destroy = (doDetroy: Destroy): RequestHandler => async (
  req,
  res,
  next
) => {
  try {
    await doDetroy(req.params.id,req,res)
    res.json({ id: req.params.id })
  } catch (error) {
    next(error)
  }
}
