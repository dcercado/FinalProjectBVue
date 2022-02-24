<template>
  <div class="landing">
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
                test new test Schedule</a
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
          <div class="col-12 col-lg-6 mb-5 mt-5">
            <img :src="hbrown" class="col-12 row; shadow" width="100%" />
          </div>
          <div
            class="col-lg-6 mb-5 mt-5"
            style="
              text-align: left;
              padding-right: 0%;
              padding-left: 5%;
              font-size: 1.25em;
            "
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
            <div
              class="col-lg-6"
              style="margin: auto; padding-right: 0%; text-align: center"
            >
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
    </div>
    <div class="container-fluid history">
      <div class="card-header">
        <h1>Miller Electric Company History</h1>
      </div>
      <div class="card-body mt-5" style="font-size: 1.25em; text-align: left">
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
    <!-- BODY STOP -->
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
      <!-- FOOTER STOP -->
    </div>
    <!-- MODAL 2/3 START -->
    <div
      class="modal fade"
      id="videoModal"
      tabindex="-1"
      aria-labelledby="videoModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="videoModal">
              Miller Leadership Meeting Livestream
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <iframe
              id="millerVideo"
              width="100%"
              height="360"
              :src="urlSrc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="modal-footer">
              <button
                type="button"
                class="btn nav-link"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MODAL 2/3 STOP -->
  </div>
</template>

<script>
//MODAL 3/3 START ( I BELIEVE IT MIGHT NEED A METHOD TO RUN/ CRASHING AT THIS TIME)

// src = "jquery-3.5.1.min.js";
// $(document).ready(function () {
//   var url = $("#millerVideo").attr("src");
//   $("#videoModal").on("hide.bs.modal", function () {
//     $("#millerVideo").attr("src", "");
//   });
//   $("#videoModal").on("show.bs.modal", function () {
//     $("#millerVideo").attr("src", url);
//   });
// });

import diamond from "/src/assets/img/Miller Logo Diamond.png";
import hbrown from "/src/assets/img/henry-brown-FB.jpg";
import millerLogo from "/src/assets/img/MillerLogoFromMarketing.png";

export default {
  data() {
    return {
      diamond: diamond,
      millerLogo: millerLogo,
      hbrown: hbrown,
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
