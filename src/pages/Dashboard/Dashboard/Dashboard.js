import React from 'react';
import Navigation from '../../../shared/Navigation/Navigation';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
function Dashboard() {
  const { logOut } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Navigation></Navigation>

      <div class=" container mx-auto md:flex-row-reverse flex-wrap">
        <Switch>
          <Route exact path={path}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>

        {/* <!--Sidebar--> */}
        <div class="w-full  md:w-64 bg-gray-900 md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
          <div class="md:relative mx-auto   lg:float-left  lg:px-6">
            <ul className="md:block flex justify-center items-center ">
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
              <li className="mx-2 bg-gray-200 my-4 px-3 rounded-xl text-black py-1">
                <Link
                  className="text-sm font-bold focus:text-yellow-700 
                 focus:underline  "
                  onClick={logOut}
                >
                  Log Out
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
