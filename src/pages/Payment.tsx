import { IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTabBar, IonTabButton, IonTabs, IonText, IonTitle, IonToolbar, } from '@ionic/react';
import { calendar, call, cardOutline, checkmarkCircleOutline, heart, informationCircle, locationOutline, map, personCircle, pin } from 'ionicons/icons';
import React, { useState } from 'react';
import { db } from '../firebaseConfig';

import '../theme/payment.css'
import { toast } from '../toast';



const Payment: React.FC = () => {

  const [payment, setPayment] = useState("");
  async function Submit(e:any)  {
    e.preventDefault();

    if(payment == ''  )
     {      
      return toast('Fields are required');
     }

    db.collection('orders').doc('payment').set({
      payment:payment
    })
    .then(() => {
      alert("Submit Successfully");
      // window.history.replaceState({}, '','./payment', )
    })
    .catch((error) => {
      alert(error.message);
    });
   
    setPayment("")
  };

  return (
    <IonPage>
        
      <IonHeader>
        <IonToolbar>
        
          <IonTitle className="ion-text-center">PAYMENT</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

       <IonTabBar >
           
                <IonTabButton  tab="currentorder" href="/order">
                  <IonIcon icon={locationOutline} />
                  <IonLabel >SHIPPING</IonLabel>
                </IonTabButton>       
             
                <IonTabButton  tab="payment" href="/payment">
                  <IonIcon icon={cardOutline} />
                  <IonLabel>PAYMENT</IonLabel>
                </IonTabButton>

                <IonTabButton  tab="confirm" href="/confirm">
                  <IonIcon icon={checkmarkCircleOutline} /> 
                  <IonLabel>CONFIRM</IonLabel>
                </IonTabButton>
             
           </IonTabBar>  
    <IonContent>
        <IonItem lines="none" className="ion-text-center">
          <IonLabel>PAYING WITH</IonLabel>
        </IonItem>
       
        <IonItem lines="inset">
          <IonLabel color="medium">PAYEMENT METHOD</IonLabel>
           <IonSelect   value={payment} onIonChange={(e:any) => setPayment(e.target.value)}>
            {/* <IonSelectOption value="visa">VISA</IonSelectOption> */}
            <IonSelectOption value="cash">CASH ON DELIVERY</IonSelectOption>
          </IonSelect>
        </IonItem>
    </IonContent>
 
      
       <IonButton onClick={Submit} routerLink="/confirm" className="payment-info">CONFIRM PAYMENT</IonButton>
    
    </IonPage>
  );
};

export default Payment;
