import React from 'react';
import { NavLink } from 'react-router-dom';
import { getToken, isUser } from '../helpers';
import useLogout from '../hooks/use-logout';
import { NavItem } from '../utils/nav-item';
interface Props {
  auth: boolean;
}

export default function Navbar(props: Props) {
  const nav: any = props.auth ? NavItem.true : NavItem.false;
  const data = props.auth ? (isUser(getToken()!) ? nav.user : nav.admin) : nav;
  const { onLogout } = useLogout();
  return (
    <div className="bg-purple h-2/3 py-8 px-16 min-w-full min-h-1 justify-between flex text-baseWhite font-bold sticky top-none left-none right-none z-50">
      <img src="/brand-logo.svg" alt="logo" className="h-32 py-4 px-32" />
      <nav className="flex gap-x-32 items-center">
        {data.map((item: any) =>
          //eslint-disable-next-line
          item.name === 'Logout' ? (
            <NavLink to={item.link} key={item.id} onClick={onLogout}>
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
