import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { forgetUser } from '../firebaseConfig';
import { toast } from '../toast';



const Forget: React.FC = () => {
  const[username , setUsername] = useState('')

  async function forgetPassword(){
    const res = await forgetUser(username)
   
    if(res){
      toast('You have succeded!')
    }

    setUsername("");
    }
  
  return (
    <IonPage>
       <IonHeader>
         <IonToolbar color="secondary">
                  <IonButtons  slot="start">
                      <IonBackButton color="dark" defaultHref="/login"/>
                  </IonButtons>
                  <IonTitle color="dark"><b>RESET YOUR PASSWORD</b></IonTitle>
              </IonToolbar>
      </IonHeader> 
      <IonContent fullscreen>
          <IonItem lines="full">
                      <IonLabel position="floating">Email</IonLabel>
                      <IonInput type="email"  
                      onIonChange={(e:any) => setUsername(e.target.value)}  required></IonInput>
                  </IonItem>

                  <IonRow>
                      <IonCol>
                          <IonButton type="submit" color="danger" expand="block" onClick={forgetPassword}>Send</IonButton>
                      </IonCol>
                  </IonRow>

                  <h6 className="ion-padding">
                     Please provide the username or email address that you used when you signed
                     up for your account.
                  </h6>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Forget;
