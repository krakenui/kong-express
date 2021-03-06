import { Response } from 'express';
export declare function responseSuccess(res: Response, payload: object): Response<any, Record<string, any>>;
export declare function responseError(res: Response, error: Error): Response<any, Record<string, any>>;
export declare function responsePermissionDeniedError(res: Response, error: Error): Response<any, Record<string, any>>;
export declare function responseAuthorizationError(res: Response, error: Error): Response<any, Record<string, any>>;
export declare function responseProgress(res: Response, percent: number): boolean;
export declare function responseProgressEnd(res: Response, percent: number, payload?: any): void;
//# sourceMappingURL=HttpTransfers.d.ts.map