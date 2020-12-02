<template>
    <Layout>
        <main>
            <h1 class="title text-center">Our Work</h1>
            <section>
                <article class="col-sm work-image text-center" v-for="work in $page.work.edges">
                    <a :href="work.node.images" target="_blank">
                        <b-img thumbnail fluid width="300" :src="work.node.images" alt="example of our work"></b-img>
                    </a>
                </article>
            </section>
        </main>
    </Layout>
</template>

<page-query>
    query Work {
        work: allWorkEntry {
            edges {
                node {
                    name
                    date
                    description
                    images
                }
            }
        }
    }
</page-query>

<script scoped>
export default {
    metaInfo: {
        title: 'CAM Custom | Our Work'
    },
    components: {  },
    data() {
        return {
            
        }
    },
}
</script>

<style>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.title {
    font-size: 1.75rem;
    color: var(--blue-color);
    margin-top: 2rem;
}
.work-image {
    margin-top: 2rem;
}
@media screen and (min-width: 1000px){
    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>