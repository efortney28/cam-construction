<template>
    <nav>
        <b-navbar dark toggleable="lg">
            <b-navbar-brand>
                <g-image class="brand-image" src="../../static/Logo.png" width="100px" />
            </b-navbar-brand>

            <b-navbar-toggle dark target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav right>
                <b-navbar-nav right class="ml-auto">
                    <b-nav-item class="nav-link light-text" right v-for='link in links' :key='link.name' router :to='link.path'>
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
                {name:'Home', path:'/'},
                {name:'Our Work', path:'/work'},
                {name:'Contact Us', path:'/contact'},
                {name:'Give Us Feedback', path:'/testamonials'}
            ]
        }
    }
}
</script>

<style scoped>
.navbar-brand {
    background: none !important;
}
.brand-image {
    background: none !important;
}
.nav-link {
    font-weight: 500;
    color: var(--bg-color) !important;
}
.nav-link:hover {
    color: var(--green-color) !important;
}
nav {
    background-color: var(--blue-color);
}
</style>