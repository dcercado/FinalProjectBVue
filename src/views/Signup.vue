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
              <form @submit.prevent = "registerUser" style="padding: 5%" action="http://localhost:8080/api/users/register" method="POST">
                <div class="mb-3">
                  <p class="text-center h1 fw-bold" style="padding-bottom: 3%">
                    Sign up
                  </p>
                
                  <label for="exampleFormControlInput1" class="form-label"
                    >Name</label
                  >
                  <input
                    type="name"
                    class="form-control" 
                 
                    id="exampleFormControlInput1"
                    aria-describedby="name"
                    placeholder="Full Name"
                  />
                  
                  
                  <label for="exampleFormControlInput1" class="form-label" style="padding-top: 2%"
                    >Email address</label
                  >
                  <input
                    type="email"
            
                    class="form-control"
                    id="exampleFormControlInput1"
                    aria-describedby="emailHelp"
                    placeholder="Email@mecojax.com"
                  />
                  <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                </div>-->
                
                  <label for="exampleInputPassword1" class="form-label" style="padding-top: 2%"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Confirm Password</label
                  >
                  <input
                    type="Confirm password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                  </div>
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
                    Register
                  </button>
                </div>
                <p class="text-center text-muted mt-5 mb-0">
                  Have already an account?
                  <a href="/" class="fw-bold text-body"><u>Login here</u></a>
                </p>
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
      username: "",
      password: "",
      confirm_password: "",
      name: "",
      email: ""


    };
  },
  methods: {
    goToHome() {
      this.$router.push({ path: "/landing" });
    },
    goToSignup() {
      this.$router.push({ path: "/signup" });
    },
    ...mapActions(['register']),
    registerUser(){
  
        let user = {
          username: this.username,
          password: this.password,
          confirm_password: this.confirm_password,
          email: this.email,
          name: this.name
        };
        this.register(user).then(res =>{
          if (res.data.success) {
            this.$router.push("login");
          }
        });
      
    }
  },
};
</script>
