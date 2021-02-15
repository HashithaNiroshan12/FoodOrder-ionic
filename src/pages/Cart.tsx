import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, } from '@ionic/react';
import { AddCircleOutline, CakeTwoTone } from '@material-ui/icons';
import { auth } from 'firebase';
import { addCircle, addCircleOutline, addCircleSharp, arrowForward, removeCircleOutline, removeCircleSharp } from 'ionicons/icons';
import React, { Fragment, useEffect, useState } from 'react';
import { Route } from 'react-router';
import Footer from '../components/Footer';
import { db } from '../firebaseConfig';

// import './login.css';
import '../theme/cart.css';
import { toast } from '../toast';


const Cart: React.FC = () => {
  const[cart, setCart]=useState<any[]>([]) 
  const[total, setTotal]=useState<any[]>([]) 

  const[title, setTitle] =useState();
  const[price, setPrice] =useState<any[number]>([]);
  const[url,setUrl] = useState("");
  const[qty, setQty] = useState<any[number]>([]);

  //const[price, setPrice] =useState<any[number]>([]);

//  function addNumbers(price:number){
//    return price+=price;
//  }
//    const sum: number = addNumbers(cart.price);
//   console.log('sum is:'+sum);
 
     
 
   // const[total, setTotal]=useState(0)
    
     
    const errMsg = 'You have no items in your cart.';
    
  useEffect(() => { 
    const ref = db.collection("cart");

    ref.get().then((snapshot:any) => {
      const cart = snapshot.docs.map((doc:any) => ({
        id:doc.id,
        ...doc.data(),
      }));
      setCart(cart);
    })

  }, [])

  

  useEffect(() => { 
    const ref = db.collection("total");

    ref.get().then((snapshot:any) => {
      const total = snapshot.docs.map((doc:any) => ({
        id:doc.id,
        ...doc.data(),
      }));
      setTotal(total);
    })

  }, [])

  async function order(e:any){
    e.preventDefault();
    toast('Succefully Ordered your Food Item',5000)

  }

  async function remove(){
    
     db.doc("/cart/#BR120").delete();      //rice
     db.doc("cart/#GR121").delete(); 
     db.collection('cart').doc("#TR122").delete(); 
      
     db.collection('cart').doc("#CK200").delete(); //kottu
     db.collection('cart').doc("#VK201").delete(); 
     db.collection('cart').doc("#CKK202 ").delete();
      
     db.collection('cart').doc("#SE100").delete();    //shortearts
     db.collection('cart').doc("#SM101").delete();
     db.collection('cart').doc("#SP102").delete();
       db.collection('cart').doc("#SR103").delete();
       db.collection('cart').doc("#SS104").delete();
      
       db.doc("cart/#DC320").delete();       //dessert
       db.collection('cart').doc("#DCC321").delete();      
    
     
   }
   
  
  return (
    
    <IonPage>
        
      <IonHeader >
        <IonToolbar color="light">
        <IonButtons slot="start">
              <IonBackButton defaultHref="/menu"/>
            </IonButtons>
          <IonTitle ><b>CART</b></IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>

         {/* <IonToolbar>  */}
           <IonTabBar color="medium">
           
                <IonTabButton  tab="currentorder" href="/cart">
                  <IonLabel ><b>CURRENT ORDER</b></IonLabel>
                </IonTabButton>       
             
                <IonTabButton  tab="orderHistory" href="/orderHistory">
                  <IonLabel><b>ORDER HISTORY</b></IonLabel>
                </IonTabButton>
             
           </IonTabBar>  
           
         {/* </IonToolbar> */}
      </IonHeader>
    
      <IonContent className="scroll-content ion-padding" >
      {cart.length > 0 ?(
         <IonRow>
         <IonCol >
         {cart.map((cart) => (
        
         <IonCard color="secondary" key={cart.id} >
           
        <IonList mode="md">                 
           <IonItem>
              <IonThumbnail slot="start">
                  <IonImg src={cart.url}/>                 
              </IonThumbnail>
              <IonLabel className="totalPrice">{cart.title}
               </IonLabel>                      
           </IonItem>
           <IonItem>                     
                <IonLabel className="quanty" slot="start" color="warning">Quantity: {cart.qty} </IonLabel>
                <IonLabel >Rs.{cart.price} (1)</IonLabel>    
           </IonItem>
           
                   {/* {cart.total+=cart.total} */}
          
           <IonItem>
              <IonLabel  color="success">Type:{cart.type}</IonLabel>
              <IonLabel className="totalPrice">Total Price:</IonLabel> <IonLabel className="totalPrice">Rs.{cart.total}.00</IonLabel> 
             </IonItem>            
                          
                         
                          
                          {/* <IonButton onClick={decrementCount}>-</IonButton>
                          <span>{count}</span>
                          <IonButton onClick={incrementCount}>+</IonButton> */}
       </IonList>
       <IonItem >
            <IonButton slot="end" color="danger" onClick={remove}> 
                  <IonIcon icon={removeCircleSharp} />
                    Remove
                </IonButton>
                {/* <IonButton onClick={order} slot="end" color="success"> 
                  <IonIcon icon={addCircleSharp} />
                    Order
                </IonButton> */}
            </IonItem>
        </IonCard>


        )
        )}

           
       </IonCol>
     </IonRow>
      ): (<b><p style={{textAlign:'center',fontWeight:700}}>{errMsg}</p></b>)}
     
   
      </IonContent> 
      {cart.length>0 ? (
        <IonCard className="total" >    
            <IonCardContent>         
                
               <IonItem color="lightcyan" lines="none">
                 <IonButton  slot="end" color="danger"  routerLink="/order">
                   Checkout
                   <IonIcon icon={arrowForward} />
                 </IonButton>
               </IonItem>
            </IonCardContent>
        </IonCard> 
      ): (<b><p style={{textAlign:'center',fontWeight:500}}>{toast}</p></b>)}
      

      {/* {total.map((total) => (
           <IonCard className="total" >    
            <IonCardContent>         
                <IonLabel className="lblTotal">Total</IonLabel><br/>
                {total.total[0]+total.total[1]}
                <IonLabel className="lblTprice"></IonLabel>
               <IonItem color="lightcyan" lines="none">
                 <IonButton  slot="end" color="danger" routerLink="/order">
                   Checkout
                   <IonIcon icon={arrowForward} />
                 </IonButton>
               </IonItem>
            </IonCardContent>
        </IonCard> 
      )
      )}   */}

         
     
         
      {/* footer */}

      <Footer/>
    </IonPage>
  );

};

export default Cart;
