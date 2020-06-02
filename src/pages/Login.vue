<template>
  <div>
    <h2>Login</h2>
    <form action @submit.prevent>
      <input type="password" id="pwdHidden" autocomplete="new-password" style="display:none" />
      <InputTexts v-model="loginData.email" id="userEmail" name="email">E-mail</InputTexts>
      <br />
      <InputTexts v-model="loginData.password" type="password" id="userPwd" name="pwd">Password</InputTexts>
      <br />
      <InputTexts v-model="loginData.name" id="userName" name="name">Name</InputTexts>
      <br />
      <button>login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import InputTexts from "../components/input/InputTexts.vue";
type loginInfo = {
  email: string;
  password: string;
  name: string;
};
@Component({
  components: {
    InputTexts
  }
})
export default class Login extends Vue {
  // public email = "";
  // public password = "";
  // public name = "";
  public loginData: loginInfo = {
    email: "",
    password: "",
    name: ""
  };
}
</script>

<style scoped></style>
