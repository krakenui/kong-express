"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectDefaultMiddlewares = void 0;
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const injectDefaultMiddlewares = (app) => {
    const CORS_WHITE_LIST = process.env.CORS_WHITE_LIST
        ? process.env.CORS_WHITE_LIST.split(',')
        : ['*'];
    // logging with morgan
    app.use(morgan('combined'));
    // protect with helmetjs
    app.use(helmet());
    // enable cors with cors
    app.use(cors({
        origin: function (origin, callback) {
            // allow all origins
            if (CORS_WHITE_LIST.indexOf('*') >= 0) {
                callback(null, true);
            }
            else if (!!origin && CORS_WHITE_LIST.indexOf(origin) >= 0) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
    }));
    // parse body to json
    app.use(express.json());
};
exports.injectDefaultMiddlewares = injectDefaultMiddlewares;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQTZCO0FBQzdCLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBRWpDLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxHQUF3QixFQUFFLEVBQUU7SUFDMUQsTUFBTSxlQUFlLEdBQWEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlO1FBQ3pELENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRVosc0JBQXNCO0lBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsd0JBQXdCO0lBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsQix3QkFBd0I7SUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FDSCxJQUFJLENBQUM7UUFDRCxNQUFNLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBUTtZQUM5QixvQkFBb0I7WUFDcEIsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN4QjtpQkFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pELFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0gsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQzthQUM5QztRQUNMLENBQUM7S0FDSixDQUFDLENBQ0wsQ0FBQztJQUNGLHFCQUFxQjtJQUNyQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUVPLDREQUF3QiJ9