import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonInput, IonItem,  IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
// import { db } from '../firebaseConfig';
import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {db, getCurrentUser } from '../firebaseConfig';




const Profile: React.FC = () => {
  
  const[users, setUsers]=useState<any[]>([]) 
  
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [tele, setTele] = useState('')
  
  const [address, setAddress] = useState('')


  // async function update(){
  //   db.collection("register").doc('users').update({
  //     fname:fname,
  //     lname:lname,
  //     tele:tele,
  //     address:address,
      
  //   })
  // }

 useEffect(() => {
  
   const ref = db.collection('register').limit(1);
   ref.get().then((snapshot:any) => {
     const users = snapshot.docs.map((doc:any) => ({
       id:doc.id,
       ...doc.data(),
     }));
      setUsers(users);
   })
 }, )


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
           <IonBackButton defaultHref="/menu"/>
         </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" >

       

          {users.map((entry) =>(
          <IonList key={entry.id}>
          <IonItem lines="inset" >
       <IonLabel position="stacked">First Name</IonLabel>
       <IonInput id="fname" type="text" name="fname"    
        value={fname}
        onIonChange={(e:any) => setFname(e.target.value)}       
        required disabled>{entry.fname }</IonInput>
    </IonItem>
   
          
    <IonItem lines="inset" >
       <IonLabel position="stacked">Last Name</IonLabel>
       <IonInput id="lname" type="text" name="lname"
       value={lname}
       onIonChange={(e:any) => setLname(e.target.value)}           
        required disabled>{entry.lname}</IonInput>
    </IonItem>

    <IonItem lines="inset" >
       <IonLabel position="stacked">Phone No</IonLabel>
       <IonInput id="phone" type="number" name="phone" 
       value={tele}
       onIonChange={(e:any) => setTele(e.target.value)}       
        required disabled>{entry.tele}</IonInput>
    </IonItem>

    <IonItem lines="inset" >
       <IonLabel position="stacked">Email</IonLabel>
       <IonInput id="email" type="email" name="email"     
        required disabled>{entry.username}</IonInput>
    </IonItem> 

     <IonItem lines="inset" >
       <IonLabel position="stacked">Address</IonLabel>
       <IonInput id="address" type="text" name="address" 
       value={address}
       onIonChange={(e:any) => setAddress(e.target.value)}    
        required disabled>{entry.address}</IonInput>
    </IonItem> 

    

  <IonRow>
    <IonCol>
       <IonButton color="danger" expand="full" type="submit" >UPDATE</IonButton>
    </IonCol>
  </IonRow>


       </IonList>
      

          ))}

      </IonContent>
    </IonPage>
  );
};

export default Profile;
