import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, } from '@ionic/react';
import { CardTravel, LocalShippingSharp } from '@material-ui/icons';

import {  addCircleOutline, addCircleSharp, arrowForward, locationOutline, removeCircleOutline, removeCircleSharp } from 'ionicons/icons';
import React from 'react';

import Footer from '../components/Footer';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import '../theme/orderhistory.css';



const OrderHistory: React.FC = () => {
  return (
    <IonPage>
        
      <IonHeader >
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/customize"/>
            </IonButtons>
          <IonTitle >Cart</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>

         {/* <IonToolbar>  */}
           <IonTabBar >
           
                <IonTabButton  tab="currentorder" href="/cart">
                  <IonLabel >CURRENT ORDER</IonLabel>
                </IonTabButton>       
             
                <IonTabButton  tab="orderHistory" href="/orderHistory">
                  <IonLabel>ORDER HISTORY</IonLabel>
                </IonTabButton>
             
           </IonTabBar>  
           
         {/* </IonToolbar> */}
      </IonHeader>

      <IonContent className="scroll-content ion-padding" >
          <IonCard>
            <IonCardContent className="ion-padding">
              <IonItem lines="none">
                <IonLabel slot="start" color="danger">Order #21412</IonLabel>
                <IonLabel className="tot">Feb 16,2020</IonLabel><br />
              </IonItem>

              <IonItem lines="none">
              < LocalShippingIcon />   
                <IonLabel >  
                  shipped
                </IonLabel> 
              </IonItem>

              <IonItem className="item1" lines="full">
                <IonLabel className="f1">Brownbasmathi</IonLabel>
                <IonLabel className="tot"> 20 qty</IonLabel>
                <IonLabel >Rs.300.00(1)</IonLabel>
              </IonItem >


              <IonItem  lines="full">
                <IonIcon icon={locationOutline} />
                   <IonLabel className="location">Athiliwew,Monaragala</IonLabel>               
              </IonItem>

              <IonItem>
                <IonLabel className="Total"> Total</IonLabel>
                <IonLabel className="f1"> Rs.6000.00</IonLabel>
              </IonItem>
            
            
              
            </IonCardContent>
          </IonCard>
      </IonContent>


      
         
      
         
     
         
      {/* footer */}

      <Footer/>
    </IonPage>
  );
};

export default OrderHistory;
