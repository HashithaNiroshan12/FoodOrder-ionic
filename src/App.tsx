import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/*Pages*/

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Forget from './pages/Forget';
import Menurice from './pages/Menurice';
import Contact from './pages/Contact';
import Menukottu from './pages/Menukottu';
import Menushorteats from './pages/Menushorteats';
import Menudesserts from './pages/Menudesserts';
import Descrice from './pages/Descrice';

import Order from './pages/Order';
import About from './pages/About';
import SideMenu from './components/SideMenu';

import { getCurrentUser } from './firebaseConfig'
import { useDispatch } from 'react-redux';
import { setUserstate } from './redux/action';
import Notification from './pages/Notification';
import OrderHistory from './pages/OrderHistory';
import Profile from './pages/Profile';
import DescGarlic from './pages/DescGarlic';
import DescLayered from './pages/DescLayered';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Confirm from './pages/Confirm';
import DescChoclate from './pages/DescChoclate';
import DescCaremal from './pages/DescCaremal';
import DescPudin from './pages/DescPudin';
import DescChickenkottu from './pages/DescChickenkottu';
import DescVegekottu from './pages/DescVegekottu';
import DescCheesekottu from './pages/DescCheesekottu';
import DescElawaluroti from './pages/DescElawaluroti';
import DescMalubanis from './pages/DescMalubanis';
import DescPattis from './pages/DescPattis';
import DescSamosa from './pages/DescSamosa';
import DescRolls from './pages/DescRolls';




const RoutingSystem: React.FC = () => {
  return (
    
    <IonReactRouter>
       <SideMenu />
      {/* <IonSplitPane when="(min-width:768px)" contentId="main"> */}
       
        <IonRouterOutlet id="main">
       
            <Route path="/menu" component={Menu} exact />
            <Route path="/home" component={Home} exact={true} /> 

        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        
        <Route path="/forgetpassword" component={Forget} exact />    
        <Route path="/contact" component={Contact} exact />
        <Route path="/rice" component={Menurice} />
        <Route path="/kottu" component={Menukottu}  />
        <Route path="/shorteats" component={Menushorteats}  />
         <Route path="/desserts" component={Menudesserts}  /> 

        <Route path="/brownbasmthi" component={Descrice} exact />
        <Route path="/garlic" component={DescGarlic} exact />
        <Route path="/threelayered" component={DescLayered} exact />

        <Route path="/choclateCake" component={DescChoclate} exact />
        <Route path="/caremal" component={DescCaremal} exact />
        <Route path="/pudin" component={DescPudin} exact />

        <Route path="/chickenkottu" component={DescChickenkottu} exact />
        <Route path="/vegekottu" component={DescVegekottu} exact />
        <Route path="/cheesekottu" component={DescCheesekottu} exact />

        <Route path="/elawaluroti" component={DescElawaluroti} exact />
        <Route path="/malubanis" component={DescMalubanis} exact />
        <Route path="/pattis" component={DescPattis} exact />
        <Route path="/samosa" component={DescSamosa} exact />
        <Route path="/rolls" component={DescRolls} exact />

          <Route path="/cart" component={Cart} exact />
          <Route path="/orderHistory" component={OrderHistory} />

        
        <Route path="/order" component={Order} exact /> 
        <Route path="/payment" component={Payment} exact /> 
        <Route path="/confirm" component={Confirm} exact /> 
        
        <Route path="/about" component={About} exact /> 
        
        <Route path="/notification" component={Notification} /> 
        <Route path="/profile" component={Profile} />  
       
          </IonRouterOutlet>

      {/* </IonSplitPane> */}
     
    </IonReactRouter>
  )

}

const App: React.FC = () => {

  const [busy, setBusy] = useState(true)
  const dispatch = useDispatch()

  useEffect(() =>{
    getCurrentUser().then((user:any) =>  {
      if(user){
        //im logging
        dispatch(setUserstate(user.email))
        window.history.replaceState({}, '', './menu')
      }else{
        window.history.replaceState({}, '','./home', )
      }
      
     setBusy(false)
     })
  }, [dispatch]) ;

  return(
  <IonApp>{busy ? <IonSpinner /> : <RoutingSystem />} </IonApp>
    
 
)
    }

export default App;
