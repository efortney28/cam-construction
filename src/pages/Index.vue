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
          <g-image class="home-image" src="../../static/construction.png" alt="Custom construction work" width="350px" />
        </section>
        <section class="col-lg about text-center">
          <p id="about-text">We have 30 years of experience building and remodeling homes in the greater Houston Area including, but not limited to Liberty, Dayton, Kountze, Cove, Baytown, Lake Jackson, and more. We can do custom kitchens, bathrooms, tile work, concrete work, wood work, anything that you need done, we can do it.  </p>
          <b-button pill size="lg" class="CTA" href="/contact">Get a free quote</b-button>
        </section>
        <section id="testamonials">
          <article class="testamonial" v-for="testamonial in $page.testamonial.edges">
            <p class="comment">"{{ testamonial.node.comments }}"</p>
            <p class="author">- <span class="bold">{{ testamonial.node.name}}</span>, <span class="italic">{{ testamonial.node.location }}</span></p>
          </article>
        </section>
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

<page-query>
  query {
    testamonial: allTestamonial {
      edges {
        node {
          name
          location
          comments
        }
      }
    }
  }
</page-query>

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
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
#title {
  font-size: 1.75rem;
  color: var(--text-color);
}
#tagline {
  color: var(--text-color);
  margin-top: 0;
  font-weight: 400;
  font-size: 1.15rem;
}
.home-image {
  margin-left: -1rem;
}
#about-text {
  font-size: 0.9rem;
  margin-bottom: 2.5rem;
}
#testamonials {
  margin-top: 2rem;
  padding: 0 1rem 0 1rem;
  background-color: var(--green-color);
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.bold {
  font-weight: 500;
}
.italic {
  font-style: italic;
}
.testamonial {
  text-align: center;
  margin-right: 2rem;
  margin-left: 2rem;
  color: var(--bg-color);
}
.comment {
  margin-top: 2rem;
  line-height: 1.4rem;
  font-size: 0.75rem;
  color: var(--bg-color);
}
.author {
  font-size: 0.75rem;
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
  margin-top: 2rem;
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
  #testamonials {
  flex-direction: row;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;

}
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
