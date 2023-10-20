import React from 'react';

import { IoStatsChart } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import { FaList, FaShopify } from 'react-icons/fa';
import { ImFeed, ImHome3 } from 'react-icons/im';
import {} from 'react-icons/md';

const links = [
  {
    icon: <ImHome3 />,
    text: 'Home',
    path: '.',
  },
  {
    icon: <FaShopify />,
    text: 'Store',
    path: 'store',
  },
  {
    icon: <IoStatsChart />,
    text: 'Stats',
    path: 'stats',
  },
  {
    icon: <ImFeed />,
    text: 'Feed',
    path: 'feed',
  },
  {
    icon: <FaList />,
    text: 'History',
    path: 'user-histories',
  },
  {
    icon: <FaList />,
    text: 'History',
    path: 'seller-histories',
  },
  {
    icon: <MdAccountCircle />,
    text: 'Account',
    path: 'account-information',
  },
];

export default links;
