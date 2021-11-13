import React from 'react';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
const Order = (props) => {
  const { productName, name, productImg, _id, userImg, status } = props.order;
  const { user } = useAuth();

  const handleRemoveItem = (id) => {
    const accept = window.confirm(
      'are you sure you want to remove this item ? '
    );
    if (accept) {
      fetch(`https://cryptic-bayou-87271.herokuapp.com/orders/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          swal('Item deleted successfully');
          window.location.reload();
        });
    } else {
      return;
    }
  };

  const handleUpdateStatus = (id) => {
    fetch(`https://cryptic-bayou-87271.herokuapp.com/orders/${id}`, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data) => {
        swal('status updated successfully');
        window.location.reload();
      });
  };

  return (
    <div>
      <div class="md:w-full w-full  my-5 bg-gray-800 flex justify-center items-center rounded-lg">
        <div class=" flex flex-col gap-4 mx-1  md:mx-10   my-5">
          <div class="bg-gray-100 rounded-lg  w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400">
            <div class="relative flex-1  flex flex-col gap-2 px-2 md:px-4">
              <label class="text-gray-800  text-base font-semibold tracking-wider">
                {name}
              </label>
              <label class="text-green-800 md:ml-6 ml-3 text-4xl font-bold">
                <img
                  className="rounded-full md:w-24 md:h-auto h-20 w-20"
                  src={userImg}
                  alt=""
                />
              </label>
            </div>
            <div class="relative h-36 xl:w-96 w-56 flex-1 flex flex-col gap-2 px-2 md:px-4">
              <label class="text-gray-800 text-base font-semibold tracking-wider">
                {productName}
              </label>
              <label class="text-green-800 xl:mt-0 mt-1 text-4xl font-bold">
                <div className="">
                  <img
                    className=" rounded-full xl:w-28 w-20 h-20 xl:h-24 mx-auto "
                    src={productImg}
                    alt=""
                  />
                </div>
              </label>
              <div class="absolute bg-green-400 rounded-md font-semibold text-xs text-gray-100 md:p-2 p-1 right-4 bottom-0">
                {status}
              </div>
            </div>
            <div class="relative flex-1 flex flex-col  gap-2 px-2 md:px-4">
              {/* <label class="text-gray-800 text-base font-semibold tracking-wider">
                Total Profit
              </label>
              <label class="text-green-800 text-4xl font-bold">$1.2M</label> */}
              <div
                onClick={() => {
                  handleUpdateStatus(_id);
                }}
                class="absolute bg-green-600 rounded-md font-semibold text-xs text-gray-100 text-center cursor-pointer  px-2 py-2 md:right-14 right-2  bottom-20"
              >
                Update Status?
              </div>
              <div
                onClick={() => {
                  handleRemoveItem(_id);
                }}
                class="absolute bg-red-600 rounded-md font-semibold text-xs text-gray-100 text-center cursor-pointer  p-2 md:right-14 right-2 md:bottom-10 bottom-6"
              >
                Remove Item
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
