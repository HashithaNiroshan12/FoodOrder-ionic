import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonInput, IonItem,  IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState} from 'react';
import { db } from '../firebaseConfig';




const Contact: React.FC = () => {
    const [text, setText] = useState("");    
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
   
   async function Submit(e:any)  {
      e.preventDefault();

      db.collection('contacts').add({
        type:type,
        name:name,
        email:email,
        phone:phone,
        text:text
      })
      .then(() => {
        alert("Submit Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
      setName("")
      setType("")
      setEmail("")
      setPhone("")
      setText("")
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
        <IonButtons slot="start">
           <IonBackButton defaultHref="/menu"/>
         </IonButtons>
          <IonTitle><b>FEEDBACK</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" >

      <IonItem >
          <IonLabel>Inquiry Type</IonLabel>
          <IonSelect  value={type} onIonChange={(e:any) => setType(e.detail.value)} >
            <IonSelectOption >Contact</IonSelectOption>
            <IonSelectOption >Order Inquiry</IonSelectOption>
            <IonSelectOption >Appreciation</IonSelectOption>
            <IonSelectOption >Complaint</IonSelectOption>
          </IonSelect>
        </IonItem>

          <IonItem lines="inset" >
             <IonLabel position="floating">Full Name</IonLabel>
             <IonInput id="fullname" type="text" name="fullname" value={name}
             onIonChange={(e:any) => setName(e.detail.value)}
              required></IonInput>
          </IonItem>

          <IonItem lines="inset" >
             <IonLabel position="floating">Phone No</IonLabel>
             <IonInput id="phone" type="text" name="phone" value={phone}
             onIonChange={(e:any) => setPhone(e.detail.value)}
              required></IonInput>
          </IonItem>

          <IonItem lines="inset" >
             <IonLabel position="floating">Email</IonLabel>
             <IonInput id="email" type="email" name="email" value={email}
             onIonChange={(e:any) => setEmail(e.detail.value)}
              required></IonInput>
          </IonItem>

          {/* <IonItem lines="inset" >
             <IonLabel position="floating">Re-Enter Email</IonLabel>
             <IonInput id="fullname" type="text" name="fullname" required></IonInput>
          </IonItem> */}

          {/* <IonItem lines="inset" >
             <IonLabel position="floating">Message</IonLabel>
             <IonInput id="fullname" type="text" name="fullname" required></IonInput>
          </IonItem> */}

          {/* <IonItemDivider>Message</IonItemDivider>           */}
          <IonItem lines="inset">
          <IonLabel position="floating">Message</IonLabel>
            <IonTextarea  value={text} onIonChange={(e:any) => setText(e.detail.value)}></IonTextarea>
          </IonItem>
        
        <IonRow>
          <IonCol>
             <IonButton style={{align:"center"}} onClick={Submit} color="primary" expand="full" type="submit"> Submit</IonButton>
          </IonCol>
        </IonRow>
          
         
 
          
      
      </IonContent>
    </IonPage>
  );
};

export default Contact;
