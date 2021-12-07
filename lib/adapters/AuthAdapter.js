"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdapter = void 0;
const Logging_1 = require("../helpers/Logging");
class AuthAdapter {
    loginRedirectURL() {
        throw Error('Method not implement!');
    }
    logoutRedirectURL(token) {
        Logging_1.default.debug(token);
        throw Error('Method not implement!');
    }
    validateToken(token) {
        Logging_1.default.debug(token);
        throw Error('Method not implement!');
    }
}
exports.AuthAdapter = AuthAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRhcHRlcnMvQXV0aEFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsZ0RBQXdDO0FBb0J4QyxNQUFzQixXQUFXO0lBQzdCLGdCQUFnQjtRQUNaLE1BQU0sS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQWE7UUFDM0IsaUJBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsTUFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDdkIsaUJBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsTUFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUFkRCxrQ0FjQyJ9