import { ArticlesPage } from './ArticlesPage';
import { NewArticlePage } from './NewArticlePage';
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
    path: '/new-article',
    exact: false,
    name: 'Write an article',
    iconName: 'postAdd',
    component: NewArticlePage,
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