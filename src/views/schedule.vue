<template>
  <div class="schedule">
    <!-- NAVBAR START -->
    <nav class="navbar navbar-light bg-light sticky-top">
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
              <a class="nav-link" aria-current="page" href="schedule"
                >Schedule</a
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
        <!-- HAMBURGER MENU STOP -->
      </div>
    </nav>
    <!-- NAVBAR STOP -->
    <div class="container">
      <div class="row" style="margin-top: 5%; margin-bottom: 5%">
        <div class="col-12 margin:auto" style="text-align: center">
          <img
            :src="agenda"
            alt="meeting agenda"
            style="width: 70%; border-radius: 10px"
          />
        </div>
      </div>
      <div class="container">
        <div class="card-header">
          <h3>8:30am - 12:00pm Morning Sessions</h3>
        </div>

        <div class="card-body">
          <p></p>
          <h5>Opening Remarks and 2020 Financial Recap</h5>
          <br />
          Henry Brown, CEO

          <br />

          Kyle Hensley, CFO

          <p>
            <strong>MCs:</strong> Patty Keenan, Chief Learning Officer and Alex
            Willis, CEO of Leadership Surge
          </p>

          <h5>Business Session 1</h5>
          Moderator: David Stallings, Chief Technology Officer Panelists: James
          MacDonald, Donnie Smith, Eddie O'Halloran, Andy Bowman, Farshid
          Pourgolafshan Topic: Future Business Opportunities Overview: Miller
          Electric's future is bright. Join our executives and leaders to learn
          more about how we will power the possibilities of Electrified Vehicle
          Charging Stations, Connected Cities, Integrated Systems, and Building
          Technologies. Our Values of Stewardship and Community Susan Walden,
          Executive VP Daniel Brown, Chief Operations Officer Speaker from
          United Way, Jackie Hadley Business Session 2 Speaker: Alex Willis,
          CEO, Leadership Surge Topic: Diversity, Equity, and Inclusion
          Overview: Miller's Executive team has been working with Alex Willis
          for several months on this important business topic. We will learn why
          DE&I is critical to our future business success as well as what we are
          already doing and what we will do in the future. Business Session 3
          Moderator: Ed Witt, Jr., Chief Construction Officer Panelists: Kevin
          Hebert, Alan Creel, Brian Seay, Gabby Cadieux Topic: Case Study/Panel
          on Major Projects: Pushing the Limits of Construction Innovation
          Overview: We will learn from the experts how Miller has been pushing
          the limits of construction innovation on big jobs in the data center
          and healthcare space, and how our VDC/BIM teams have been helping us
          lead the way. You will come away with new ideas to apply to your own
          jobs as well as a better understanding of what is driving our success
          in these critical markets.
        </div>
      </div>
      <div class="footer-clean">
        <!-- BODY STOP -->
        <!-- FOOTER START -->
        <div class="footer-clean">
          <footer>
            <div class="container">
              <footer class="py-3 my-4 nav-pills">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="landing"
                      >Home</a
                    >
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
                  src="https://www.youtube.com/embed/3wlHvLlPfLs"
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
    </div>
  </div>
</template>

<script>
import millerLogo from "/src/assets/img/MillerLogoFromMarketing.png";
import agenda from "/src/assets/img/agenda with glasses.jpg";

export default {
  data() {
    return {
      millerLogo: millerLogo,
      agenda: agenda,
    };
  },
};
</script>
