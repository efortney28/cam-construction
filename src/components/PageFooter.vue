<template>
    <section class="footer">
        <section class="contact-info">
            <a class="fb-link" target="_blank" href="https://www.facebook.com/CamCustomContracting">
                <font-awesome class="contact-icon" :icon="['fab', 'facebook']"/>
            </a>
            <section class="email-container">
                <font-awesome class="contact-icon" :icon="['far', 'envelope']" @click="email=!email" />
                <a class="email" href="mailto:chriscarter@camcustom.com" v-if="email">chriscarter@camcustom.com</a>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email: false,
            phone: false,
        }
    }
}
</script>

<style>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--blue-color);
}
.contact-info {
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: var(--bg-color);
}
.contact-icon {
    margin-top: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
}
.email-container {
    display: flex;
    flex-direction: column;
}
.fb-link {
    color: var(--bg-color);
    text-decoration: none;
}
.fb-link:hover {
    color: var(--green-color);
}
.email {
    margin: 1rem;
    color: var(--bg-color);
    font-size: 1rem;
}
.email:hover {
    color: var(--green-color);
}
</style>