export interface User {
    _id?: string;
    name: String;
    surname: String;
    login: String;
    password: String;
    phone: String;
    pets?: [];
    tokens?: []
}