export declare type UserInfo = {
    userId: string;
    verified?: boolean;
    email: string;
    roles?: string;
    displayName?: string;
    profilePicture?: string;
};
export declare type JwtToken = {
    userId: string;
    verified: boolean;
    exp: number;
    iat: number;
    email: string;
    roles?: string;
    displayName?: string;
    profilePicture?: string;
};
export declare class JwtHelpers {
    private static JWT_SECRET_KEY;
    private static JWT_EXPIRED_MINUTES;
    static generateToken(user: UserInfo): string;
    static verifyToken(token: string): JwtToken;
}
//# sourceMappingURL=index.d.ts.map