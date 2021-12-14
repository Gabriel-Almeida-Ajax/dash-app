import { AppProvider } from './hooks/AppProvider';

import { NavBar } from './components/navbar';
import { MenuLateral } from './components/menulateral';
import { Dashboard } from './components/dashboard';

import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      
      <NavBar />
      <MenuLateral />
      <Dashboard />

    </AppProvider>
  );
}

export default App;
