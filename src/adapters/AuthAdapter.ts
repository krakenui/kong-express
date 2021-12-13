import { Request } from 'express';

import Logger from '../helpers/Logging';
import { JwtPayload } from '../jwt';

export enum UserRole {
    Admin = 'admin',
    Customer = 'customer',
}

export type KongExpressRequest = Request & {
    authContext: AuthContext;
    query: any;
    params: any;
};

export type AuthContext = JwtPayload;

export abstract class AuthAdapter {
    loginRedirectURL(): Promise<string> {
        throw Error('Method not implement!');
    }

    logoutRedirectURL(token: string): Promise<string> {
        Logger.debug(token);
        throw Error('Method not implement!');
    }

    validateToken(token: string): Promise<AuthContext> {
        Logger.debug(token);
        throw Error('Method not implement!');
    }
}
