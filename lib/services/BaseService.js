"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = exports.IncomingMessage = void 0;
const http = require("http");
class IncomingMessage extends http.IncomingMessage {
}
exports.IncomingMessage = IncomingMessage;
class BaseService {
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
exports.BaseService = BaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvQmFzZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNkJBQTZCO0FBRTdCLE1BQWEsZUFBZ0IsU0FBUSxJQUFJLENBQUMsZUFBZTtDQUV4RDtBQUZELDBDQUVDO0FBUUQsTUFBc0IsV0FBVztJQUk3QixZQUFZLE1BQWMsRUFBRSxJQUFZO1FBRmhDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFHakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUlEOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsT0FBZSxFQUFFLFFBQWtDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUksQ0FBQyxPQUFlLEVBQUUsUUFBa0M7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLE9BQWUsRUFBRSxRQUFrQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBZSxFQUFFLFFBQWtDO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE9BQU8sQ0FBQyxPQUFlLEVBQUUsUUFBa0M7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDSjtBQXZERCxrQ0F1REMifQ==