export interface User {
    _id?: string;
    name: string;
    surname: string;
    login: string;
    phone: string;
    avatar?: string;
    pets?: [];
    tokens?: []
}