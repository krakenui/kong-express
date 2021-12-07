"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtHelpers = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class JwtHelpers {
    static generateToken(user) {
        return (0, jsonwebtoken_1.sign)(user, JwtHelpers.JWT_SECRET_KEY, {
            expiresIn: JwtHelpers.JWT_EXPIRED_MINUTES * 60 * 60,
        });
    }
    static verifyToken(token) {
        return (0, jsonwebtoken_1.verify)(token, JwtHelpers.JWT_SECRET_KEY);
    }
}
exports.JwtHelpers = JwtHelpers;
JwtHelpers.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'YwAPkuLtD9NRaQG6';
JwtHelpers.JWT_EXPIRED_MINUTES = +(process.env.JWT_EXPIRED_MINUTES || 120);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvand0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUE0QztBQXNCNUMsTUFBYSxVQUFVO0lBT1osTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFjO1FBQ3RDLE9BQU8sSUFBQSxtQkFBSSxFQUFDLElBQUksRUFBRSxVQUFVLENBQUMsY0FBYyxFQUFFO1lBQ3pDLFNBQVMsRUFBRSxVQUFVLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxHQUFHLEVBQUU7U0FDdEQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBYTtRQUNuQyxPQUFPLElBQUEscUJBQU0sRUFBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGNBQWMsQ0FBYSxDQUFDO0lBQ2hFLENBQUM7O0FBZkwsZ0NBZ0JDO0FBZmtCLHlCQUFjLEdBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxJQUFJLGtCQUFrQixDQUFDO0FBQ3RDLDhCQUFtQixHQUFHLENBQUMsQ0FDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxHQUFHLENBQ3pDLENBQUMifQ==