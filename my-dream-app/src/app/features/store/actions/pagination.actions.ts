import { Action } from '@ngrx/store';

export enum EPaginationsActions{
    GetPage = '[Pagination] Get Page',
    PostPage = '[Pagination] Post Page',
}

export class GetPage implements Action {
    public readonly type = EPaginationsActions.GetPage;
    constructor(public payload?: number){}
}

export class PostPage implements Action {
    public readonly type = EPaginationsActions.PostPage;
    constructor(public payload?: number){}
}

export type PaginationsActions = GetPage | PostPage;