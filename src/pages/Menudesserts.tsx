import {   IonBackButton, IonButton, IonButtons,  IonContent, IonHeader,  IonImg, IonItem, IonLabel, IonList,   IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import '../theme/menu.css';



const Menudesserts: React.FC = () => {

  const[desserts, setDesserts]=useState<any[]>([]) 
 

    
  useEffect(() => {
   const ref = db.collection('menu').doc("5JxU27k1Y6Sg7kzDJ1n6").collection('types');
   ref.get().then((snapshot:any) => {
     const desserts = snapshot.docs.map((doc:any) => ({
       id:doc.id,
       ...doc.data(),
     }));
     setDesserts(desserts);
   })
 }, [])
  return (
    <IonPage>
        <IonHeader>
          <IonToolbar color="light">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/menu"/>
            </IonButtons>
            <IonTitle ><b>DESSERTS</b></IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
        <IonList >
      {desserts.map((image, i) => (
        <IonItem lines="full"  key={i}>
          <IonThumbnail slot="start">
          <IonImg src={image.url }/>
          </IonThumbnail>
          <IonLabel ><b>{image.text}</b></IonLabel>
          <IonButton routerLink={image.link}>Customize</IonButton>
        </IonItem>
      ))}
    </IonList>   

     
        </IonContent>
    </IonPage>
  );
};

export default Menudesserts;
