import React from 'react';
import { BiSolidRightArrow, BiRightArrow } from 'react-icons/bi';

import './ListItem.scss';

const ListItem = ({ children, value }) => {
  const isSublist = value && value.level > 1;

  return (
    <li className="custom-list-item">
      {isSublist ? <BiRightArrow /> : <BiSolidRightArrow />}
      {/* <BiSolidRightArrow /> */}
      <span>{children}</span>
    </li>
  );
};

export default ListItem;
