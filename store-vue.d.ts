import { ComponentCustomProperties } from 'vue';  
import { Store } from 'vuex';  
  
declare module 'vue' {  
  export interface ComponentCustomProperties {  
    $store: Store<any>;  
  }  
}