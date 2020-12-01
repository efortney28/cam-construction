<template>
    <Layout>
        <div class="container-fluid" id="image-container">
            <div class="row">
                <div class="col-sm work-image" v-for="work in $page.work.edges">
                    <a :href="work.node.images" target="_blank">
                        <b-img thumbnail fluid width="200" height="200" :src="work.node.images"></b-img>
                    </a>
                </div>
            </div>
        </div>
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

<script>
export default {
    metaInfo: {
        title: 'CAM Contracting | Our Work'
    },
    components: {  },
    data() {
        return {
            
        }
    },
}
</script>

<style>
</style>