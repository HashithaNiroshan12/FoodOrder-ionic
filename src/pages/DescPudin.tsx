import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle, IonToolbar, } from '@ionic/react';
import { addCircle, addCircleOutline, atCircleOutline, informationCircle, pin, pulseOutline, removeCircle, removeCircleOutline, removeCircleSharp, text, textOutline, walk, warning, wifi, wine } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../components/Footer';
import { db } from '../firebaseConfig';

import { connect } from 'react-redux';


import '../theme/Desc.css';

 type Description = {
  // id:string,
  title:string,
  price:string,
  url: string;
  add: string;
 

};

// const desrice :Description[] = [
//   {
//     // id:'m1',
//     title:'GARLIC RICE',
//     price:'350.00',
//     url:'../../assets/images/rice/garlic.jpg',
//     add:'Vegetable Chopsuey, Chutney, Omelet,Chilli Paste,Green Peas',
   
//   }
 

// ];


   
const DescPudin: React.FC = () => {

  const[desrice, setDescrice]=useState<any[]>([]) 
 
  useEffect(() => {
    const ref = db.collection('descPudin');
    ref.get().then((snapshot:any) => {
      const desrice = snapshot.docs.map((doc:any) => ({
        id:doc.id,
        ...doc.data(),
      }));
      setDescrice(desrice);
    })
  }, [])
  
  return (
    <IonPage >
        
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/menu"/>
            </IonButtons>
          <IonTitle>Description</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {desrice.map((menu, i)=> (
          <IonRow key={i}>
          <IonCol  >
          <IonCard >
           <IonItem lines="inset">
             <IonCardHeader ><b>{menu.title}</b></IonCardHeader>
             <IonButton color="danger" fill="outline" slot="end" disabled>Rs.{menu.price}</IonButton>
           </IonItem>
          
       
          <IonItem>           
            <IonLabel><IonImg src={menu.url}></IonImg></IonLabel>        
          </IonItem>

          <IonCardContent>
            <IonLabel color="primary">Add On :</IonLabel>
                {menu.add}  <br/>
           <IonLabel color="primary">Serving Time:	</IonLabel>
           <IonText>  11.00AM - 11.00PM</IonText>
             <br />
           <IonLabel color="primary">Delivery </IonLabel>
           <IonText> Delivery Available.</IonText>
          </IonCardContent>
         
        </IonCard>

        <IonItem lines="none">
          <IonLabel slot="end">Select a Type</IonLabel>
          <IonSelect  slot="end">
            <IonSelectOption >Boiled</IonSelectOption>
            <IonSelectOption >Baked</IonSelectOption>
            <IonSelectOption >Steamed</IonSelectOption>
            
          </IonSelect>
        </IonItem>
        
        <IonItem lines="none">
          <IonLabel slot="end">Quantity</IonLabel>
          <IonInput slot="end" placeholder="Enter Qty" type="number"></IonInput>
        </IonItem>

    
        {/* </IonItem> */}
        <IonItem lines="none">
          <IonButton slot="end" /*routerLink="../cart" */className="cartBtn" >Add to Cart</IonButton>
        </IonItem>
        

          </IonCol>
        </IonRow>

        ))}
        
        
      </IonContent>

      {/* footer */}

      <Footer/>
    </IonPage>
  );
};

export default DescPudin;
