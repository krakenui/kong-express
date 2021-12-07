"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseProgressEnd = exports.responseProgress = exports.responseAuthorizationError = exports.responsePermissionDeniedError = exports.responseError = exports.responseSuccess = void 0;
const Logging_1 = require("./Logging");
function responseSuccess(res, payload) {
    Logging_1.default.debug(res.req.url + ' 200 ');
    return res.status(200).send(payload);
}
exports.responseSuccess = responseSuccess;
function responseError(res, error) {
    Logging_1.default.debug(res.req.url + ' 500 ');
    return res.status(500).send(error.message);
}
exports.responseError = responseError;
function responsePermissionDeniedError(res, error) {
    Logging_1.default.debug(res.req.url + ' 403 ');
    const code = error.message;
    return res.status(403).json({
        code,
    });
}
exports.responsePermissionDeniedError = responsePermissionDeniedError;
function responseAuthorizationError(res, error) {
    Logging_1.default.debug(res.req.url + ' 401 ');
    const code = error.message;
    return res.status(401).json({
        code,
    });
}
exports.responseAuthorizationError = responseAuthorizationError;
function responseProgress(res, percent) {
    Logging_1.default.debug(res.req.url + ' 200 PROGRESS ' + percent + '% ');
    if (!res.hasHeader) {
        res.writeHead(200, { 'content-type': 'text/plain' });
    }
    return res.write(JSON.stringify({
        percent: Math.floor(percent),
    }));
}
exports.responseProgress = responseProgress;
function responseProgressEnd(res, percent, payload) {
    Logging_1.default.debug(res.req.url + ' 200 PROGRESS Finish');
    return res.end(JSON.stringify({
        percent: Math.floor(percent),
        payload: payload,
    }));
}
exports.responseProgressEnd = responseProgressEnd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cFRyYW5zZmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL0h0dHBUcmFuc2ZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsdUNBQStCO0FBRS9CLFNBQWdCLGVBQWUsQ0FBQyxHQUFhLEVBQUUsT0FBZTtJQUMxRCxpQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUVwQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFKRCwwQ0FJQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxHQUFhLEVBQUUsS0FBWTtJQUNyRCxpQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUVwQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBSkQsc0NBSUM7QUFFRCxTQUFnQiw2QkFBNkIsQ0FBQyxHQUFhLEVBQUUsS0FBWTtJQUNyRSxpQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUVwQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBRTNCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSTtLQUNQLENBQUMsQ0FBQztBQUNQLENBQUM7QUFSRCxzRUFRQztBQUVELFNBQWdCLDBCQUEwQixDQUFDLEdBQWEsRUFBRSxLQUFZO0lBQ2xFLGlCQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBRXBDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFFM0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJO0tBQ1AsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVJELGdFQVFDO0FBRUQsU0FBZ0IsZ0JBQWdCLENBQUMsR0FBYSxFQUFFLE9BQWU7SUFDM0QsaUJBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRTlELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1FBQ2hCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7S0FDeEQ7SUFFRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUMvQixDQUFDLENBQ0wsQ0FBQztBQUNOLENBQUM7QUFaRCw0Q0FZQztBQUVELFNBQWdCLG1CQUFtQixDQUMvQixHQUFhLEVBQ2IsT0FBZSxFQUNmLE9BQWE7SUFFYixpQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDO0lBRW5ELE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FDVixJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ1gsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQzVCLE9BQU8sRUFBRSxPQUFPO0tBQ25CLENBQUMsQ0FDTCxDQUFDO0FBQ04sQ0FBQztBQWJELGtEQWFDIn0=