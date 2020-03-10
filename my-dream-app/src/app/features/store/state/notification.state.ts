export interface INotificationsState {
    _id?: string;
    ownerId: string;
    friendsNotification: string[];    
    messageNotification: string[];    
    likes?: string[]
}

export const initialNotificationsState: INotificationsState = {
    ownerId: '',
    friendsNotification: [],   
    messageNotification: []    
} 
