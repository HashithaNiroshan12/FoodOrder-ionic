import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonSlide, IonSlides, IonText, IonTitle, IonToolbar, } from '@ionic/react';
import { addCircle, addCircleOutline, atCircleOutline, bicycleSharp, informationCircle, pin, pulseOutline, removeCircle, removeCircleOutline, removeCircleSharp, text, textOutline, walk, warning, wifi, wine } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../components/Footer';
import { db } from '../firebaseConfig';

import { connect } from 'react-redux';


import '../theme/Desc.css';
import { toast } from '../toast';
import Star from '../components/Star';



   
const DescGarlic: React.FC = () => {

  const[desrice, setDescrice]=useState<any[]>([]) ;

  const[type, setType] =useState<any[string]>([]);

  // const[half, setHalf] =useState<any[]>([]) ;
  // const[full, setFull] =useState<any[]>([]) ;

  const[title, setTitle] =useState("");
  const[price, setPrice] =useState<any[number]>([]);
  const[url,setUrl] = useState("");
  const[qty, setQty] = useState<any[number]>([]);
  const[total,setTotal] = useState<any[string]>([]);
  const[time,setTime] = useState("");
  const[date,setDate] = useState("");

 async function submit(e:any){
  e.preventDefault();

  if(type == '' || qty == '' )
     {      
      return toast('Fields are required');
     }

  db.collection('cart').doc("#GR121").set({         //doc("garlic rice").
    type:type,   
    title:'GARLIC RICE',
    price:'350.00',
    url:'../../assets/images/rice/garlic.jpg' ,
    qty:qty,
    total:350.00*qty*type,
    time:time,
    date:date
  })

  db.collection('order').doc("#GR121").set({         //doc("garlic rice").
  type:type,   
  title:'GARLIC RICE',
  price:'350.00',
  url:'../../assets/images/rice/garlic.jpg' ,
  qty:qty,
  total:350.00*qty*type,
  time:time,
  date:date
})
  .then(() => {
    alert("Add to Cart Successfully");
  })
  .catch((error) => {
    alert(error.message);
  });

  setQty("");
  setType("");
  setTime("");
  setDate("");
}
  
   
  useEffect(() => {
    const ref = db.collection('descGarlic');
    ref.get().then((snapshot:any) => {
      const desrice = snapshot.docs.map((doc:any) => ({
        id:doc.id,
        ...doc.data(),
      }));
      setDescrice(desrice);
    })
  }, [])
  
  return (
    <IonPage >
        
    <IonHeader>
      <IonToolbar color="light">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/menu"/>
          </IonButtons>
        <IonTitle><b>DESCRIPTION</b></IonTitle>
        <IonButtons slot="end">
          <IonMenuButton />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent>     
        {desrice.map((menu,id)=> (
          <IonRow key={id}>
          <IonCol  >
          <IonCard color="medium">
           <IonItem color="medium" lines="full">
             <IonCardHeader  ><b>{menu.title }</b></IonCardHeader>
             
             <IonButton  color="danger" fill="outline" slot="end" disabled>
                 Rs.{menu.price}
               
             </IonButton>
           </IonItem>
       
          <IonItem color="medium" lines="full">         
            <IonLabel><IonImg src={menu.url}></IonImg>
            <IonLabel color="dark" slot="end"><Star /></IonLabel></IonLabel>  
          </IonItem>
          
          <IonCardContent>
            <IonLabel color="primary">Add On :</IonLabel>
                {menu.add}  <br/>
           <IonLabel color="primary">Serving Time:	</IonLabel>
           <IonText>  11.00AM - 11.00PM</IonText>
             <br />
           <IonLabel color="primary">Delivery </IonLabel>
           <IonText> Delivery Available.</IonText>
          </IonCardContent>
             
        </IonCard>

        <IonCard >  
          {/* <IonCardContent > */}
          <IonRow>
            <IonCol>       
            <IonItem lines="none">       
               <IonLabel>Select a Type</IonLabel>                   
                 <IonSelect slot="end" value={type} onIonChange={(e:any) => setType(e.detail.value)}>
                   <IonSelectOption value="0.5">half(0.5) </IonSelectOption> 
                   <IonSelectOption value="1" >full(1)</IonSelectOption>
               </IonSelect>
             </IonItem>
            </IonCol>

            <IonItem lines="none">
                <IonLabel slot="end">Quantity</IonLabel>
                <IonInput slot="end" placeholder="Enter Qty" value={qty}
              onIonChange={(e:any) => setQty(e.detail.value)} type="number"></IonInput>
            </IonItem>
           
            <IonItem lines="none" >                       
               <IonLabel><IonIcon icon={bicycleSharp} />Arriving Date: <IonInput type="date" value={date} onIonChange={(e:any) => setDate(e.detail.value)} /> </IonLabel>           
            </IonItem>  
            
            <IonItem lines="none">
              <IonLabel><IonIcon icon={bicycleSharp} />Arriving Time: <IonInput type="time" value={time} onIonChange={(e:any) => setTime(e.detail.value)} />  </IonLabel>
            </IonItem>
           
            <IonCol>                   
             
            </IonCol>
          </IonRow>                      
           
          {/* </IonCardContent>            */}
        </IonCard>
  

        <IonItem lines="none">
          <IonButton slot="end" /*routerLink="../cart"*/ className="cartBtn" 
             onClick={submit} >Add to Cart</IonButton>
        </IonItem>
       
        
          </IonCol>
        </IonRow>

        ))}
         <IonInput  value={title} onIonChange={(e:any) => setTitle(e.detail.value)} ></IonInput>
         <IonInput  value={url} onIonChange={(e:any) => setUrl(e.detail.value)} ></IonInput>
         <IonInput  value={total} onIonChange={(e:any) => setTotal(e.detail.value)}></IonInput>  
         <IonInput  value={price} onIonChange={(e:any) => setPrice(e.detail.value)}> </IonInput> 
         
      </IonContent>


    {/* footer */}

    <Footer/>
  </IonPage>
  );
};

export default DescGarlic;
