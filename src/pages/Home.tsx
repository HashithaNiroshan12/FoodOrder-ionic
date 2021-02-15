import { IonButton, IonCol, IonContent, IonLabel,IonPage,  IonRow,} from '@ionic/react';
import React from 'react';


import '../theme/home.css';
import '../theme/variables.css';


const Home: React.FC = () => {
  return (
    <IonPage className="bg">
      <IonContent className="scroll-content IonContent" > 
        
            <IonLabel className="l1">Order Your Favorite Food Online</IonLabel>
            <section >
              <h1 style={{textAlign:"center",fontWeight:800}}>WELCOME</h1> 
             <IonButton routerLink="/register"  color="success" expand="block" ><b>Sign Up</b></IonButton>
             <IonButton  routerLink="/login" className="btn2" color="medium" expand="block"><b>Sign In</b></IonButton>
            </section>
          
      </IonContent>
    </IonPage>
  );
};

export default Home;
