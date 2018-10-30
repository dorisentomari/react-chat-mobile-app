import * as ChatActionTypes from './ChatActionTypes';

const defaultState = {
  userList: [],
  chatMsg: [],
  unRead: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ChatActionTypes.USER_LIST:
      console.group('%cUSER_LIST', 'color: red;');
      console.log(action);
      console.groupEnd();
      return {
        ...state,
        userList: action.data,
      };
    case ChatActionTypes.MSG_LIST:
      console.group('%cMSG_LIST action', 'color: red;');
      console.log(action);
      console.groupEnd();
      return {
        ...state,
        chatMsg: action.data,
        unRead: action.data.filter(k => !k.read).length,
      };
    case ChatActionTypes.MSG_RECEIVE:
      console.group('%cMSG_RECEIVE action', 'color: red;');
      console.log(action);
      console.groupEnd();
      console.group('%cMSG_RECEIVE state', 'color: red;');
      console.log(state);
      console.groupEnd();
      return {
        ...state,
        chatMsg: [...state.chatMsg, action.data],
        unRead: state.unRead + 1,
      };
    case ChatActionTypes.MSG_READ:
      return {};
    default:
      return state;
  }
}