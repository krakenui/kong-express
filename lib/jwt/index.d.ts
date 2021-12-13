export declare type JwtClaim = {
    userId: number;
    email: string;
    verified: boolean;
    scopes?: string;
    displayName?: string;
    profilePicture?: string;
    locale?: string;
};
export declare type JwtPayload = JwtClaim & {
    exp: number;
    iat: number;
};
export declare type JwtToken = string;
export declare class JwtHelpers {
    static generateToken(userInfo: JwtClaim): JwtToken;
    static generateRefreshToken(userInfo: JwtClaim): JwtToken;
    static verifyToken(token: string): JwtPayload;
}
//# sourceMappingURL=index.d.ts.map