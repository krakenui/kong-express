import { AuthAdapter, AuthTokenPayload } from './AuthAdapter';
export declare class GoogleOAuth2 extends AuthAdapter {
    private oAuth2Client;
    loginRedirectURL(): Promise<string>;
    logoutRedirectURL(token: string): Promise<string>;
    validateToken(token: string): Promise<AuthTokenPayload>;
}
//# sourceMappingURL=GoogleOAuth2.d.ts.map