export interface IAuthState {
    // loggedUser: User  
    loggedUser: any;
    token: any;
}

export const initialAuthState: IAuthState = {
    // token: 'null',
    // id: 'null'
    loggedUser: '',
    token: ''
} 
