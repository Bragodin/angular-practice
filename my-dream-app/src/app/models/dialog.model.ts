import { User } from './user.model';

export interface Dialog {
    _id?: string;
    users: string[];
    messages?: string[];
}