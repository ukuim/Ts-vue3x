// store/modules/user.ts  
import { Module } from 'vuex'
import UserServce from '@/api/userAPi/userApi';
import { User, UserType } from '../types/UserType';
const userModel: Module<UserType, any> = {
    namespaced: true,
    /* state: (): UserType => ({
         user: {
             username: '',
             password: ''
         }
     }),
    */
    state: (): UserType => ({
        user: {
            username: '',
            password: ''
        },
        Token: {
            token:''
        }
    }),
    mutations: {
        creatUser(state) {
            UserServce.createUser(state.user).then((res: any) => {
                console.log(res)
            })
        },
        loginUser(state){
            UserServce.loginUser(state.user).then((res: any) => {
                console.log(res)
            })
        },
        getUser() {
            UserServce.getUser().then((res: any) => {
                console.log(res)
            })
        },
        cheakToken(state){
            UserServce.cheakToken(state.Token.token).then((res: any) => {
                console.log(res)
            })
        }
    },
    actions: {
        creatUser({ commit }, user: User) {
            commit('creatUser', user);
        },
        getUser({ commit }) {
            commit('getUser');
        },
        loginUser({ commit }, user: User) {
            commit('loginUser', user);
        },
        cheakToken({ commit }, Token: String) {
            commit('cheakToken', Token);
        }

    },


};

export default userModel;