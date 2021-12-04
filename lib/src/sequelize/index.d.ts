import { Model } from 'sequelize';
import { Actions } from '..';
export declare const sequelizeCrud: <I extends string | number, R extends Model<any, any>>(model: R | (new () => R)) => Omit<Actions<I, R>, "search">;
