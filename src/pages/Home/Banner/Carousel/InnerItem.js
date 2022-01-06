import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const InnerItem = (props) => {
  const { products } = useAuth();
  return (
    <div>
      {products.length && (
        <div>
          <div class="carousel-item active relative float-left w-full">
            <img
              src="https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
              class="block w-full"
              alt="..."
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item active relative float-left w-full">
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              class="block w-full"
              alt="..."
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnerItem;
