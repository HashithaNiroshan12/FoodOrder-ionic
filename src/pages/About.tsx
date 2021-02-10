import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar, } from '@ionic/react';

import React from 'react';




const About: React.FC = () => {
 
  
  return (
  
    <IonPage >        
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton defaultHref="/menu"></IonBackButton>
          </IonButtons>         
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="scroll-content" >
     
      </IonContent>
      
    </IonPage>
  );

};

export default  About;
