import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RestaurantDetail from './Views/RestaurantDetail';
import RestaurantList from './Views/RestaurantList';
import Home from './Views/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restaurants" exact component={RestaurantList} />
        <Route path="/restuarants/:id" exact component={RestaurantDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
