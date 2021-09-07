import {useDispatch, useSelector} from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import SigninScreen from "./screens/SigninScreen";
import {signout} from "./actions/userActions";
import RegisterScreen from "./screens/RegisterScreen";
import ProductListScreen from "./screens/ProductListScreen";
import AdminRoute from './components/AdminRoute';
import ProductEditScreen from './screens/ProductEditScreen';
import ShippingScreen from "./screens/ShippingScreen";


function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  const userSignin = useSelector((state) => state.userSignin)
  const {userInfo} = userSignin

  const dispatch = useDispatch()
  const handleSignout = () => {
    dispatch(signout())
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">The Sneaker Plug 🔌</Link>
          </div>
          <div>
            <Link to="/cart">Cart
              {cartItems.length>0 && (<span className="badge">{cartItems.length}</span>)}
            </Link>
            {
              userInfo? (
                      <div className="dropdown">
                        <Link to="#">{userInfo.name} <i className="fa fa-caret-down" /></Link>
                        <ul className="dropdown-content">
                          <Link to="#signout" onClick={handleSignout}>Sign out</Link>
                        </ul>
                      </div>
              ) : (<Link to="/signin">Sign In</Link>)
            }
            {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <Link to="#admin">Admin {' '} <i className="fa fa-caret-down" /></Link>
                  <ul className="dropdown-content">
                    <Link to="/productlist">Products</Link>
                  </ul>
                </div>
            )}
          </div>
        </header>
        <main>
          <Route path = "/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path = "/cart/:id?" component={CartScreen} />
          <Route path = "/signin" component={SigninScreen} />
          <Route path = "/register" component={RegisterScreen} />
          <Route
              path="/product/:id/edit"
              component={ProductEditScreen}
              exact
          />
          <Route path = "/shipping" component={ShippingScreen} />
          <AdminRoute
              path="/productlist"
              component={ProductListScreen}
          />
        </main>
        <footer className="row center">The Sneaker Plug 🔌</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
