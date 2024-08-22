import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'


export default function Layout({toggleDrawer, open}) {
 
  return (
    <>
      <Header toggleDrawer={toggleDrawer} open={open}/>
      <Sidebar open={open} />
    </>
  ) 
};
