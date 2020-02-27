export interface Notification {
    _id?: string;
    ownerId: string;
    friendsNotification: string[];    
    messageNotification: string[];    
    likes?: string[]
}
