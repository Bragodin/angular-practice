export interface Error {
    type: ErrorTypes;
    message: string;
}

export enum ErrorTypes {
    UserNotFound = 'User Not Found'
}