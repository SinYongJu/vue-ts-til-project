import store from "@/store";
import { Module, VuexModule, Mutation, Action, MutationAction } from "vuex-module-decorators";
import { LoginSubmit, LoginrResult } from "./user.model";
import { User } from '@/models/User';
@Module({ dynamic: true, store, name: "login"})
export default class UserStore extends VuexModule {
    user : User | null = null
    isAuth : boolean = false

    get userId (){
        return this.user && this.user.id
    }
    get userName (){
        return this.user && this.user.name
    }
    get userEmail (){
        return this.user && this.user.email
    }

    @Mutation
    async login (loginInfo : LoginSubmit) {
        console.log(loginInfo)
        // await axios blah => LoginrResult
        this.isAuth = true
    }

    @Mutation
    async logout () {
        // await axios blah
        this.isAuth = false
    }
}