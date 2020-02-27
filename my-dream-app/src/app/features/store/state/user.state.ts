import { User } from 'src/app/models/user.model';

export interface IUserState {
    _id?: string;
    name: string;
    surname: string;
    login: string;
    phone: string;
    avatar?: string;
    pets?: [];
    tokens?: []
}

export const initialUserState: IUserState = {
    name: 'string',
    surname: 'string',
    login: 'string',
    phone: 'strin',
} 
