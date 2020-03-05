import { User } from './user.model';

export interface Dialog {
    users: string[];
    messages?: string[];
}