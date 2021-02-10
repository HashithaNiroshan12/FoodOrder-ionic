/* eslint-disable jsx-a11y/alt-text */
import { IonAvatar, IonBadge, IonButton, IonChip, IonCol, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader, IonLoading, IonMenu, IonMenuToggle, IonNote, IonPage, IonRow, IonSplitPane, IonTitle, } from '@ionic/react';

import { logOutOutline, mailOutline, mailSharp, notificationsCircleOutline, notificationsCircleSharp, paperPlaneOutline, paperPlaneSharp, personCircleOutline, personCircleSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import './Menu.css';

import { logoutUser } from '../firebaseConfig'


const SideMenu: React.FC = () => {
   const[busy, setBusy] = useState<boolean>(false)
   const username = useSelector((state:any) => state.user.username)
   const history = useHistory()
    const location = useLocation();
 
   async function logout() {
     setBusy(true)
      await logoutUser()
      setBusy(false)
      history.replace('/home')
    }
  return (
    <IonMenu menuId="mainmenu" contentId="main"  className="md">
      <IonContent>
          <IonLoading message="Logging out.." duration={0} isOpen={busy} />

          <IonList id="inbox-list">
          
             <IonItem lines="inset">
             <IonAvatar>
               <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
             </IonAvatar>
              <IonLabel >
               {username}
              </IonLabel>
             
             </IonItem>
          
      
    
        {/* <IonList id="inbox-list">      
          
          <IonNote>foodOrder.com</IonNote>
          {apppages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem  className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>

                  
                </IonItem>
                <IonButton color="light" onClick={logout}><IonLabel color="danger">Logout</IonLabel><IonIcon slot="end"  icon={logOutOutline} /></IonButton> 
              </IonMenuToggle>
              
            );
           

          })}
         
        </IonList> */}
        <IonMenuToggle autoHide={false}>
        <IonItem lines="inset" button routerLink="/notification">
       
          <IonIcon className="icon" slot="start" icon={notificationsCircleSharp}></IonIcon>
          <IonLabel >Notification</IonLabel>
          <IonBadge color="danger">1</IonBadge>
        </IonItem>

        <IonItem lines="inset" button routerLink="/profile">
          <IonIcon className="icon" slot="start" icon={personCircleSharp}></IonIcon>
          <IonLabel >Profile</IonLabel>
        </IonItem>
      
        <IonButton color="light" onClick={logout}><IonLabel color="danger">Logout</IonLabel><IonIcon slot="end"  icon={logOutOutline} /></IonButton>
        </IonMenuToggle>
        </IonList>
       
       
       
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
