import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';

const injectDefaultMiddlewares = (app: express.Application) => {
    const CORS_WHITE_LIST: string[] = process.env.CORS_WHITE_LIST
        ? process.env.CORS_WHITE_LIST.split(',')
        : ['*'];

    // logging with morgan
    app.use(morgan('combined'));
    // protect with helmetjs
    app.use(helmet());
    // enable cors with cors
    app.use(
        cors({
            origin: function (origin, callback) {
                // allow all origins
                if (CORS_WHITE_LIST.indexOf('*') >= 0) {
                    callback(null, true);
                } else if (!!origin && CORS_WHITE_LIST.indexOf(origin) >= 0) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
        })
    );
    // parse body to json
    app.use(express.json());
};

export { injectDefaultMiddlewares };
