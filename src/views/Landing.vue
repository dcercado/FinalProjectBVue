<template>
  <div class="landing">
    <nav class="navbar navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="landing.html"
          ><img
            src="assets/img/MillerLogoFromMarketing.png"
            alt="Diamonds are formed under pressure"
            width="100px"
        /></a>

        <div class="nav nav-fill sub_Nav">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
                >Profile</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
                >Join Now</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="schedule.html">Schedule</a>
            </li>
          </ul>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          style="border: none"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Miller Sections
            </h5>
            <button
              type="button"
              class="btn-close reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <div id="weather"></div>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="meetYourPresenters.html"
                  >Meet Your Presenters</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="preMeetingInterviews.html"
                  >Pre-Meeting Interviews</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="mailto:itsupport@mecojax.com?subject=Requesting%20Leadership%20Meeting%20Assistance"
                  class="nav-link"
                  >IT Support</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <img
        :src="diamond"
        class="shadow"
        alt="Miller diamond"
        style="
          width: 100%;
          border-radius: 10px;
          margin-top: 5%;
          margin-bottom: 5%;
        "
      />
    </div>

    <div class="container-fluid welcomeMessage">
      <div class="card-header">
        <h1>Welcome to Miller's Leadership Meeting</h1>
      </div>

      <div class="card-body">
        <div class="row">
          <div class="col-4">
            <img src="assets/img/henry-brown-FB.jpg" alt="" width="100%" />
          </div>
          <div
            class="col-7"
            style="text-align: left; padding-right: 5%; padding-left: 5%"
          >
            <p>
              We are so excited to welcome you to this year’s Leadership Meeting
              which will be fully virtual for the first time ever! This
              interactive, day long event will challenge you to adopt a “Growth
              Mindset” while creating excitement for the future. Just as
              diamonds are formed under pressure, our company and our employees
              have shown how resilient we can be, especially in a year marked by
              unprecedented pressure. Makes our Miller diamond seem even cooler
              now, doesn’t it?
            </p>

            <button
              type="submit"
              class="btn mt-3"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
              style="background-color: #007a4d; color: white"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid history">
      <div class="card-header">
        <h1>Miller Electric Company History</h1>
      </div>
      <div class="card-body">
        <p>
          Founded in 1928, Miller Electric Company has grown from a local
          electrical contractor to a national company with over 2,000 employees.
          From our headquarters in Jacksonville, FL and our network of 16 branch
          offices, we provide comprehensive electrical and technology solutions
          to local and national clients in a diversified range of industries.
          Our company has expanded its services beyond traditional electrical
          contracting to include systems integration, connected communities,
          building automation, business continuity, and energy & sustainability
          services. Miller Electric Company is a family business that remains
          committed to its stewardship culture and reinvesting in the long-term
          health and sustainability of its communities.
        </p>
      </div>
    </div>

    <div class="footer-clean">
      <footer>
        <div class="container">
          <footer class="py-3 my-4 nav-pills">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <router-link class="nav-link" to="/landing"
                  >Landing</router-link
                >
              </li>
              <li class="nav-item">
                <a href="profile.html" class="nav-link">Profile</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  >Join Now</a
                >
              </li>

              <li class="nav-item">
                <a href="schedule.html" class="nav-link">Schedule</a>
              </li>
              <li class="nav-item">
                <a
                  href="mailto:itsupport@mecojax.com?subject=Requesting%20Leadership%20Meeting%20Assistance"
                  class="nav-link"
                  >IT Support</a
                >
              </li>
            </ul>
            <p class="text-center text-muted">
              © 2021 Miller Electric Company, Inc
            </p>
          </footer>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import diamond from "/src/assets/img/Miller Logo Diamond.png";

export default {
  data() {
    return {
      diamond: diamond,
    };
  },
};
</script>
