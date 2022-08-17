<template>
  <div class="login">
    <div class="container">
      <div class="row" style="height: 100vh">
        <div class="col-md-5" style="margin: auto; align-self: center">
          <div class="card shadow">
            <div class="card-body">
              <div class="text-center" style="padding: 3%">
                <img :src="logo" alt="Miller logo" style="width: 50%" />
              </div>
              <form @submit.prevent="loginUser" style="padding: 5%">
                <div class="mb-3">
                  <label for="email" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    aria-describedby="emailHelp"
                    placeholder="name@example.com"
                  />
                  <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                </div>-->
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                  />
                </div>
                <!-- Message Section -->
                <div>
                  <p>{{ loginError }}</p>
                </div>
                <!-- End Message Section -->
                <!-- submit button -->
                <div
                  class="column"
                  style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: auto;
                  "
                >
                  <input
                    type="submit"
                    class="btn mt-3;"
                    value="Submit"
                    style="
                      background-color: #007a4d;
                      color: white;
                      margin:auto;
                     x
                    "
                    >
                  <!-- sign up button -->
                  <button
                    class="btn mt-3;"
                    style="
                      background-color: #007a4d;
                      color: white;
                      margin:auto;
                     x
                    "
                    @click="goToSignup"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "/src/assets/img/MillerLogoFromMarketing.png";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      logo: logo,
      email: "",
      password: "",
      loginError: ""
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ path: "/landing" });
    },
    goToSignup() {
      this.$router.push({ path: "/signup" });
    },
   
    ...mapActions(['login']),
    loginUser(){
      let user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
      .then(res =>{
        if(res.data.success){
          this.$router.push('/landing');
        } else {
          this.loginError = res.data.msg
        }
        console.log("Response: ", res.data)
      }).catch(err => {
        console.log(err);
      });
    }
  },
};
</script>
