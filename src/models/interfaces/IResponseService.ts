export interface IResponseService<T> {
    statusCode: number;
    data: [] | T[] | T;
}