"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdapter = exports.UserRole = void 0;
const Logging_1 = require("../helpers/Logging");
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Customer"] = "customer";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWRhcHRlcnMvQXV0aEFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsZ0RBQXdDO0FBR3hDLElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNoQiwyQkFBZSxDQUFBO0lBQ2YsaUNBQXFCLENBQUE7QUFDekIsQ0FBQyxFQUhXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBR25CO0FBVUQsTUFBc0IsV0FBVztJQUM3QixnQkFBZ0I7UUFDWixNQUFNLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhO1FBQzNCLGlCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3ZCLGlCQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBZEQsa0NBY0MifQ==