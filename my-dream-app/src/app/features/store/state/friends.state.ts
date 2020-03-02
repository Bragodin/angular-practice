import { User } from 'src/app/models/user.model';

export interface IFriendsState {
    friends: any
}

export const initialFriendsState: IFriendsState = {
    friends: null
} 
