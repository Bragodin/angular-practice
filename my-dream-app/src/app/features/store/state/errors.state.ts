import { User } from 'src/app/models/user.model';

export interface IErrorsState {
    errors: Error[];
}

export const initialErrorsState: IErrorsState = {
    errors: [{}] as Error[]
} 
