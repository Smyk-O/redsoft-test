import React from 'react';
import { useEffect, useState } from 'react';
import './Menu.scss';
import store from '../../../redux/store';

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(store.getState().menu.menuItem);
  }, []);

  return (
    <nav className={'menu'}>
      {menuItems.map((item) => (
        <div key={item.id} className={'menu__item'}>
          {item.name}
        </div>
      ))}
    </nav>
  );
}
