import { RouterProvider } from 'react-router-dom';
import router from './router';
import { SanityProvider } from './context/SanityContext.jsx';

import './App.scss';

function App() {
  return (
    <SanityProvider>
      <RouterProvider router={router} />
    </SanityProvider>
  );
}

export default App;
