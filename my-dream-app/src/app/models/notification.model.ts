import { User } from './user.model';

export interface Notification {
    _id?: string;
    ownerId: string;
    friendsNotification: any[];    
    messageNotification: any[];    
    likes?: string[];
}
