import { Articles } from './Articles';
import { Chats } from './Chats';

export { Articles, Chats };
export const pageList = [
  {
    path: '/',
    exact: true,
    name: 'Articles',
    iconName: 'allInbox',
    component: Articles,
  },
  {
    path: '/chats',
    exact: false,
    name: 'Chats',
    iconName: 'chat',
    component: Chats,
  },
];