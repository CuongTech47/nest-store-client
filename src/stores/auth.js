import { defineStore } from "pinia";
import { computed, ref } from "vue";
import  http  from '../services/http'
export const useAuthStore = defineStore('auth',()=>{
    const token = ref(localStorage.getItem('token'))
    const user = ref(JSON.parse(localStorage.getItem('user')))


    function setToken(tokenValue){
        localStorage.setItem('token',tokenValue)
        token.value = tokenValue

    }
    function setUser(userValue){
        localStorage.setItem('user',JSON.stringify(userValue))
        user.value = userValue

    }

    async function checkToken(){
        try {
            const tokenAuth = 'Bearer' + " " +token.value
            const {data} = await http.get('auth/me',{
                headers : {
                    Authorization : tokenAuth
                }
            })
            console.log(data)
            return data
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const isAuthenticated = computed(()=>{
        return token.value  && user.value 
    })

    function getName(){
        if(user.value){
            return user.value.name
        }
       return ''
    }
    function clear(){
        localStorage.removeItem('token');
        localStorage.removeItem('user')

        token.value= ''
        user.value = ''
    }

   

    return {
        token,
        user,
        setToken,
        setUser,
        checkToken,
        isAuthenticated,
        getName,
        clear
    }
})