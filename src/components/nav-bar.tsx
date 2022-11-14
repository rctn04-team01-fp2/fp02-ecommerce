import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../features/user/user-slice';
import { NavItem } from '../utils/nav-item';
interface Props {
  auth: boolean;
}

export default function Navbar(props: Props) {
  const nav = props.auth ? NavItem.true : NavItem.false;
  const dispatch = useDispatch();
  return (
    <div className="bg-purple h-2/3 py-8 px-16 min-w-full min-h-1 justify-between flex text-baseWhite font-bold">
      <img src="/brand-logo.svg" alt="logo" className="h-32 py-4 px-32" />
      <nav className="flex gap-x-32 items-center">
        {nav.map((item) =>
          //eslint-disable-next-line
          item.name === 'Logout' ? (
            <NavLink
              to={item.link}
              key={item.id}
              onClick={() => {
                localStorage.removeItem('login-token');
                dispatch(logout());
              }}
            >
              {item.name}
            </NavLink>
          ) : (
            <NavLink to={item.link} key={item.id}>
              {item.name}
            </NavLink>
          ),
        )}
      </nav>
    </div>
  );
}
