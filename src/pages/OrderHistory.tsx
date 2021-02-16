import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, } from '@ionic/react';
import { CardTravel, LocalShippingSharp } from '@material-ui/icons';

import {  addCircleOutline, addCircleSharp, arrowForward, locationOutline, removeCircleOutline, removeCircleSharp } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import '../theme/orderhistory.css';
import { db } from '../firebaseConfig';



const OrderHistory: React.FC = () => {

  const[order, setOrder]=useState<any[]>([])
  
  const[order1, setOrder1]=useState<any[]>([])
  
  useEffect(() => { 
    const ref = db.collection("order");

    ref.get().then((snapshot:any) => {
      const order = snapshot.docs.map((doc:any) => ({
        id:doc.id,
        ...doc.data(),
      }));
      setOrder(order);
    })

  }, [])

  useEffect(() => { 
    const ref1 = db.collection("orders").doc('ws43EQ9tA5MDzsf23j1Z').collection('shipping').limit(1);

    ref1.get().then((snapshot:any) => {
      const order1 = snapshot.docs.map((doc:any) => ({
        id:doc.id,
        ...doc.data(),
      }));
      setOrder1(order1);
    })

  }, [])

  const errMsg = 'You have no History of Order.';

  return (
    <IonPage>
        
      <IonHeader >
        <IonToolbar color="light">
        <IonButtons slot="start">
              <IonBackButton defaultHref="/menu"/>
            </IonButtons>
          <IonTitle ><b>CART</b></IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>

         {/* <IonToolbar>  */}
           <IonTabBar color="medium" >
           
                <IonTabButton  tab="currentorder" href="/cart">
                  <IonLabel ><b>CURRENT ORDER</b></IonLabel>
                </IonTabButton>       
             
                <IonTabButton  tab="orderHistory" href="/orderHistory">
                  <IonLabel><b>ORDER HISTORY</b></IonLabel>
                </IonTabButton>
             
           </IonTabBar>  
           
         {/* </IonToolbar> */}
      </IonHeader>
      {order.length >0 ?(
      <IonContent className="scroll-content ion-padding" >
       

       
      {order.map((order,id) => (
          <IonCard key={id}>
            <IonCardContent className="ion-padding">
              
              <IonItem lines="none">
                <IonLabel slot="start" color="danger">{order.id}</IonLabel>             
                <IonLabel className="tot">{order.date}</IonLabel><br />
              </IonItem>

              <IonItem lines="none">
              < LocalShippingIcon />   
                <IonLabel >  
                  shipped
                </IonLabel> 
              </IonItem>

              
                <IonItem className="item1" lines="full">
                  <IonLabel slot="start" className="f1">{order.title}</IonLabel>
                  <IonLabel  className="tot"> {order.qty} qty</IonLabel>
                  <IonLabel >Rs.{order.price}(1)</IonLabel>
                </IonItem >
               
              <IonItem>
                <IonLabel className="Total"> Total Price</IonLabel>
                <IonLabel className="f1"> Rs.{order.total}.00</IonLabel>
              </IonItem>
            {order1.map((order1,id) => ( 
                 <IonItem key={id} lines="full">
                  <IonIcon icon={locationOutline} />
                  <IonLabel className="location">{order1.city}</IonLabel>               
                 </IonItem>
               ))} 
              
            
              
            </IonCardContent>
          </IonCard>
      ))}
       
     
      </IonContent>

):(<b><p style={{textAlign:'center',fontWeight:700}}>{errMsg}</p></b>)}
         
      
     

      <Footer/>
    </IonPage>
  );
};

export default OrderHistory;
