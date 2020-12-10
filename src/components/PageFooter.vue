<template>
    <section class="footer">
        <section class="contact-info">
            <font-awesome class="contact-icon" :icon="['fab', 'facebook']"/>
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
    margin-right: 1rem;
    margin-left: 1rem;
}
.email-container {
    display: flex;
    flex-direction: column;
}
.email {
    color: var(--bg-color);
    font-size: 1rem;
}
.email:hover {
    color: var(--green-color);
}
</style>