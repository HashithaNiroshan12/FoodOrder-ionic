import {  IonButton, IonContent,IonIcon,IonLabel,IonLoading,IonPage,  } from '@ionic/react';

import { logOutOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../firebaseConfig';
import '../pages/Logout'


const Logout: React.FC = () => {
    const[busy, setBusy] = useState<boolean>(false);
    const history = useHistory()
    
    // async function logout() {
    //     setBusy(true)
    //      await logoutUser()
    //      setBusy(false)
    //      history.replace('/home');
    //    }
  return (
    <IonPage >
      <IonContent > 
      <IonLoading message="Logging out.." duration={0} isOpen={busy} />
      {/* <IonButton color="light" onClick={logout}><IonLabel color="danger">Logout</IonLabel><IonIcon slot="end"  icon={logOutOutline} /></IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Logout;
