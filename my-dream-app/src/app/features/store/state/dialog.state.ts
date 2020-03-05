import { User } from 'src/app/models/user.model';

export interface IDialogState {
    id: string;
    users: string[];
    messages?: string[];
}

export const initialDialogState: IDialogState = {
    id: null,
    users: null,
    messages: null
} 
