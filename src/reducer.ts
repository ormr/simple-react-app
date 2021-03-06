import { IState, ChatActionsTypes } from './constants';

export const initialState: IState = {
  joined: false,
  roomId: '',
  userName: '',
  users: [],
  messages: []
};

const reducer = (state = initialState, action: ChatActionsTypes) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomId: action.payload.roomId
      };
    case 'SET_DATA':
      return {
        ...state,
        users: action.payload.users,
        messages: action.payload.messages
      }
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      };
    case 'NEW_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};

export { reducer };