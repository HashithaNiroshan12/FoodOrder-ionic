import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRouterOutlet, IonRow, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonText, IonThumbnail, IonTitle, IonToolbar, } from '@ionic/react';
import { AddCircleOutline, CakeTwoTone } from '@material-ui/icons';
import { auth } from 'firebase';
import { addCircle, addCircleOutline, addCircleSharp, arrowForward, removeCircleOutline, removeCircleSharp } from 'ionicons/icons';
import React, { Fragment, useEffect, useState } from 'react';
import { Route } from 'react-router';
import Footer from '../components/Footer';
import { db } from '../firebaseConfig';

// import './login.css';
import '../theme/cart.css';


//  type Description = {
//  id:string;
//   title:string,
//   price:string,
//   url: string;
//   text: string;
//   qty:string;
//   type:string;
// };

// const items :Description[] = [
//   {
//     id:'1',
//     title:'BROWN BASMATHI RICE',
//     price:'Rs.300.00',
//     url:'../../assets/images/rice/brownbasmathi.jpg',
//     text:' Vegetable Chopsuey, Chutney, Omelet,Chilli Paste,Green Peas',
//     qty:'3',
//     type:'full'
//   },
  
 

// ];




const Cart: React.FC = () => {
  const[cart, setCart]=useState<any[]>([]) 
  const[total, setTotal]=useState<any[]>([]) 
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

  async function remove(){
    
     db.collection('cart').doc("basmathi rice").delete(); 
     db.collection('cart').doc("garlic rice").delete(); 
     db.collection('cart').doc("threelayered rice").delete(); 
      
     db.collection('cart').doc("chicken kottu").delete(); 
     db.collection('cart').doc("vegekottu").delete(); 
     db.collection('cart').doc("cheese kottu").delete();
      
     db.collection('cart').doc("elawaluroti").delete();
     db.collection('cart').doc("malupan").delete();
     db.collection('cart').doc("pattis").delete();
       db.collection('cart').doc("rolls").delete();
       db.collection('cart').doc("samosa").delete();
      
       db.collection('cart').doc("caremal").delete();
       db.collection('cart').doc("chocolate cake").delete();      
    
     
   }
  
  return (
    
    <IonPage>
        
      <IonHeader >
        <IonToolbar>
        <IonButtons slot="start">
              <IonBackButton defaultHref="/menu"/>
            </IonButtons>
          <IonTitle >Cart</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>

         {/* <IonToolbar>  */}
           <IonTabBar >
           
                <IonTabButton  tab="currentorder" href="/cart">
                  <IonLabel >CURRENT ORDER</IonLabel>
                </IonTabButton>       
             
                <IonTabButton  tab="orderHistory" href="/orderHistory">
                  <IonLabel>ORDER HISTORY</IonLabel>
                </IonTabButton>
             
           </IonTabBar>  
           
         {/* </IonToolbar> */}
      </IonHeader>
    
      <IonContent className="scroll-content ion-padding" >
      {cart.length > 0 ?(
         <IonRow>
         <IonCol >
         {cart.map((cart) => (
        
        
       
         <IonCard  key={cart.id} >
           
        <IonList mode="md">                 
           <IonItem>
              <IonThumbnail slot="start">
                  <IonImg src={cart.url}/>                 
              </IonThumbnail>
              <IonLabel className="totalPrice">{cart.title}</IonLabel>                      
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
                <IonButton slot="end" color="success"> 
                  <IonIcon icon={addCircleSharp} />
                    Order
                </IonButton>
            </IonItem>
        </IonCard>


        )
        )}

           
       </IonCol>
     </IonRow>
      ): (<b><p style={{textAlign:'center',fontWeight:500}}>{errMsg}</p></b>)}
     
   
      </IonContent> 
      <IonCard className="total" >    
            <IonCardContent>         
                
               <IonItem color="lightcyan" lines="none">
                 <IonButton  slot="end" color="danger" routerLink="/order">
                   Checkout
                   <IonIcon icon={arrowForward} />
                 </IonButton>
               </IonItem>
            </IonCardContent>
        </IonCard> 

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
