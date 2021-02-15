import {    IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader,  IonCol, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonLabel, IonLoading, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, {  useState } from 'react';
import {  } from 'ionicons/icons';
import { Link,  } from 'react-router-dom';
import { toast } from '../toast';
import   {  db, registerUser,}  from '../firebaseConfig';




const Register: React.FC = () => {

 
  // const {userId} = Auth();
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [tele, setTele] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [Cpassword, setCPassword] = useState('')
  const [address, setAddress] = useState('')
  const[busy, setBusy] = useState<boolean>(false)


  async function register(){
     
   
    if(password !== Cpassword){
      return toast('Passwords do not match')
    }
    if(fname.trim() === '' || lname.trim() === ''
     || tele.trim() ==='' || address.trim() === '' || username.trim() === '' || password.trim() === ''){
      
      return toast('Fields are required');

     } 
     setBusy(true)
     const res =  await registerUser(fname,lname,tele,address,username,password);
     if(res){
       toast('You have registered successfully!');
        
       db.collection("register").doc("users").set({
         fname:fname,
         lname:lname,
         tele:tele,
         address:address,
         username:username
       })
     }
     setBusy(false)

     setFname("");
     setLname("");
     setTele("");
     setUsername("");
     setAddress("");
     setPassword("");
     setCPassword("")
  }


  return (
    <IonPage>
      <IonHeader >
       <IonToolbar color="medium">
         <IonButtons slot="start">
           <IonBackButton defaultHref="/home"/>
         </IonButtons>
         
         <IonTitle><b>REGISTER</b></IonTitle>
       </IonToolbar>
      </IonHeader>
      
      
      <IonContent color="medium">
      <IonLoading message="Registration in progress.." duration={0} isOpen={busy} />
       <IonRow>
        <IonCol >
        <IonCard color="dark" className="form" >
          <IonCardHeader>
            {/* <IonCardTitle style={{}}>Register</IonCardTitle> */}
          </IonCardHeader>

          <IonCardContent>
            <IonItem lines="inset" >
                    <IonLabel position="floating">First Name</IonLabel>
                    <IonInput id="fname" type="text" name="fname" 
                               value={fname}
                              onIonChange={(e:any) => setFname(e.target.value)} required>  
                    </IonInput>
            </IonItem>

            <IonItem lines="inset">
                    <IonLabel position="floating">Last Name</IonLabel>
                    <IonInput  id="lname" type="text" name="lname" 
                               value={lname}
                               onIonChange={(e:any) => setLname(e.target.value)} required>
                    </IonInput>
                </IonItem>

                <IonItem lines="inset">
                    <IonLabel position="floating">Telephone No </IonLabel>
                    <IonInput id="teleno" type="number" name="teleno" 
                              value={tele}
                              onIonChange={(e:any) => setTele(e.target.value)} required>
                    </IonInput>
                </IonItem>

                <IonItem lines="inset">
                    <IonLabel position="floating" >Username</IonLabel>
                    <IonInput  id="email" type="email" name="email" placeholder="Please enter your email"
                               value={username}
                               onIonChange={(e:any) => setUsername(e.target.value)} required>
                    </IonInput>
                </IonItem>

                <IonItem lines="inset">
                    <IonLabel position="floating" >Address</IonLabel>
                    <IonInput  id="address" type="text" name="address"
                               value={address}
                               onIonChange={(e:any) => setAddress(e.target.value)} required>
                    </IonInput>
                </IonItem>

                <IonItem lines="inset">
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput  id="password" name="password" type="password" 
                               value={password}
                               onIonChange={(e:any) => setPassword(e.target.value)} required>
                    </IonInput>
                </IonItem>

                <IonItem lines="inset">
                    <IonLabel position="floating">Confirm Password</IonLabel>
                    <IonInput  id="password" name="confirmpassword" type="password" 
                               value={Cpassword}
                               onIonChange={(e:any) => setCPassword(e.target.value)} required>
                    </IonInput>
                </IonItem>

                <IonButton id="Register" type="submit"  expand="full" color="danger" onClick={register} > Register</IonButton>

                <p className="ion-text-center ion-padding-top">Already have an account? <Link to="/login" >Login </Link></p>
              
                {/* <IonButton routerLink="/login" expand="full" color="primary">Login</IonButton> */}

        </IonCardContent>
        </IonCard >
        
       
        </IonCol>
      </IonRow>  

      {/* Footer */}

       <IonFooter>
        

    

</IonFooter>
        
      </IonContent>
    </IonPage>
  );
};

export default Register;
