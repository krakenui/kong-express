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
exports.validAuthentication = void 0;
const adapters_1 = require("../adapters");
const HttpTransfers_1 = require("../helpers/HttpTransfers");
function validAuthentication(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const header = request.headers;
        const token = (header.Authorization || header.authorization);
        if (token == null) {
            // Must have authorization token.
            return (0, HttpTransfers_1.responseAuthorizationError)(response, new Error('Request must have authorization token.'));
        }
        try {
            const payload = yield adapters_1.default.validateToken(token);
            request = Object.assign(Object.assign({}, request), { operatorContext: payload });
            next();
        }
        catch (_a) {
            return (0, HttpTransfers_1.responseAuthorizationError)(response, new Error('Token invalid.'));
        }
    });
}
exports.validAuthentication = validAuthentication;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvQXV0aEhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsMENBQXVDO0FBQ3ZDLDREQUFzRTtBQUV0RSxTQUFzQixtQkFBbUIsQ0FDckMsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsSUFBa0I7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDL0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQVcsQ0FBQztRQUV2RSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixpQ0FBaUM7WUFDakMsT0FBTyxJQUFBLDBDQUEwQixFQUM3QixRQUFRLEVBQ1IsSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FDdEQsQ0FBQztTQUNMO1FBRUQsSUFBSTtZQUNBLE1BQU0sT0FBTyxHQUFHLE1BQU0sa0JBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEQsT0FBTyxHQUFHLGdDQUNILE9BQU8sS0FDVixlQUFlLEVBQUUsT0FBTyxHQUNwQixDQUFDO1lBRVQsSUFBSSxFQUFFLENBQUM7U0FDVjtRQUFDLFdBQU07WUFDSixPQUFPLElBQUEsMENBQTBCLEVBQzdCLFFBQVEsRUFDUixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUM5QixDQUFDO1NBQ0w7SUFDTCxDQUFDO0NBQUE7QUE5QkQsa0RBOEJDIn0=