import { createRoot } from 'react-dom/client';

import { App } from './App';

const loadApp = async () => {
  const app = createRoot(document.querySelector('#app') as HTMLElement);
  app.render(<App />);
};

loadApp();
