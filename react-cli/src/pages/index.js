import { ArticlesPage } from './ArticlesPage';
import { ChatsPage } from './ChatsPage';

export { ArticlesPage, ChatsPage };
export const pageList = [
  {
    path: '/',
    exact: true,
    name: 'Articles',
    iconName: 'allInbox',
    component: ArticlesPage,
    layout: 'base',
  },
  {
    path: '/chats',
    exact: false,
    name: 'Chats',
    iconName: 'chat',
    component: ChatsPage,
    layout: 'base',
  },
];