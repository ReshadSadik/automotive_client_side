import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import Order from '../Order/Order';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  // get all orders

  useEffect(() => {
    fetch(`https://cryptic-bayou-87271.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className=" grid xl:grid-cols-2 grid-cols-1 mt-14 xl:ml-28 ml-0 gap-5 container">
      {orders.length ? (
        orders.map((order) => <Order order={order} key={order._id}></Order>)
      ) : (
        <h2 className="text-black ml-96  text-4xl font-bold text-center">
          no order placed
        </h2>
      )}
    </div>
  );
};

export default MyOrders;
