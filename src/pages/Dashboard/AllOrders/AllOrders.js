import React, { useEffect, useState } from 'react';

import Order from '../Order/Order';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  // get all orders

  useEffect(() => {
    fetch('http://localhost:5000/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className=" grid xl:grid-cols-2 grid-cols-1 mt-14 xl:ml-28 ml-0 gap-5 container">
      {orders &&
        orders.map((order) => <Order order={order} key={order._id}></Order>)}
    </div>
  );
};

export default AllOrders;
