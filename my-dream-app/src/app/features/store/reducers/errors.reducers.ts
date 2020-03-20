import { ErrorsActions, EErrorsActions } from '../actions/errors.actions';
import { initialErrorsState, IErrorsState } from '../state/errors.state';


export function errorsReducers(
  state = initialErrorsState,
  action: ErrorsActions
): IErrorsState {
  switch (action.type) {
    case EErrorsActions.CreateError: {
      return {
        ...state,
        errors: state.errors.concat(action.payload)
      };
    }
    default:
      return state;
  }
};