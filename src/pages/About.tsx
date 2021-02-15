import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonText, IonTitle, IonToolbar, } from '@ionic/react';
import {  callSharp, checkmarkDoneSharp, locationSharp, logoFacebook, timeSharp } from 'ionicons/icons';

import React from 'react';
import { Link } from 'react-router-dom';
import '../theme/about.css';



const About: React.FC = () => {
 
  
  return (
  
    <IonPage>
      <IonHeader >
        <IonToolbar color="light">
        <IonButtons slot="start">
           <IonBackButton defaultHref="/menu"/>
         </IonButtons>
          <IonTitle><b>ABOUT</b></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <IonCard>      
      <IonCardHeader className="pavilion">
           <IonCardTitle ion-text-center><b>PAVILION RESTUARANT</b> </IonCardTitle> 
         </IonCardHeader>  
           <IonImg src="../../assets/images/about.jpg"></IonImg>  
      </IonCard>

      <IonCard className="details">
         <IonCardContent> 
             <IonButton color="dark" >
               <IonIcon icon={locationSharp}/>
             </IonButton>
               <IonLabel color="secondary"> Address:
               No. 01, Pothuvill Road,
               Monaragala
               </IonLabel> 
           

           <br/>
               <IonButton color="dark" >
                 <IonIcon icon={timeSharp}/>
               </IonButton>
               <IonLabel color="secondary"> Hours: 9.00 A.M. - 11.00 P.M.</IonLabel> 
           

          <br/>             
              <IonButton strong color="dark" >
                <IonIcon icon={callSharp}/>  
              </IonButton>
              <IonLabel color="secondary"> Call: 055-2276127</IonLabel>
           
          <br/>
            
                 <IonButton color="dark" >
                   <IonIcon icon={logoFacebook}/>
                 </IonButton>
                 <IonLabel color="secondary"> pavilionhotel127</IonLabel>
             
         </IonCardContent>
       </IonCard> 

      </IonContent>      
    </IonPage>
  );

};

export default  About;
