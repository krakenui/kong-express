"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleOAuth2 = void 0;
const google_auth_library_1 = require("google-auth-library");
const AuthAdapter_1 = require("./AuthAdapter");
// Google's OAuth 2.0 endpoint for revoking access tokens.
const GOOGLE_OAUTH2_API = process.env.GOOGLE_OAUTH2_API || 'https://oauth2.googleapis.com';
// Google's OAuth 2.0 endpoint for requesting an access token
const GOOGLE_OAUTH2_ENDPOINT = process.env.GOOGLE_OAUTH2_ENDPOINT ||
    'https://accounts.google.com/o/oauth2/v2';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_AUDIENCE = process.env.GOOGLE_CLIENT_AUDIENCE;
const API_OAUTH2_REDIRECT_URL = process.env.API_OAUTH2_REDIRECT_URL || '';
class GoogleOAuth2 extends AuthAdapter_1.AuthAdapter {
    constructor() {
        super(...arguments);
        this.oAuth2Client = new google_auth_library_1.OAuth2Client();
    }
    loginRedirectURL() {
        let query = `client_id=${GOOGLE_CLIENT_ID}`;
        query += '&response_type=code';
        query += '&scope=openid email';
        query += '&access_type=offline';
        query += `&redirect_uri=${decodeURIComponent(API_OAUTH2_REDIRECT_URL)}`;
        return Promise.resolve(`${GOOGLE_OAUTH2_ENDPOINT}/auth?${query}`);
    }
    logoutRedirectURL(token) {
        return Promise.resolve(`${GOOGLE_OAUTH2_API}/revoke?token=${token}`);
    }
    validateToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const ticket = yield this.oAuth2Client.verifyIdToken({
                idToken: token,
                audience: GOOGLE_CLIENT_AUDIENCE,
                maxExpiry: 25000,
            });
            const tokenPayload = ticket.getPayload();
            if (tokenPayload == null) {
                throw Error('Token invalid');
            }
            return {
                userId: +tokenPayload.sub,
                verified: !!tokenPayload.email_verified,
                email: tokenPayload.email || '',
                exp: tokenPayload.exp,
                iat: tokenPayload.iat,
                displayName: tokenPayload.name,
                locale: tokenPayload.locale,
                profilePicture: tokenPayload.picture,
            };
        });
    }
}
exports.GoogleOAuth2 = GoogleOAuth2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlT0F1dGgyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FkYXB0ZXJzL0dvb2dsZU9BdXRoMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2REFBbUQ7QUFFbkQsK0NBQXlEO0FBRXpELDBEQUEwRDtBQUMxRCxNQUFNLGlCQUFpQixHQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLCtCQUErQixDQUFDO0FBQ3JFLDZEQUE2RDtBQUM3RCxNQUFNLHNCQUFzQixHQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQjtJQUNsQyx5Q0FBeUMsQ0FBQztBQUM5QyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7QUFDdEQsTUFBTSxzQkFBc0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0FBQ2xFLE1BQU0sdUJBQXVCLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsSUFBSSxFQUFFLENBQUM7QUFFMUUsTUFBYSxZQUFhLFNBQVEseUJBQVc7SUFBN0M7O1FBQ1ksaUJBQVksR0FBRyxJQUFJLGtDQUFZLEVBQUUsQ0FBQztJQXVDOUMsQ0FBQztJQXJDRyxnQkFBZ0I7UUFDWixJQUFJLEtBQUssR0FBRyxhQUFhLGdCQUFnQixFQUFFLENBQUM7UUFDNUMsS0FBSyxJQUFJLHFCQUFxQixDQUFDO1FBQy9CLEtBQUssSUFBSSxxQkFBcUIsQ0FBQztRQUMvQixLQUFLLElBQUksc0JBQXNCLENBQUM7UUFDaEMsS0FBSyxJQUFJLGlCQUFpQixrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUM7UUFFeEUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsc0JBQXNCLFNBQVMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBYTtRQUMzQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxpQkFBaUIsaUJBQWlCLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVLLGFBQWEsQ0FBQyxLQUFhOztZQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO2dCQUNqRCxPQUFPLEVBQUUsS0FBSztnQkFDZCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxTQUFTLEVBQUUsS0FBSzthQUNuQixDQUFDLENBQUM7WUFFSCxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDekMsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO2dCQUN0QixNQUFNLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNoQztZQUVELE9BQU87Z0JBQ0gsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUc7Z0JBQ3pCLFFBQVEsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWM7Z0JBQ3ZDLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQy9CLEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRztnQkFDckIsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHO2dCQUNyQixXQUFXLEVBQUUsWUFBWSxDQUFDLElBQUk7Z0JBQzlCLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTTtnQkFDM0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxPQUFPO2FBQ3ZDLENBQUM7UUFDTixDQUFDO0tBQUE7Q0FDSjtBQXhDRCxvQ0F3Q0MifQ==