import React from 'react';
import Navigation from '../../../shared/Navigation/Navigation';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AllOrders from '../AllOrders/AllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
function Dashboard() {
  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Navigation></Navigation>

      <div class=" container mx-auto md:flex-row-reverse flex-wrap">
        <Switch>
          {!admin ? (
            <div>
              <Route exact path={path}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
            </div>
          ) : (
            <div>
              <Route exact path={`${path}`}>
                <AllOrders></AllOrders>
              </Route>
              <Route path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}/manageproducts`}>
                <ManageProducts></ManageProducts>
              </Route>
            </div>
          )}
        </Switch>

        {/* <!--Sidebar--> */}
        <div class="w-full  md:w-64 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
          <div class="md:relative mx-auto   lg:float-left  lg:px-6">
            <ul className="md:block flex justify-center items-center ">
              {!admin ? (
                <div>
                  <li className="mx-2 bg-gray-200   my-4 px-3 rounded-xl text-black py-1">
                    <Link
                      className="text-sm text-black  focus:text-yellow-700 
                 focus:underline font-bold"
                      to={`${url}`}
                    >
                      My orders
                    </Link>
                  </li>
                  <li className="mx-2 bg-gray-200  my-4 px-3 rounded-xl text-black py-1">
                    <Link
                      className="text-sm font-bold focus:text-yellow-700 
                 focus:underline "
                      to={`${url}/review`}
                    >
                      Review
                    </Link>
                  </li>
                  <li className="mx-2 bg-gray-200 my-4 px-3 rounded-xl text-black py-1">
                    <Link
                      className="text-sm font-bold focus:text-yellow-700 
                 focus:underline  "
                      to={`${url}/pay`}
                    >
                      Pay
                    </Link>
                  </li>
                </div>
              ) : (
                <div>
                  <li className="mx-2 bg-gray-200 my-4 px-3 rounded-xl text-black py-1">
                    <Link
                      to={`${url}`}
                      className="text-sm font-bold focus:text-yellow-700 
                 focus:underline  "
                    >
                      Manage All Orders
                    </Link>
                  </li>
                  <li className="mx-2 bg-gray-200 my-4 px-3 rounded-xl text-black py-1">
                    <Link
                      to={`${url}/addproduct`}
                      className="text-sm font-bold focus:text-yellow-700 
                 focus:underline  "
                    >
                      Add a Product
                    </Link>
                  </li>

                  <li className="mx-2 bg-gray-200 my-4 px-3 rounded-xl text-black py-1">
                    <Link
                      to={`${url}/makeadmin`}
                      className="text-sm font-bold focus:text-yellow-700 
                 focus:underline  "
                    >
                      Make Admin
                    </Link>
                  </li>
                  <li className="mx-2 bg-gray-200 my-4 px-3 rounded-xl text-black py-1">
                    <Link
                      to={`${url}/manageproducts`}
                      className="text-sm font-bold focus:text-yellow-700 
                 focus:underline  "
                    >
                      Manage Products
                    </Link>
                  </li>
                </div>
              )}

              <li className="mx-2 bg-gray-200 my-4 px-3 rounded-xl text-black py-1">
                <Link
                  className="text-sm font-bold focus:text-yellow-700 
                 focus:underline  "
                  onClick={logOut}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
