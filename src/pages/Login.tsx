import { IonBackButton, IonButton,  IonButtons,  IonCard,  IonCardContent,  IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {forgetUser, loginUser} from '../firebaseConfig'
import { setUserstate } from '../redux/action';
import { toast } from '../toast';



const Login: React.FC = () => {

   const[busy, setBusy] = useState<boolean>(false)
   const dispatch = useDispatch()
   const history = useHistory()

  const[username , setUsername] = useState('')
  const[password , setPassword] = useState('')

  async function login(){
    setBusy(true)
    const res:any = await loginUser(username, password)
    //console.log(`${res ? 'Login success' : 'Login failed'}`)
    if(res){
      dispatch(setUserstate(res.user.email))//email
      history.replace('/Menu')
      toast('You have logged in!')
    }
    setBusy(false) 
  }
 
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
           <IonBackButton defaultHref="/home"/>
         </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait.." duration={0} isOpen={busy} />
      <IonContent >
        <IonRow>
           <IonCol>
             <IonCard  color="dark">
               <IonCardContent>
                 <IonItem lines="inset" >
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput id="username" type="text" name="username" 
                      onIonChange={(e:any) => setUsername(e.target.value)} required>
                    </IonInput>
                 </IonItem>

                 <IonItem lines="inset" >
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput id="password" type="password" name="password"
                      onIonChange={(e:any) => setPassword(e.target.value)}  required>
                     </IonInput>
                 </IonItem>

                 
                 
                   <IonButton  id="login" type="submit"  expand="block" color="primary" onClick={login}> Login</IonButton>
        
                      <p  className="ion-text-right ion-padding-top"> forget your password? <Link to="/forgetpassword"  >Reset  ! </Link></p>
                     

                       <h6 className="ion-text-center ion-padding-top">No account yet? <Link to="/register" >Signup Now ! </Link></h6>

                 

               </IonCardContent>
             </IonCard>

           </IonCol> 
        </IonRow>
        
      </IonContent>
    </IonPage>
  );
};

export default Login;
