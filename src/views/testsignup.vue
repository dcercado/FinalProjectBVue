<template>
  <div class="vue-template">
    <form @submit.prevent="userRegistration">
      <h3>Sign Up</h3>
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="useremail"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="userpassword"
        />
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="userpassword"
        />
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>
      <p class="forgot-password text-right">
        <a :href="'/'">Already Signed Up</a>
        <!-- <router-link :to="{ name: 'login' }">sign in?</router-link> -->
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return;
  },
};
</script>
