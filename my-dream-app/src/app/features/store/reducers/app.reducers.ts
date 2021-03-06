// import { authReducers } from '../reducers/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { notificationsReducers } from './notifications.redusers';
import { userReducers } from './user.reducers';
import { friendsReducers } from './friends.reducers';
import { dialogReducers } from './dialog.reducers';
import { paginationReducers } from './pagination.reducers';
import { albumsReducers } from './album.reducers';
import { errorsReducers } from './errors.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    // auth:  authReducers,
    notifications: notificationsReducers,
    user: userReducers,
    friends: friendsReducers,
    dialog: dialogReducers,
    pagination: paginationReducers,
    albums: albumsReducers,
    errors: errorsReducers
}