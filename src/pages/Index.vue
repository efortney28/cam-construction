<template>
  <Layout>
    <main class="home-container">
        <section class="col-lg title-tagline">
          <h1 id="title" class="text-center dark-text">
            CAM Custom Contracting
          </h1>
          <h2 id="tagline" class="text-center">
            For all your home improvement needs
          </h2>
        </section>
        <section class="col-lg about text-center">
          <p id="about-text">We have 30 years of experience building and remodeling homes in the greater Houston Area including, but not limited to Liberty, Dayton, Kountze, Cove, Baytown, Lake Jackson, and more. We can do custom kitchens, bathrooms, tile work, concrete work, wood work, anything that you need done, we can do it.  </p>
          <b-button pill size="lg" class="CTA" href="/contact">Get a free quote</b-button>
        </section>
        <!-- <section id="testamonials">
          <h2 class="testamonial text-center">
            Testamonials
          </h2>
          <p class="testamonial-text text-center">
            We had CAM Custom build us a wonderful, new deck and patio. The final product is beautiful! Highly Recommended!
          </p>
          <p class="testamonial-author text-center">
            -
            <span class="author">
            Jane Smith,
            </span> 
            <span class="location">
              Baytown, TX
            </span>
          </p>
        </section> -->
        <section>
          <h2 class="why-us-title text-center">Why Us?</h2>
          <article class="why-us">
            <section class="why-us-item text-center">
              <h3 class="item-title">Experienced</h3>
              <g-image class="item-image" alt="experience image" src="../../static/experience.png" width="300px" />
              <p class="item-description">With 30 years experience, we can do whatever you may want!</p>
            </section>
            <section class="why-us-item text-center">
              <h3 class="item-title">Save Time</h3>
              <g-image class="item-image" alt="save time image" src="../../static/save_time_and_money.png" width="300px" />
              <p class="item-description">Get everything done in one place!</p>
            </section>
            <section class="why-us-item text-center">
              <h3 class="item-title">Get Your Dream Home</h3>
              <g-image class="item-image" src="../../static/dream_home.png" alt="get your dream home image" width="300px" />
              <p class="item-description">We can make your dream home a reality!</p>
            </section>
          </article>
        </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'CAM Custom | Home'
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.title-tagline {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
#title {
  font-size: 1.75rem;
}
#tagline {
  margin-top: 1.5rem;
  font-weight: 400;
  font-size: 1.2rem;
}
#about-text {
  font-size: 0.9rem;
  margin-bottom: 2.5rem;
}
#testamonials {
  margin-top: 2rem;
  padding: 0 1rem 0 1rem;
  background-color: var(--green-color);
}
.testamonial {
  margin-top: 2rem;
  font-size: 1.5rem;
  color: var(--bg-color);
}
.testamonial-text {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--bg-color);
}
.testamonial-author {
  font-size: 0.85rem;
  color: var(--bg-color);
  margin-bottom: 2rem;
}
.CTA {
  font-size: 1.25rem;
  font-weight: 500;
  background-color: var(--blue-color);
  color: var(--bg-color);
  border: none;
  margin-bottom: 2rem;
}
.why-us {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.why-us-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.why-us-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
}
.item-title {
  font-size: 1.25rem;
  color: var(--blue-color);
  margin-bottom: 1rem;
}
.item-description {
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 2rem;
  margin-left: 2rem;
}
.item-image {
  margin-left: 2rem;
}
@media screen and (min-width: 1000px) {
  .why-us-title {
    margin-top: 2rem;
  }
  .why-us {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
  }
}
</style>
