import { NextFunction, Request, Response } from 'express';

import AuthInstance from '../adapters';
import { responseAuthorizationError } from '../helpers/HttpTransfers';

export async function validAuthentication(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const header = request.headers;
    const token = (header.Authorization || header.authorization) as string;

    if (token == null) {
        // Must have authorization token.
        return responseAuthorizationError(
            response,
            new Error('Request must have authorization token.')
        );
    }

    try {
        const payload = await AuthInstance.validateToken(token);
        request = {
            ...request,
            operatorContext: payload,
        } as any;

        next();
    } catch {
        return responseAuthorizationError(
            response,
            new Error('Token invalid.')
        );
    }
}
