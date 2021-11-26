import { OAuth2Client } from 'google-auth-library';

import { AuthAdapter, AuthTokenPayload } from './AuthAdapter';

// Google's OAuth 2.0 endpoint for revoking access tokens.
const GOOGLE_OAUTH2_API =
    process.env.GOOGLE_OAUTH2_API || 'https://oauth2.googleapis.com';
// Google's OAuth 2.0 endpoint for requesting an access token
const GOOGLE_OAUTH2_ENDPOINT =
    process.env.GOOGLE_OAUTH2_ENDPOINT ||
    'https://accounts.google.com/o/oauth2/v2';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_AUDIENCE = process.env.GOOGLE_CLIENT_AUDIENCE;
const API_OAUTH2_REDIRECT_URL = process.env.API_OAUTH2_REDIRECT_URL || '';

export class GoogleOAuth2 extends AuthAdapter {
    private oAuth2Client = new OAuth2Client();

    loginRedirectURL(): Promise<string> {
        let query = `client_id=${GOOGLE_CLIENT_ID}`;
        query += '&response_type=code';
        query += '&scope=openid email';
        query += '&access_type=offline';
        query += `&redirect_uri=${decodeURIComponent(API_OAUTH2_REDIRECT_URL)}`;

        return Promise.resolve(`${GOOGLE_OAUTH2_ENDPOINT}/auth?${query}`);
    }

    logoutRedirectURL(token: string): Promise<string> {
        return Promise.resolve(`${GOOGLE_OAUTH2_API}/revoke?token=${token}`);
    }

    async validateToken(token: string): Promise<AuthTokenPayload> {
        const ticket = await this.oAuth2Client.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_AUDIENCE,
            maxExpiry: 25000,
        });

        const tokenPayload = ticket.getPayload();
        if (tokenPayload == null) {
            throw Error('Token invalid');
        }

        return {
            userId: tokenPayload.sub,
            verified: !!tokenPayload.email_verified,
            email: tokenPayload.email || '',
            exp: tokenPayload.exp,
            iat: tokenPayload.iat,
            displayName: tokenPayload.name,
            locale: tokenPayload.locale,
            profilePicture: tokenPayload.picture,
        };
    }
}
