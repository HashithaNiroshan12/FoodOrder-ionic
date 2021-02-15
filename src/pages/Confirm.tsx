import { IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs, IonText, IonTitle, IonToolbar, } from '@ionic/react';
import { calendar, call, cardOutline, checkmarkCircleOutline, checkmarkDoneSharp, heart, informationCircle, locationOutline, map, personCircle, pin } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';

import '../theme/confirm.css'

import delivery from'../assets/images/delivery.jpg'
import { db } from '../firebaseConfig';
import { useSelector } from 'react-redux';



const Confirm: React.FC = () => {
  const[confirm, setConfirm]=useState<any[]>([]) ;
  const username = useSelector((state:any) => state.user.username)
     
  useEffect(() => {
    const ref = db.collection('orders').doc('ws43EQ9tA5MDzsf23j1Z').collection('shipping').limit(1);

    ref.get().then((snapshot:any) => {
      const confirm = snapshot.docs.map((doc:any) => ({
        id:doc.id,
        ...doc.data(),
      }));
      setConfirm(confirm);
    })
  }, [])
  return (
    <IonPage>
        
      <IonHeader>
        <IonToolbar color="light">
        
          <IonTitle className="ion-text-center"><b>CONFIRM</b></IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>

      </IonHeader>

       <IonTabBar >
           
                <IonTabButton  tab="currentorder" href="/confirm"><IonBadge color="success" ><IonIcon icon={checkmarkDoneSharp} /></IonBadge>
                  <IonIcon icon={locationOutline} /> 
                  <IonLabel >SHIPPING</IonLabel>
                </IonTabButton>       
             
                <IonTabButton  tab="payment" href="/confirm"><IonBadge color="success" ><IonIcon icon={checkmarkDoneSharp} /></IonBadge>
                  <IonIcon icon={cardOutline} /> 
                  <IonLabel>PAYMENT</IonLabel>
                </IonTabButton>

                <IonTabButton  tab="confirm" href="/confirm"><IonBadge color="success" ><IonIcon icon={checkmarkDoneSharp} /></IonBadge>
                  <IonIcon icon={checkmarkCircleOutline} />
                  <IonLabel>CONFIRM</IonLabel>
                </IonTabButton>
             
           </IonTabBar>  
    <IonContent  >
    <IonItem  lines="none" className="confirm-text">
          <IonLabel>Thank you,<IonText className="username">{username}</IonText>!</IonLabel>       
        </IonItem>
      
      <IonItem lines="none" className="ion-text-center">
        <IonLabel>Your order has been placed.</IonLabel>       
      </IonItem>

      <IonItem lines="none" className="img">
         <IonImg  src={delivery}></IonImg>
      </IonItem>

      {confirm.map((con, id) => (
        <IonCard key={id} color="medium">
        <IonCardContent>
          <IonItem lines="full">
            <IonText>1 item shipping to:</IonText>
            <IonText color="tertiary" slot="end">(free)</IonText>
          </IonItem>
          <IonItem>
          <IonLabel>
            <IonText> 
            {con.fullname}<br />
              {con.address}<br />
              {con.city},<br /> 
             {con.zip}
            </IonText>
          </IonLabel>
          </IonItem>   
        </IonCardContent>
      </IonCard>
        
        ))}
    
    
    </IonContent>

    <IonButton routerLink="/menu" className="btn1" color="warning">
      <IonLabel ><b>Keep Shopping</b></IonLabel>
    </IonButton>
    
   
   <IonButton routerLink="/orderHistory">
      <IonLabel>Review Your Order</IonLabel>
    </IonButton>
  
    
    </IonPage>
  );
};

export default Confirm;
