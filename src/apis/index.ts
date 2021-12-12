import { Router } from 'express';
import { BaseApi } from './BaseApi';

export * from './BaseApi';

export function ConnectRoutes(router: Router, controllers: BaseApi[]): Router {
    controllers.forEach((c) => {
        c.initRoutes();
    });

    return router;
}
