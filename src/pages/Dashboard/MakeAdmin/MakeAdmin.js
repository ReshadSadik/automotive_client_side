import React, { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleAdmin = (e) => {
    fetch(`https://cryptic-bayou-87271.herokuapp.com/users/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
    e.preventDefault();
  };

  return (
    <div className="mt-56">
      <form onSubmit={handleAdmin} action="">
        <input
          onBlur={handleEmail}
          style={{ outline: 'none' }}
          type="text"
          className="text-sm xl:w-80 w-56 font-bold   h-8 pl-5 text-center rounded-lg my-5 border border-2 mx-5 border-black "
          placeholder="email"
        />
        <input
          className="text-black font-bold py-2 px-7  rounded-md bg-yellow-500 cursor-pointer"
          type="submit"
          value="make an admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
