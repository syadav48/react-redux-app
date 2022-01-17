import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/cake/store'
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/iceCreamContainer';
import HooksPizzaContainer from './Components/HooksPizzaContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserComponent from './Components/UserComponent';




function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserComponent />
      <ItemContainer cake />
      <ItemContainer />
      <NewCakeContainer />
      <HooksPizzaContainer />
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
