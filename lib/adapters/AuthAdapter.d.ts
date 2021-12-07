export declare type AuthTokenPayload = {
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
export declare abstract class AuthAdapter {
    loginRedirectURL(): Promise<string>;
    logoutRedirectURL(token: string): Promise<string>;
    validateToken(token: string): Promise<AuthTokenPayload>;
}
//# sourceMappingURL=AuthAdapter.d.ts.map