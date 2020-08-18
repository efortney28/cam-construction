<template>
  <Layout>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg title-tagline">
          <h1 class="title">
            CAM Custom Contracting
          </h1>
          <h2 id="tagline">
            For all your home improvement needs
          </h2>
        </div>
        <div class="col-lg about text-center">
          <h2 id="about" class="text-center">
            About Us
          </h2>
          <p>We have 30 years of experience building and remodeling homes. We can do custom kitchens, bathrooms, tile work, concrete work, wood work, anything that you need done, we can do it.  </p>
          <b-button pill size="lg" class="CTA" href="/contact">Get a free quote</b-button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'CAM Contracting | Home'
  }
}
</script>

<style>
.title-tagline {
  /*max-width: 50%; */
  font-family: "Rubik", sans-serif;
  padding: 12rem 0 0 8rem;
  color: #010180;
}
.about {
  /*max-width: 50%;*/
  padding: 8rem;
  color: white;
}
#about {
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  padding: 1.5rem 0 1rem 0;
  font-size: 1.5rem;
}
p {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
}
.title {
  font-size: 2rem;
  font-weight: 400;
}
#tagline {
  font-size: 1.4rem;
  font-weight: 300;
}
.CTA {
  background: #FCD146 !important;
  border: none;
  font-family: "Rubik", sans-serif;
  color: #010180;
  margin: 1rem 0 1rem 0;
  transition-duration: 0.3s;
}
.btn:hover {
  background: none;
  border-color: white;
  border-width: 1px;

}

@media screen and (max-width: 700px) {
  .title-tagline {
    padding: 5rem 0 0 5rem;
  }
  .about {
    padding: 2rem;
    color: #010180;
  }
  li {
    color: #010180;
  }
}
</style>
