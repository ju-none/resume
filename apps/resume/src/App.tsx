import { BrowserRouter } from 'react-router-dom';

import "@styles/style.scss";

import { LanguageProvider } from '@pkg/providers/LanguageProvider';

import Layout from './Layout';
import Profile from '@front/pages/profile';
import Formation from '@front/pages/formation';
import Experience from '@front/pages/experience';
import Skills from '@front/pages/skills';
import Projects from '@front/pages/projects';

function App() {
  return (
      <LanguageProvider>
        <BrowserRouter>
          <Layout>
            <Profile />
            <Skills />
            <Projects />
            <Experience />
            <Formation />
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
  );
}

export default App;
