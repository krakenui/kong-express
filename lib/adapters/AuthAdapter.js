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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRhcHRlcnMvQXV0aEFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBQXdDO0FBY3hDLE1BQXNCLFdBQVc7SUFDN0IsZ0JBQWdCO1FBQ1osTUFBTSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBYTtRQUMzQixpQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixNQUFNLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN2QixpQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixNQUFNLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQWRELGtDQWNDIn0=