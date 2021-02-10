import {   IonBackButton, IonButton, IonButtons,  IonContent, IonHeader,  IonImg, IonItem, IonLabel, IonList,   IonMenuButton,   IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { db } from '../firebaseConfig';


// type Item = {
//   id:string,
//   url: string;
//   text: string;
//   link:string;
// };

// const items: Item[] = [
//   { 
//     id:'m1',
//     url: '../../assets/images/rice/brownbasmathi.jpg',
//    text: 'BROWN BASMATHI RICE' ,
//    link:''
//   },
//   {
//     id:'m2',
//     url: '../../assets/images/rice/garlic.jpg',
//    text: 'GARLIC RICE' ,
//    link:''
//   },
//   {
//     id:'m1',
//     url: '../../assets/images/shorteats/threelayeredrice.jpg',
//     text: 'THREE LAYERED RICE' ,
//     link:''
//    },


// ];


const Menurice: React.FC = () => {
  const[rice, setRice]=useState<any[]>([]) 
 

    
 useEffect(() => {
  const ref = db.collection('menu').doc("dOmpVPCB5CN5Q1asCKKy").collection('types');
  ref.get().then((snapshot:any) => {
    const rice = snapshot.docs.map((doc:any) => ({
      id:doc.id,
      ...doc.data(),
    }));
     setRice(rice);
  })
}, [])

  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/menu"/>
            </IonButtons>
            <IonTitle>Rice</IonTitle>
            <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent>
        <IonList>
      {rice.map((image, i) => (
        <IonItem key={i} >
          <IonThumbnail slot="start">
          <IonImg src={image.url }/>
          </IonThumbnail>
      <IonLabel>{image.text}</IonLabel>
          <IonButton routerLink={image.link}>Customize</IonButton>
        </IonItem>
      ))}
    </IonList>   

     
        </IonContent>
        
        <Footer/>
    </IonPage>
  );
};

export default Menurice;
