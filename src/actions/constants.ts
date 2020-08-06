export interface IState {
  joined?: boolean;
  roomId: string | null;
  userName: string | null;
  users: {
    index: string;
    name: string;
  }[];
  messages: {
    userName: string;
    text: string;
  }[];
}

export type JoinChatAction = {
  type: string,
  payload: IState
}