"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApi = exports.IncomingMessage = void 0;
const http = require("http");
class IncomingMessage extends http.IncomingMessage {
}
exports.IncomingMessage = IncomingMessage;
class BaseApi {
    constructor(router, path) {
        this.basPath = '';
        this.basPath = path;
        this.router = router;
    }
    /**
     * Define common get routing
     * @param subPath sub path
     * @param handlers handlers
     */
    GET(subPath, handlers) {
        this.router.get(`${this.basPath}${subPath}`, handlers);
    }
    /**
     * Define common post routing
     * @param subPath sub path
     * @param handlers handlers
     */
    POST(subPath, handlers) {
        this.router.post(`${this.basPath}${subPath}`, handlers);
    }
    /**
     * Define common put routing
     * @param subPath sub path
     * @param handlers handlers
     */
    PUT(subPath, handlers) {
        this.router.put(`${this.basPath}${subPath}`, handlers);
    }
    /**
     * Define common patch routing
     * @param subPath sub path
     * @param handlers handlers
     */
    PATCH(subPath, handlers) {
        this.router.patch(`${this.basPath}${subPath}`, handlers);
    }
    /**
     * Define common delete routing
     * @param subPath sub path
     * @param handlers handlers
     */
    DELETE(subPath, handlers) {
        this.router.delete(`${this.basPath}${subPath}`, handlers);
    }
    /**
     * Define common delete routing
     * @param subPath sub path
     * @param handlers handlers
     */
    OPTIONS(subPath, handlers) {
        this.router.options(`${this.basPath}${subPath}`, handlers);
    }
}
exports.BaseApi = BaseApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGlzL0Jhc2VBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkJBQTZCO0FBRTdCLE1BQWEsZUFBZ0IsU0FBUSxJQUFJLENBQUMsZUFBZTtDQUV4RDtBQUZELDBDQUVDO0FBUUQsTUFBc0IsT0FBTztJQUl6QixZQUFZLE1BQWMsRUFBRSxJQUFZO1FBRmhDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUlEOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsT0FBZSxFQUFFLFFBQWtDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUksQ0FBQyxPQUFlLEVBQUUsUUFBa0M7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLE9BQWUsRUFBRSxRQUFrQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxLQUFLLENBQUMsT0FBZSxFQUFFLFFBQWtDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFlLEVBQUUsUUFBa0M7UUFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksT0FBTyxDQUFDLE9BQWUsRUFBRSxRQUFrQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBaEVELDBCQWdFQyJ9