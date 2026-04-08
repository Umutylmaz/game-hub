import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import { Provider } from './components/ui/provider';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider defaultTheme="dark">
      <App />
    </Provider>
  </React.StrictMode>,
);
