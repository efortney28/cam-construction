<template>
    <nav>
        <b-navbar toggleable="lg" variant="info">
            <b-navbar-brand>
                <g-image src="../../static/Logo.png" width="150" />
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav right>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item right v-for='link in links' :key='link.name' router :to='link.path'>
                        {{ link.name }}
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </nav>
</template>

<script>


export default {
    data() {
        return {
            links: [
                {name:'Home', path:'/', icon:''},
                {name:'Our Work', path:'/work', icon:''},
                {name:'Contact Us', path:'/contact', icon:''}
            ]
        }
    }
}
</script>

<style scoped>
.nav-link {
    font-family:"Poppins", sans-serif ;
    font-weight: 500;
    float: right;
    color: #fff !important;
    -webkit-text-stroke: 0.5px #ddd;
}
.nav {
    float: right;
}

</style>