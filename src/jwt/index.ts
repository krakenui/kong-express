import { sign, verify } from 'jsonwebtoken';

export type JwtClaim = {
    userId: number;
    email: string;
    verified: boolean;
    scopes?: string;
    displayName?: string;
    profilePicture?: string;
    locale?: string;
};

export type JwtPayload = JwtClaim & {
    exp: number;
    iat: number;
};

export type JwtToken = string;

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'secuas';
const JWT_LIFE_TIME_MINUTES = +(process.env.JWT_LIFE_TIME_MINUTES || 480); // default life time is 8 hours
const JWT_REFRESH_LIFE_TIME_MINUTES = +(
    process.env.JWT_REFRESH_LIFE_TIME_MINUTES || 10080
); // default refresh life time is 1 week

export class JwtHelpers {
    public static generateToken(userInfo: JwtClaim): JwtToken {
        return sign(userInfo, JWT_SECRET_KEY, {
            expiresIn: JWT_LIFE_TIME_MINUTES * 60 * 60,
        });
    }

    public static generateRefreshToken(userInfo: JwtClaim): JwtToken {
        return sign(userInfo, JWT_SECRET_KEY, {
            expiresIn: JWT_REFRESH_LIFE_TIME_MINUTES * 60 * 60,
        });
    }

    public static verifyToken(token: string): JwtPayload {
        return verify(token, JWT_SECRET_KEY) as JwtPayload;
    }
}
