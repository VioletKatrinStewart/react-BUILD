import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <NavLink to="/restaurants" exact>
        Restaurants
      </NavLink>
    </div>
  );
}
