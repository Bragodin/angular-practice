export interface User {
    _id?: string;
    name: string;
    surname: string;
    login: string;
    password?: string;
    phone: string;
    avatar?: string;
    pets?: [];
    tokens?: [];
}