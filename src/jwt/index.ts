import { sign, verify } from 'jsonwebtoken';

export type UserInfo = {
    userId: string;
    verified?: boolean;
    email: string;
    roles?: string;
    displayName?: string;
    profilePicture?: string;
};

export type JwtToken = {
    userId: string;
    verified: boolean;
    exp: number;
    iat: number;
    email: string;
    roles?: string;
    displayName?: string;
    profilePicture?: string;
};

export class JwtHelpers {
    private static JWT_SECRET_KEY =
        process.env.JWT_SECRET_KEY || 'YwAPkuLtD9NRaQG6';
    private static JWT_EXPIRED_MINUTES = +(
        process.env.JWT_EXPIRED_MINUTES || 120
    );

    public static generateToken(user: UserInfo): string {
        return sign(user, JwtHelpers.JWT_SECRET_KEY, {
            expiresIn: JwtHelpers.JWT_EXPIRED_MINUTES * 60 * 60,
        });
    }

    public static verifyToken(token: string): JwtToken {
        return verify(token, JwtHelpers.JWT_SECRET_KEY) as JwtToken;
    }
}
