import UserInstance from "@/until/axiosUntil";

const instance = UserInstance
class TokenApi{
    async cheakToken(Token:String) {
        try {
          console.log(Token)
          return await instance.post(`/api/user/test`,Token)
        } catch (error) {
          throw error; 
        }
      }

 }

 export default new TokenApi()