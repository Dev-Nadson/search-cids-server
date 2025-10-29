class AppError extends Error {
    public readonly status_code: number;
    public readonly is_operational: boolean;

    constructor(message: string, status_code: number = 400) {
        super(message)
        this.name = this.constructor.name
        this.status_code = status_code
        this.is_operational = true;

        Error.captureStackTrace(this, this.constructor)
    }
}

class InternalServerError extends AppError {
    constructor(message: string) {
        super(message, 500)
    }
}

class BadRequestError extends AppError {
    constructor(message: string) {
        super(message, 400)
    }
}

export { AppError, InternalServerError, BadRequestError }