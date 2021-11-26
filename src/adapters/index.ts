import { AuthAdapter } from './AuthAdapter';
import { GoogleOAuth2 } from './GoogleOAuth2';

const AuthInstance: AuthAdapter = new GoogleOAuth2();

export default AuthInstance;
