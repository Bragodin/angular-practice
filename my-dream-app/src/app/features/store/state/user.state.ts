import { User } from 'src/app/models/user.model';

export interface IUserState {
    activeUser: User;
    users: User[];
    autorizationUser: User;
}

export const initialUserState: IUserState = {
    activeUser: null,
    users: null,
    autorizationUser: null
} 
 
