export interface IUserState {
    _id?: string;
    name : string;
    surname: string;
    login : string;
    phone: string;
    avatar: string;
    tokens?: object[];
    __v?: number;
}

export const initialUserState: IUserState = {
    name : 'Vasiliy',
    surname: 'Pupkin',
    login : 'popovich@login.er',
    phone: '+375 (29) 179-05-81',
    avatar: '',
    __v: 1
} 
