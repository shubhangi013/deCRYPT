import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutLined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutLined } from '@ant-design/icons'

import icon from '../images/icon.jpg';

const Navbar = () => {
  return (
    <div classname="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className="logo">
          <Link to="/">deCRYPT</Link>
        </Typography.Title>
      </div>
    </div>
  )
}
export default Navbar;
