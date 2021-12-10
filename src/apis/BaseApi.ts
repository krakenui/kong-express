import { NextFunction, Router } from 'express';
import * as http from 'http';

export class IncomingMessage extends http.IncomingMessage {
    originalUrl?: http.IncomingMessage['url'] | undefined;
}

export type ExpressRequesthandlers = (
    req: IncomingMessage,
    res: http.ServerResponse,
    next: NextFunction
) => void;

export abstract class BaseApi {
    public router: Router;
    private basPath = '';

    constructor(router: Router, path: string) {
        this.basPath = path;
        this.router = router;
    }

    public abstract initRoutes(): void;

    /**
     * Define common get routing
     * @param subPath sub path
     * @param handlers handlers
     */
    public GET(subPath: string, handlers: ExpressRequesthandlers[]) {
        this.router.get(`${this.basPath}${subPath}`, handlers);
    }

    /**
     * Define common post routing
     * @param subPath sub path
     * @param handlers handlers
     */
    public POST(subPath: string, handlers: ExpressRequesthandlers[]) {
        this.router.post(`${this.basPath}${subPath}`, handlers);
    }

    /**
     * Define common put routing
     * @param subPath sub path
     * @param handlers handlers
     */
    public PUT(subPath: string, handlers: ExpressRequesthandlers[]) {
        this.router.put(`${this.basPath}${subPath}`, handlers);
    }

    /**
     * Define common patch routing
     * @param subPath sub path
     * @param handlers handlers
     */
     public PATCH(subPath: string, handlers: ExpressRequesthandlers[]) {
        this.router.patch(`${this.basPath}${subPath}`, handlers);
    }

    /**
     * Define common delete routing
     * @param subPath sub path
     * @param handlers handlers
     */
    public DELETE(subPath: string, handlers: ExpressRequesthandlers[]) {
        this.router.delete(`${this.basPath}${subPath}`, handlers);
    }

    /**
     * Define common delete routing
     * @param subPath sub path
     * @param handlers handlers
     */
    public OPTIONS(subPath: string, handlers: ExpressRequesthandlers[]) {
        this.router.options(`${this.basPath}${subPath}`, handlers);
    }
}
