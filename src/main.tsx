import { createRoot } from 'react-dom/client';

import 'boxicons/css/boxicons.min.css';

import { App } from './App';

const loadApp = async () => {
  const app = createRoot(document.querySelector('#app') as HTMLElement);
  app.render(<App />);
};

loadApp();
