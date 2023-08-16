"use client"

import React from 'react'

function gallery() {
  return (
    <div className='gallery'>
        <section class="section gallery" id="gallery" aria-label="photo gallery">
        <div class="container">

          <div class="title-wrapper">

            <div>
              <h2 class="h2 section-title">Latest Work Gallery</h2>

              <p class="section-text">
              Immerse yourself in the world of cutting-edge hairstyles and impeccable grooming with our barber shop gallery. Discover our exceptional work and let it inspire your own style transformation
              </p>
            </div>

            <a href="#" class="btn has-before">
              <span class="span">Explore More Gallery</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a>

          </div>

          <ul class="grid-list">

            <li>
              <div class="gallery-card">

                <figure class="card-banner img-holder" >
                  <img src="/images/gallery-1.jpg" width="422" height="550" loading="lazy" alt="Hair Cutting"
                    class="img-cover"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Hair Cutting</h3>

                  <p class="card-text">Barbers & Salon Services</p>

                  <a href="#" class="card-btn" aria-label="Read more">
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="gallery-card">

                <figure class="card-banner img-holder" >
                  <img src="/images/gallery-2.jpg" width="422" height="550" loading="lazy" alt="Hair Cutting"
                    class="img-cover"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Hair Cutting</h3>

                  <p class="card-text">Barbers & Salon Services</p>

                  <a href="#" class="card-btn" aria-label="Read more">
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="gallery-card">

                <figure class="card-banner img-holder">
                  <img src="/images/gallery-3.jpg" width="422" height="550" loading="lazy" alt="Hair Cutting"
                    class="img-cover"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Hair Cutting</h3>

                  <p class="card-text">Barbers & Salon Services</p>

                  <a href="#" class="card-btn" aria-label="Read more">
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="gallery-card">

                <figure class="card-banner img-holder">
                  <img src="/images/gallery-4.jpg" width="422" height="550" loading="lazy" alt="Hair Cutting"
                    class="img-cover"/>
                </figure>

                <div class="card-content">

                  <h3 class="h3 card-title">Hair Cutting</h3>

                  <p class="card-text">Barbers & Salon Services</p>

                  <a href="#" class="card-btn" aria-label="Read more">
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  )
}

export default gallery
