import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/Book';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

import { useHistory } from "react-router-dom";

export function ListPages (){
  const history = useHistory();

  function goProduct() {
    history.push("/product");
  }

  /* function goReservation() {
    history.push("/reservation");
  } */

  function goRestaurant() {
    history.push("/restaurant");
  }

  function goUser() {
    history.push("/user");
  }

  function goSpecialMenu() {
    history.push("/specialMenu");
  }

  function goMenu() {
    history.push("/menu");
  }

  function goExtra() {
    history.push("/extra");
  }

  function goInvoice() {
    history.push("/invoice");
  }

  function goEmployee() {
    history.push("/employee");
  }

  function goTakeAway() {
    history.push("/takeAway");
  }

  return( 
    <>
      <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Restaurantes" onClick={goRestaurant}/>
      </ListItem>
      <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Ementas" onClick={goSpecialMenu}/>
      </ListItem>
      <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <RestaurantMenuIcon />
        </ListItemIcon>
        <ListItemText primary="Menus" onClick={goMenu}/>
      </ListItem>
      <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <RestaurantIcon />
        </ListItemIcon>
        <ListItemText primary="Produtos" onClick={goProduct}/>
      </ListItem>
      <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText primary="Extras" onClick={goExtra}/>
      </ListItem>
{/*       <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Reservas" onClick={goReservation}/>
      </ListItem>
 */}      <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <EmojiTransportationIcon />
        </ListItemIcon>
        <ListItemText primary="Take Away" onClick={goTakeAway}/>
      </ListItem>
      <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Faturas" onClick={goInvoice}/>
      </ListItem>
      <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Funcionário" onClick={goEmployee}/>
      </ListItem>
      <ListItem button style={{marginBottom: 10}}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Utilizadores" onClick={goUser}/>
      </ListItem>
    </>
  );
}
