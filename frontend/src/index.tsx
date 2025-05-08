import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function mountApp() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mock/browser');
    await worker.start();
  }
}

mountApp().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
