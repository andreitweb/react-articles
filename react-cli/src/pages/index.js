import { ArticlesPage } from './ArticlesPage';
import { NewArticlePage } from './NewArticlePage';
import { ChatsPage } from './ChatsPage';
import { ArticleDetailPage } from './ArticleDetailPage';

export { ArticlesPage, ChatsPage };
export const pageList = [
  {
    path: '/',
    exact: true,
    name: 'Articles',
    iconName: 'allInbox',
    component: ArticlesPage,
    layout: 'base',
    showInSidebar: true,
  },
  {
    path: '/new-article',
    exact: false,
    name: 'Write an article',
    iconName: 'postAdd',
    component: NewArticlePage,
    layout: 'base',
    showInSidebar: true,
  },
  {
    path: '/article/:id',
    name: 'Detail Article Page',
    exact: false,
    component: ArticleDetailPage,
    layout: 'base',
    showInSidebar: false,
  },
  {
    path: '/chats',
    exact: false,
    name: 'Chats',
    iconName: 'chat',
    component: ChatsPage,
    layout: 'base',
    showInSidebar: true,
  },
];