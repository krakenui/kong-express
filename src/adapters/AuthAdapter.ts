import Logger from '../helpers/Logging';

export type AuthTokenPayload = {
    userId: string;
    verified: boolean;
    exp: number;
    iat: number;
    email: string;
    roles?: string;
    displayName?: string;
    profilePicture?: string;
    locale?: string;
};

export abstract class AuthAdapter {
    loginRedirectURL(): Promise<string> {
        throw Error('Method not implement!');
    }

    logoutRedirectURL(token: string): Promise<string> {
        Logger.debug(token);
        throw Error('Method not implement!');
    }

    validateToken(token: string): Promise<AuthTokenPayload> {
        Logger.debug(token);
        throw Error('Method not implement!');
    }
}
