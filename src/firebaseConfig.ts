


import * as firebase from 'firebase'

import { toast } from './toast'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const config = {
    apiKey: "AIzaSyC9f8lfHdcYlKwCCCNVgmw0YLyaimfIHcA",
    authDomain: "food-order-cd7e3.firebaseapp.com",
    databaseURL: "https://food-order-cd7e3.firebaseio.com",
    projectId: "food-order-cd7e3",
    storageBucket: "food-order-cd7e3.appspot.com",
    messagingSenderId: "281308193939",
    appId: "1:281308193939:web:657cb638fdf6d2227fd966",
    measurementId: "G-LTJDP3EMLX"
  };


const app =firebase.initializeApp(config);

const db = firebase.firestore();


export function getCurrentUser(){

    return new Promise((resolve, reject) => {
        const unsubcribe = firebase.auth().onAuthStateChanged(function(userdetails) {
            if(userdetails){
                resolve(userdetails)
               
            }else{
                resolve(null)
            }
            unsubcribe()
        })
    })
}

export function logoutUser(){
    return firebase.auth().signOut()
}

export async function loginUser(username:string, password:string){
    const email = `${username}`

    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
        // console.log(res)
        return res
    }catch(error){ 
        toast(error.message,4000)
        return false

    } 
}


export async function  registerUser(fname:string , lname:string , tele:string ,address:string, username:string , password:string){
    const email = `${username}`
  
   
    try{
       const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
       console.log(res)
       return true

    }catch(error){
        //console.log(error)
        toast(error.message, 4000)
        return false

    }

   
}

export async function  forgetUser(username:string){
    
    const email = `${username}`
    try{
       const res = await firebase.auth().sendPasswordResetEmail(email)
       console.log(res)
       return true
    }catch(error){
        toast(error.message, 4000)
        return false
    }
    
}



export { db };
export const auth = app.auth();
export const storage = app.storage();
// export const firestore =app.firestore();