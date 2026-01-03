import { BrowserRouter, Route, Routes } from 'react-router-dom';

import "@styles/style.scss";

import { LanguageProvider } from '@pkg/providers/LanguageProvider';

import Layout from './Layout';

function App() {
  return (
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<div>Home</div>} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
  );
}

export default App;
