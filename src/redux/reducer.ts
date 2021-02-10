
const defaultState = {
    user:{},
    basketNumbers : 0  
}

// const initialState = {
//     basketNumbers : 0
// }


// export default (state:any, action:any) => {
//     switch(action, type:any){
//         default:
//             return state;
//     }
// }

export default function reducer(
    state = defaultState ,
    
    { type, payload} : {type:string ,payload:any}):
    any {
        //work with state
        switch(type){
            case 'SET_USER_STATE':
                return{
                    ...state,
                    user: {
                         username:payload,
                         //.split('@')[0]
                       
                    },
                    
                }
            case 'ADD_PRODUCT_BASKET':  
                 return{
                     ...state,
                     basketNumbers: {
                         
                          basketnumbers:payload ,
                     }

                 }  
               





                // case 'SET_USER_DETAILS':
                //     return{
                //         ...state,
                //         userdetails: {
                //              fname:payload,
                //             //  .split('@')[0],
                           
                //         },
                        
                //     }

        }
        return state

  }