export interface IAuthState {
    token: string;
    id: string;    
}

export const initialAuthState: IAuthState = {
    token: 'null',
    id: 'null'
} 
