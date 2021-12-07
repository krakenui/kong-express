import { Response } from 'express';

import Logger from './Logging';

export function responseSuccess(res: Response, payload: object) {
    Logger.debug(res.req.url + ' 200 ');

    return res.status(200).send(payload);
}

export function responseError(res: Response, error: Error) {
    Logger.debug(res.req.url + ' 500 ');

    return res.status(500).send(error.message);
}

export function responsePermissionDeniedError(res: Response, error: Error) {
    Logger.debug(res.req.url + ' 403 ');

    const code = error.message;

    return res.status(403).json({
        code,
    });
}

export function responseAuthorizationError(res: Response, error: Error) {
    Logger.debug(res.req.url + ' 401 ');

    const code = error.message;

    return res.status(401).json({
        code,
    });
}

export function responseProgress(res: Response, percent: number) {
    Logger.debug(res.req.url + ' 200 PROGRESS ' + percent + '% ');

    if (!res.hasHeader) {
        res.writeHead(200, { 'content-type': 'text/plain' });
    }

    return res.write(
        JSON.stringify({
            percent: Math.floor(percent),
        })
    );
}

export function responseProgressEnd(
    res: Response,
    percent: number,
    payload?: any
) {
    Logger.debug(res.req.url + ' 200 PROGRESS Finish');

    return res.end(
        JSON.stringify({
            percent: Math.floor(percent),
            payload: payload,
        })
    );
}
