import {createStore} from 'vuex'
import userModel from './model/userModel'
 const store=createStore({
    state(){
         return{

         }
    },
    modules:{
        userModel:userModel,
    }

})

export default store