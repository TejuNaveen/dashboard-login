import React from 'react';
import {Link} from 'react-router-dom';

import {ListItem, ListItemText,  List, ListItemIcon} from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';
import InfoIcon from '@material-ui/icons/Info';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HowToRegIcon from '@material-ui/icons/HowToReg';

export default class SideBar extends React.Component {
  render() {
    return (
    <List>
      <ListItem button key='Activities' component={Link} to='/activities'> 
        <ListItemIcon><CameraIcon /></ListItemIcon>
        <ListItemText primary='Activities' />
      </ListItem>
      <ListItem button key='AboutUs' component={Link} to='/aboutus'>
        <ListItemIcon><InfoIcon /></ListItemIcon>
        <ListItemText primary='About Us' />
      </ListItem>
      <ListItem button key='Carrers' component={Link} to='/carrers'>
        <ListItemIcon><CardTravelIcon /></ListItemIcon>
        <ListItemText primary='Carrers' />
      </ListItem>
      <ListItem button key='ContactUs' component={Link} to='/contactus'>
        <ListItemIcon><ContactPhoneIcon /></ListItemIcon>
        <ListItemText primary='Contact Us' />
      </ListItem>
      <ListItem button key='Register' component={Link} to='/register'>
        <ListItemIcon><HowToRegIcon /></ListItemIcon>
        <ListItemText primary='Register' />
      </ListItem>
  </List>)
  }
}