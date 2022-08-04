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
              <form @click.prevent="loginUser" style="padding: 5%" action="./landing.html" method="GET">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    aria-describedby="emailHelp"
                    placeholder="name@example.com"
                  />
                  <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                </div>-->
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
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
                  <button
                    type="submit"
                    class="btn mt-3;"
                    style="
                      background-color: #007a4d;
                      color: white;
                      margin:auto;
                     x
                    "
                    @click="goToHome"
                  >
                    Submit
                  </button>
                  <!-- sign up button -->
                  <button
                    type="submit"
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
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ path: "/landing" });
    },
    goToSignup() {
      this.$router.push({ path: "/signup" });
    },
    loginUser(){
      console.log(this.username, this.password);
    },
    ...mapActions(['login']),
    loginUser(){
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
      .then(res =>{
        if(res.data.success){
          this.$router.push('/profile');
        }
      }).catch(err => {
        console.log(err);
      });
    }
  },
};
</script>
