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
              <form style="padding: 5%" action="./landing.html" method="GET">
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
                <div class="col-md-12" style="margin: auto; align-self: center">
                  <button
                    type="submit"
                    class="btn mt-3;"
                    style="
                      background-color: #007a4d;
                      color: white;
                     x
                    "
                    @click="goToHome"
                  >
                    Submit
                  </button>
                  <!-- sign in button -->
                  <button
                    type="submit"
                    class="btn mt-3;"
                    style="
                      background-color: #007a4d;
                      color: white;
                     x
                    "
                    @click="goToHome"
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
  },
};
</script>
