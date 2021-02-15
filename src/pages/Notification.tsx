import {  IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonMenuToggle, IonPage, IonRouterOutlet, IonRow, IonTitle, IonToolbar, } from '@ionic/react';
import { Spellcheck } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';


// db.collection("menu").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   })
// })

const Notification: React.FC = () => {
  
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/menu"></IonBackButton>
          </IonButtons>
          
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="scroll-content" > 
        <IonCard>
        {/* <IonCardSubtitle >New Choice</IonCardSubtitle> */}
        <h4 style={{fontWeight:800}}>New Choice</h4>
        <br />
        <IonItem>
        <IonLabel><IonImg src="../assets/images/nasigoreng.jpg" style={{width:200,height:200}}></IonImg></IonLabel>
        </IonItem>
          
          {/* <img src="../assets/images/nasigoreng.jpg" /> */}
          <IonCardHeader>
            
            <IonCardTitle color="warning">Nasi goreng Available soon</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonLabel color="primary">Add On:</IonLabel> garlic, chili, and terasi, Sliced cucumbers
          </IonCardContent>
        </IonCard>
      
      </IonContent>
    </IonPage>
  );
};


export default Notification;
