import { IonBadge, IonButtons, IonCol, IonFooter, IonIcon, IonLabel, IonRouterOutlet, IonRow, IonTab, IonTabBar, IonTabButton, IonTabs, IonToolbar } from '@ionic/react';
import { cart, cartSharp, home, informationCircle, reader, restaurant } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';


import  '../theme/variables.css'




interface ContainerProps { }


const Footer: React.FC<ContainerProps> = () => {
  
   const[cart, setCart]=useState<any[]>([]) 
 
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
  
      
      <IonFooter>    
        <IonToolbar > 
         

          <IonTabBar color="warning"> 
          
              <IonTabButton tab="Menu" href="/menu">
                <IonIcon icon={restaurant} />
                <IonLabel>Menu</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Contact" href="/contact">
                <IonIcon icon={reader} />
                <IonLabel>Contact</IonLabel>
              </IonTabButton>

              {/* {cart.map((cart) => ( */}
                 <IonTabButton /*key={cart.id}*/ tab="Cart" href="/cart">
                 <IonIcon icon={cartSharp} />
                 <IonLabel>Cart</IonLabel>
              <IonBadge color="primary"><b>{cart.length}</b></IonBadge>
               </IonTabButton>

              {/* ))} */}
         
          </IonTabBar>
          
    </IonToolbar> 
  </IonFooter>

   
    
  );   };



export default  Footer;