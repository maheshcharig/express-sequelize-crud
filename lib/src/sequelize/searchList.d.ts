import { FindOptions, WhereOptions } from 'sequelize';
export declare type GetSearchList = <R>(q: string, limit: number) => Promise<{
    rows: R[];
    count: number;
}>;
export declare const sequelizeSearchFields: <R>(model: {
    findAll: (findOptions: FindOptions) => Promise<R[]>;
}, searchableFields: string[], comparator?: symbol) => (q: string, limit: number, scope?: WhereOptions) => Promise<{
    rows: R[];
    count: number;
}>;
export declare const prepareQueries: (searchableFields: string[]) => (q: string, comparator?: symbol) => WhereOptions[];
