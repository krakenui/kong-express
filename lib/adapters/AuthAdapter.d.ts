import { Request } from 'express';
import { JwtPayload } from '../jwt';
export declare enum UserRole {
    Admin = "admin",
    Customer = "customer"
}
export declare type KongExpressRequest = Request & {
    authContext: AuthContext;
    query: any;
    params: any;
};
export declare type AuthContext = JwtPayload;
export declare abstract class AuthAdapter {
    loginRedirectURL(): Promise<string>;
    logoutRedirectURL(token: string): Promise<string>;
    validateToken(token: string): Promise<AuthContext>;
}
//# sourceMappingURL=AuthAdapter.d.ts.map