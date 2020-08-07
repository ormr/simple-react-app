export const JOINED = 'JOINED';
export const SET_DATA = 'SET_DATA';
export const SET_USERS = 'SET_USERS';
export const NEW_MESSAGE = 'NEW_MESSAGE';

export interface Message {
  userName: string;
  text: string
}

export interface IState {
  joined?: boolean;
  roomId: string;
  userName: string;
  users: string[];
  messages: Message[];
}

export interface JoinChatAction {
  type: typeof JOINED
  payload: {
    roomId: string
    userName: string
  }
}

export interface SetDataAction {
  type: typeof SET_DATA
  payload: {
    users: string[]
    messages: {
      userName: string;
      text: string;
    }[]
  }
}

export interface SetUsersAction {
  type: typeof SET_USERS
  payload: string[]
}

export interface NewMessageAction {
  type: typeof NEW_MESSAGE
  payload: Message
}

export type ChatActionsTypes = JoinChatAction | SetDataAction | SetUsersAction | NewMessageAction;