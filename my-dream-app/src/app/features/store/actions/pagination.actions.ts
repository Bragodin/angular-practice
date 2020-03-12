import { Action } from '@ngrx/store';

export enum EPaginationsActions {
  GetPage = '[Pagination] Get Page',
  GetUsersPage = "[Pagination] Get Page",
  PostUsersPage = "[Pagination] Post Page"
}

export class GetUsersPage implements Action {
    public readonly type = EPaginationsActions.GetUsersPage;
    constructor(public payload?: number){
        console.log('payload')
        console.log(payload)
    }
}

export class PostUsersPage implements Action {
    public readonly type = EPaginationsActions.PostUsersPage;
    constructor(public payload?: number){}
}

export type PaginationsActions = GetUsersPage | PostUsersPage;