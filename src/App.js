import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AddProducts from './components/AddProducts/AddProducts';
import ManageProducts from './components/MangeProducts/ManageProducts';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/addProduct'>
            <AddProducts></AddProducts>
          </Route>
          <Route path='/manage'>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path='/product/:id'>
            <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
