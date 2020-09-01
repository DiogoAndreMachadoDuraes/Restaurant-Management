import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import BookIcon from '@material-ui/icons/Book';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import InfoIcon from '@material-ui/icons/Info';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import { useHistory } from "react-router-dom";

export function ListPages (){
  const history = useHistory();

  function goProduct() {
    history.push("/product");
  }

  function goHome() {
    history.push("/home");
  }

  function goReservation() {
    history.push("/reservation");
  }

  function goRestaurant() {
    history.push("/restaurant");
  }

  function goUser() {
    history.push("/user");
  }

  function goWeeklyMeal() {
    history.push("/weeklyMeal");
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

  function goProductExtra() {
    history.push("/productExtra");
  }

  function goBuyMenu() {
    history.push("/buyMenu");
  }

  function goBuyProduct() {
    history.push("/buyProduct");
  }

  function goInvoice() {
    history.push("/invoice");
  }

  function goClient() {
    history.push("/client");
  }

  function goAdmin() {
    history.push("/admin");
  }

  function goAllergen() {
    history.push("/allergen");
  }

  function goEmployee() {
    history.push("/employee");
  }

  function goMenuProduct() {
    history.push("/menuProduct");
  }

  function goNutritionalInformation() {
    history.push("/nutritionalInformation");
  }

  function goTakeAway() {
    history.push("/takeAway");
  }

  return( 
    <div>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" onClick={goHome}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LocationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Restaurantes" onClick={goRestaurant}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText primary="Refeição Semanal" onClick={goWeeklyMeal}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary="Ementas" onClick={goSpecialMenu}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <RestaurantMenuIcon />
        </ListItemIcon>
        <ListItemText primary="Menus" onClick={goMenu}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <RestaurantIcon />
        </ListItemIcon>
        <ListItemText primary="Produtos" onClick={goProduct}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        <ListItemText primary="Extras" onClick={goExtra}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AddShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Produtos Extras" onClick={goProductExtra}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LocalOfferIcon  />
        </ListItemIcon>
        <ListItemText primary="Produtos do Menu" onClick={goMenuProduct}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Compras Menu" onClick={goBuyMenu}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingBasketIcon />
        </ListItemIcon>
        <ListItemText primary="Compras Produto" onClick={goBuyProduct}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentLateIcon />
        </ListItemIcon>
        <ListItemText primary="Alergénio" onClick={goAllergen}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Informação Nutricional" onClick={goNutritionalInformation}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Reservas" onClick={goReservation}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmojiTransportationIcon />
        </ListItemIcon>
        <ListItemText primary="Take Away" onClick={goTakeAway}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Faturas" onClick={goInvoice}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SupervisorAccountIcon />
        </ListItemIcon>
        <ListItemText primary="Administrador" onClick={goAdmin}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Funcionário" onClick={goEmployee}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
        <ListItemText primary="Cliente" onClick={goClient}/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Utilizadores" onClick={goUser}/>
      </ListItem>
    </div>
  );
}
