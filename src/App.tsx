import { Admin, Resource, defaultTheme } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Dashboard } from './pages/Dashboard';
import { authProvider } from './components/authProvider';
import { PostList, PostEdit, PostCreate } from './pages/posts';
import { UserList } from './pages/users';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const theme = {
  ...defaultTheme,
  palette: {
    mode: 'dark',
  },
};

const App = () => (
  <Admin
    theme={theme}
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
);

export default App;
