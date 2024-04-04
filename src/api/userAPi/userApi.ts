// api.ts  

import { User } from '@/store/types/UserType';
import UserInstance from '@/until/axiosUntil';

const instance = UserInstance
class UserServce {
  async cheakToken(Token:String) {
    try {
      console.log(Token)
      return await instance.post(`/api/user/test`,Token)
    } catch (error) {
      throw error; 
    }
  }
  async loginUser(user:User) {
    try {
      console.log(user)
      return (await instance.post(`/api/user/login`,user)).data
    } catch (error) {
      throw error; 
    }
     
  }

  async getUser() {  
    try {  
      return await instance.get(`/api/User`)
    } catch (error) {  
      throw error;  
    }  
  }
  async createUser(user: User) {  
    try {  
      return await instance.post('/api/addUser', user)
    } catch (error) {  
      throw error;  
    }  
  } 

}  
  

export default new UserServce() 