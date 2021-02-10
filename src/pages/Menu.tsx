/* eslint-disable jsx-a11y/alt-text */
import {  IonBackButton, IonBadge, IonButton,  IonButtons,  IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonHeader, IonIcon,    IonImg,    IonItem, IonLabel,  IonMenu,  IonMenuButton,  IonPage, IonRouterOutlet, IonRow, IonTabBar, IonTabButton, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { State } from 'ionicons/dist/types/stencil-public-runtime';
import { cartSharp, ellipsisHorizontal, ellipsisVertical, home, informationCircle, locationOutline, menu, personCircle, reader, restaurant, search, star } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';

import { Route, useParams } from 'react-router';
import { db } from '../firebaseConfig';
import About from './About';
import Cart from './Cart';
import Contact from './Contact';
import Home from './Home';


// type Item = {
//   id:string;
//   url: string;
//   text: string;
//   link:string;
// };

// const items: Item[] = [
//   { 
//     id:'m1',
//     url: '../../assets/images/rice/chickenrice.jpg',
//    text: 'RICE' ,
//    link:'/rice'
//   },
//   {
//     id:'m2',
//     url: '../../assets/images/kottu/vegekottu.jpeg',
//    text: 'KOTTU' ,
//    link:'/kottu'
//   },
//   {
//     id:'m3',
//     url: '../../assets/images/shorteats/apecial.jpg',
//     text: 'SHORTEATS' ,
//     link:'/shorteats'
//    },
//    {
//     id:'m4',
//     url: '../../assets/images/dessert/dessert.jpeg',
//     text: 'DESSERTS' ,
//     link:'/desserts'
//    },


// ];




const Menu: React.FC = () => {
  const {name} = useParams< {name: string;}>();

  const[menus, setMenu]=useState<any[]>([]) 
 
  const[cart, setCart]=useState<any[]>([]) 
    
 useEffect(() => {
  const ref = db.collection('menu');
  ref.get().then((snapshot:any) => {
    const users = snapshot.docs.map((doc:any) => ({
      id:doc.id,
      ...doc.data(),
    }));
     setMenu(users);
  })
}, [])
;

 
useEffect(() => {
  const ref = db.collection('cart');

  ref.get().then((snapshot:any) => {
    const cart = snapshot.docs.map((doc:any) => ({
      id:doc.id,
      ...doc.data(),
    }));
    setCart(cart);
  })
}, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          
          <IonButtons>
            <IonMenuButton autoHide={true} />
          </IonButtons>
          <IonTitle >{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
       <IonRow>
         <IonCol size-md="4" offset-md="4">
         {menus.map((image, i) => (
         <IonCard color="medium" key={i} >
            <IonItem>
              <IonIcon  />
              <IonLabel >{image.text}</IonLabel>
              {/* <IonImg src="garlic.jpg"></IonImg> */}
              <IonButton fill="outline" slot="end" routerLink={image.link}>View</IonButton>
            </IonItem>

             <IonCardContent>
             <IonImg src={image.url }/>
           
      
             </IonCardContent>
         </IonCard>
         ))}
         </IonCol>

 

     </IonRow>      

    
  </IonContent>

  {/* footer */}

  <IonFooter >    
        <IonToolbar > 
          {/* <IonTabs> */}
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} /> 
              <Route path="/cart" component={Cart} />         
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About}  />
            </IonRouterOutlet>

          <IonTabBar color="warning"> 
          {/* <IonTabButton  tab="Home" href="/home" disabled>
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton> */}
              <IonTabButton tab="Cart" href="/cart">
                <IonIcon icon={cartSharp} />
                <IonLabel>Cart</IonLabel>
                <IonBadge color="primary"><b>{cart.length}</b></IonBadge>
              </IonTabButton>
              <IonTabButton tab="Contact" href="/contact">
                <IonIcon icon={reader} />
                <IonLabel>Contact</IonLabel>
              </IonTabButton>
              <IonTabButton tab="About" href="/about">
                <IonIcon icon={informationCircle} />
                <IonLabel>About</IonLabel>
              </IonTabButton>

          </IonTabBar>
          {/* </IonTabs> */}

          
              
           
    </IonToolbar> 
  </IonFooter>


    
      
  
 



    </IonPage>
  );
};

export default Menu;
