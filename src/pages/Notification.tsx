import {  IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonMenuToggle, IonPage, IonRouterOutlet, IonRow, IonTitle, IonToolbar, } from '@ionic/react';
import { Spellcheck } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';

import '../theme/noti.css';
// db.collection("menu").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   })
// })

// function StarIcon(props:any) {
//   const { fill = 'none' } = props;
//   return (
//     <svg className="w-6 h-6" fill={fill} stroke="currentColor" viewBox="0 0 24 24"
// 	xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
// 	stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
//   );
// }

// function RatingIcon(props:any) {
//   const {
//     index,
//     rating,
//     hoverRating,
//     onMouseEnter,
//     onMouseLeave,
//     onSaveRating,
//   } = props;
//   const fill = React.useMemo(() => {
//     if (hoverRating >= index) {
//       return 'yellow';
//     } else if (!hoverRating && rating >= index) {
//       return 'yellow';
//     }
//     return 'none';
//   }, [rating, hoverRating, index]);
//   return (
//       <div 
//         className ="cursor-pointer"
//         onMouseEnter={() => onMouseEnter(index)} 
//         onMouseLeave={() => onMouseLeave()} 
//         onClick={() => onSaveRating(index)}>
//         <StarIcon fill={fill} />
//       </div>
//   )
// }

const Notification: React.FC = () => {
  // const [rating, setRating] = React.useState(0);
  // const [hoverRating, setHoverRating] = React.useState(0);
  // const onMouseEnter = (index:any) => {
  //   setHoverRating(index);
  // };
  // const onMouseLeave = () => {
  //   setHoverRating(0);
  // };
  // const onSaveRating = (index:any) => {
  //   setRating(index);
  // };
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar color="medium">
          <IonButtons slot="start">
          <IonBackButton defaultHref="/menu"></IonBackButton>
          </IonButtons>
          
          <IonTitle><b>NOTIFICATIONS</b></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="scroll-content" > 
        <IonCard color="medium">
        {/* <IonCardSubtitle >New Choice</IonCardSubtitle> */}
        <h4 style={{fontWeight:800, fontSize:29, color:'darkred'}}>New Choice</h4>
        <br />
        <IonItem>
        <IonLabel><IonImg src="../assets/images/nasigoreng.jpg" ></IonImg></IonLabel>
        </IonItem>
          
          {/* <img src="../assets/images/nasigoreng.jpg" /> */}
          <IonCardHeader>
            
            <IonCardTitle color="warning"><b>Nasi goreng Available soon</b></IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonLabel color="primary">Add On:</IonLabel> garlic, chili, and terasi, Sliced cucumbers
          </IonCardContent>
        </IonCard>
      
        {/* <div className="box flex">
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <RatingIcon 
            index={index} 
            rating={rating} 
            hoverRating={hoverRating} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave} 
            onSaveRating={onSaveRating} />
        )
      })}
    </div> */}
      </IonContent>
    </IonPage>
  );
};


export default Notification;
