export interface IUserState {
    _id?: string;
    name : string;
    surname: string;
    login : string;
    phone: string;
    avatar: string;
    password?: string;
    tokens?: object[];
    __v?: number;
}

export const initialUserState: IUserState = {
    name : '',
    surname: '',
    login : '',
    phone: '',
    avatar: '',
    __v: 1
} 
