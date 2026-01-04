import { BrowserRouter } from 'react-router-dom';

import "@styles/style.scss";

import { LanguageProvider } from '@pkg/providers/LanguageProvider';

import Layout from './Layout';
import Profile from '@front/pages/profile';
import Formation from '@front/pages/formation';

function App() {
  return (
      <LanguageProvider>
        <BrowserRouter>
          <Layout>
            <Profile />
            <Formation />
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
  );
}

export default App;
