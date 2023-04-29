import './index.css'
import Router from './Router';
import { Provider } from "react-redux";
import { store } from './store';
import MainLayout from './layouts/main-layout';

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Router />
      </MainLayout>
    </Provider>
  );
}

export default App;
