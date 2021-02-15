import { IonBackButton, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar, } from '@ionic/react';
import { calendar, call, cardOutline, checkmarkCircleOutline, checkmarkDoneSharp, heart, informationCircle, locationOutline, map, personCircle, pin } from 'ionicons/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { db } from '../firebaseConfig';

import '../theme/order.css'
import { toast } from '../toast';


const Order: React.FC = () => {

    const [fullname, setFullname] = useState("");    
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [tele, setTele] = useState("");

    const history = useHistory()
  async function Submit(e:any)  {
    e.preventDefault();

   

    if(fullname == '' || address == '' || city == '' || zip == '' || tele == '' )
     {      
      return toast('Fields are required');
     }
      

    db.collection('orders').doc('ws43EQ9tA5MDzsf23j1Z').collection('shipping').add({
      fullname:fullname,
      address:address,
      city:city,
      zip:zip
    })
    .then(() => {
      alert("Shipping added Successfully");
      history.replace('/payment')
 
    })
    .catch((error) => {
      alert(error.message);
    });
   
    
    setFullname("")
    setAddress("")
    setCity("")
    setZip("")
    setTele("")
  };

  

  return (
    <IonPage>
        
      <IonHeader>
        <IonToolbar color="light">
        <IonButtons slot="start">
              <IonBackButton defaultHref="/cart"/>
            </IonButtons>
          <IonTitle className="ion-text-center"><b>CHECKOUT</b></IonTitle>
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
      <IonCard > 
        <IonCardHeader  className="ion-header"  color="medium">SHIPPING ADDRESS</IonCardHeader>
          <IonCardContent className="card">
            <IonItem lines="full">
              <IonLabel position="stacked">Full Name</IonLabel>
              <IonInput className="text-input"  type="text" value={fullname} onIonChange={(e:any) => setFullname(e.target.value)}></IonInput>
             </IonItem>

             <IonItem> 
              <IonLabel position="stacked">Address</IonLabel>
              <IonInput className="text-input" type="text" value={address} onIonChange={(e:any) => setAddress(e.target.value)}></IonInput> 
            </IonItem> 

            <IonItem> 
              <IonLabel position="stacked">City</IonLabel>
              <IonInput className="text-input" type="text" value={city} onIonChange={(e:any) => setCity(e.target.value)}></IonInput> 
            </IonItem> 

            <IonItem> 
              <IonLabel position="stacked">Contact Number </IonLabel>
              <IonInput className="text-input" type="tel" value={tele} onIonChange={(e:any) => setTele(e.target.value)}></IonInput> 
            </IonItem>  

            <IonItem  lines="full"> 
              <IonLabel position="stacked">ZIP</IonLabel>
              <IonInput className="text-input" type="number" value={zip} onIonChange={(e:any) => setZip(e.target.value)}></IonInput> 
            </IonItem>
                                    
          </IonCardContent>
      </IonCard>
     
      
    
    </IonContent>
    {/* <IonFooter> */}
      
       <IonButton onClick={Submit} className="payment-info">NEXT - PAYMENT INFO</IonButton>
      

    {/* </IonFooter> */}
    

    {/* footer */}

    {/* <Footer/> */}
    
    </IonPage>
  );
};

export default Order;
