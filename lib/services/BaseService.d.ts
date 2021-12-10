/// <reference types="node" />
import { NextFunction, Router } from 'express';
import * as http from 'http';
export declare class IncomingMessage extends http.IncomingMessage {
    originalUrl?: http.IncomingMessage['url'] | undefined;
}
export declare type ExpressRequesthandlers = (req: IncomingMessage, res: http.ServerResponse, next: NextFunction) => void;
export declare abstract class BaseService<ApiType, ModelType> {
    router: Router;
    private basPath;
    constructor(router: Router, path: string);
    abstract initRoutes(): void;
    /**
     * Define common get routing
     * @param subPath sub path
     * @param handlers handlers
     */
    GET(subPath: string, handlers: ExpressRequesthandlers[]): void;
    /**
     * Define common post routing
     * @param subPath sub path
     * @param handlers handlers
     */
    POST(subPath: string, handlers: ExpressRequesthandlers[]): void;
    /**
     * Define common put routing
     * @param subPath sub path
     * @param handlers handlers
     */
    PUT(subPath: string, handlers: ExpressRequesthandlers[]): void;
    /**
     * Define common delete routing
     * @param subPath sub path
     * @param handlers handlers
     */
    DELETE(subPath: string, handlers: ExpressRequesthandlers[]): void;
    /**
     * Define common delete routing
     * @param subPath sub path
     * @param handlers handlers
     */
    OPTIONS(subPath: string, handlers: ExpressRequesthandlers[]): void;
}
//# sourceMappingURL=BaseService.d.ts.map