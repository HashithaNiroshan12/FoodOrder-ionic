import { IonBadge, IonButtons, IonCol, IonFooter, IonIcon, IonLabel, IonRouterOutlet, IonRow, IonTab, IonTabBar, IonTabButton, IonTabs, IonToolbar } from '@ionic/react';
import { cart, cartSharp, home, informationCircle, reader, restaurant } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';


import '../theme/variables.css'



interface ContainerProps { }


const Basket: React.FC<ContainerProps> = () => {
   const[basketNumbers, setBasketNumbers] = useState(0);
    setBasketNumbers(basketNumbers+1);
  
  return (
  
    <p>{basketNumbers}</p>
    
  );   };



export default Basket ;