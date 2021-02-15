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
import '../theme/menu.css';

 


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
      <IonHeader >
        <IonToolbar color="light">
        <IonTitle ><b>MENU</b></IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        
       <IonRow>
         <IonCol size-md="4" offset-md="4">
         {menus.map((image, i) => (
         <IonCard color="medium" key={i} >
            <IonItem lines="full" color="tertiary">
             
              <IonLabel color="dark" className="text">{image.text}</IonLabel>
           
              <IonButton fill="outline" slot="end" routerLink={image.link}><b>View</b></IonButton>
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
                <IonIcon color="dark" icon={cartSharp} />
                <IonLabel color="dark">Cart</IonLabel>
                <IonBadge color="primary"><b>{cart.length}</b></IonBadge>
              </IonTabButton>
              <IonTabButton tab="Contact" href="/contact">
                <IonIcon color="dark" icon={reader} />
                <IonLabel color="dark">Contact</IonLabel>
              </IonTabButton>
              <IonTabButton tab="About" href="/about">
                <IonIcon color="dark" icon={informationCircle} />
                <IonLabel color="dark">About</IonLabel>
              </IonTabButton>

          </IonTabBar>
          {/* </IonTabs> */}

          
              
           
    </IonToolbar> 
  </IonFooter>


    
      
  
 



    </IonPage>
  );
};

export default Menu;
