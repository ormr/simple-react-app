import { IState } from './actions/constants';

export const initialState: IState = {
  joined: false,
  roomId: null,
  userName: null
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomId: action.payload.roomId
      };
    default:
      return state;
  }
};

export { reducer };