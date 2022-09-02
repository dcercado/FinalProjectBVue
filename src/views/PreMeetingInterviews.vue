
<template>
  <div class="premeeting">
    <!-- NAVBAR START -->
    <nav class="navbar navbar-light bg-light sticky-top border border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="/landing">
          <img
            :src="millerLogo"
            class="navbar-brand"
            alt="Miller's logo"
            style="width: 100px"
        /></a>

        <div class="nav nav-fill sub_Nav">
          <ul class="nav nav-pills nav-fill">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="landing">Home</a>
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
              <a class="nav-link" aria-current="page" href="schedule">
              Schedule</a
              >
            </li>
              
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="login">
              Logout</a
              >
            </li>
          </ul>
        </div>

        <!-- HAMBURGER MENU START -->
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
          <div class="card-header" style="width: 100%">
            <div class="row">
              <div class="col-8">
                <h5
                  class="offcanvas-title"
                  style="text-align: right"
                  id="offcanvasNavbarLabel"
                >
                  Miller Sections
                </h5>
              </div>
              <div class="col-4">
                <button
                  type="button"
                  class="btn-close reset"
                  data-bs-dismiss="offcanvas"
                  style="float: right"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <div id="weather"></div>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="profile"
                  >Profile</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="meetYourPresenters"
                  >Meet Your Presenters</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="preMeetingInterviews"
                  >Pre-Meeting Interviews</a
                >
              </li>
              <li class="nav-item">
                <!-- template tag it like a photo -->
                <a
                  href="mailto:itsupport@mecojax.com?subject=Requesting Leadership Meeting Assistance"
                  class="nav-link"
                  >IT Support</a
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- HAMBURGER MENU STOP -->
      </div>
    </nav>
    <!-- NAVBAR STOP -->
    <!-- BODY START --> 
    
    <div style="background: url(&quot;assets/img/shattered_@2X.png&quot;);">
        <div class="container" style="text-align: center; padding-top: 5%;">
            <h1 style="text-align: center;font-weight: bold;margin: 5%;">Pre-Meeting Interviews</h1>
        </div>

        <div class="container">
            <div class="row" style="margin-top: 5%;margin-bottom: 20%;">
                <div class="col-md-6" style="padding: 2%;">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/q-1d6hromWM"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6" style="padding: 2%;">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/S-jkoaJTt5k"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6" style="padding: 2%;">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PtaENVUn-Uk"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6" style="padding: 2%;">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/rfQmLPKxXl4"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6" style="padding: 2%;">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/K_J3jTHvRdU"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6" style="padding: 2%;">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tZ50xfjjdDc"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- FOOTER START -->
    <div class="footer-clean">
      <footer>
        <div class="container">
          <footer class="py-3 my-4 nav-pills">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="landing">Home</a>
              </li>
              <!-- MODAL 1/3 START -->
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  >Join Now</a
                >
              </li>
              <!-- MODAL 1/3 STOP -->
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="schedule"
                  >Schedule</a
                >
              </li>
              <li class="nav-item">
                <a :href="'mailto:' + email" class="nav-link">IT Support</a>
              </li>
            </ul>
            <p class="text-center text-muted">
              © 2021 Miller Electric Company, Inc
            </p>
          </footer>
        </div>
      </footer>
    </div>
      <!-- FOOTER STOP -->
    <!-- BODY STOP -->
  </div>
</template>
<script>
import millerLogo from "/src/assets/img/MillerLogoFromMarketing.png";

export default {
  data() {
    return {
      millerLogo: millerLogo,
      email:
        "itsupport@mecojax.com?subject=Requesting%20Leadership%20Meeting%20Assistance",
      urlSrc: "https://www.youtube.com/embed/3wlHvLlPfLs",
    };
  },
  mounted() {
    const videoModal = document.getElementById("videoModal");
    videoModal.addEventListener("shown.bs.modal", () => {
      this.urlSrc = "https://www.youtube.com/embed/3wlHvLlPfLs";
    });
    videoModal.addEventListener("hidden.bs.modal", () => {
      this.urlSrc = "";
    });
  },
};
</script>