
const defaultState = {
    user:{},
    basketNumbers : 0  
}

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
               

        }
        return state

  }