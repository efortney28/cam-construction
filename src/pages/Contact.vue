<template>
    <Layout>
        <div class="container-fluid">
            <main class="row">
                <section class="col-lg contact-info text-center">
                    <h1 class="contact-us-title text-center">Contact Us</h1>
                    <p>Fill out the form and we will get back to you as soon as possible!</p>
                </section>
                <section class="col-lg contact-form text-center">
                    <b-form
                        name="contact"
                        method="post"
                        v-on:submit.prevent="handleSubmit"
                        action="/success/"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                            <label>
                            Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>
                        <div class="sender-info">
                            <div>
                                <b-form-input class="form-input" type="text" name="name" v-model="formData.name" placeholder="Your Name" />
                            </div>
                            <div>
                                <b-form-input class="form-input" type="email" name="email" v-model="formData.email" placeholder="Your Email" />
                            </div>
                            <div>
                                <b-form-input class="form-input" type="text" name="phone" v-model="formData.phone" placeholder="Your Phone Number" />
                            </div>
                        </div>

                        <div class="message-wrapper">
                            <b-form-textarea class="form-textarea" name="message" v-model="formData.message" placeholder="What would you like done?"></b-form-textarea>
                        </div>

                        <b-button pill type="submit" id="submitButton">Submit</b-button>
                    </b-form>
                </section>
            </main>
        </div>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'CAM Contracting | Contact Us'
    },
    data() {
        return{
            formData: {},
        }
    },
    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
                'form-name': e.target.getAttribute('name'),
                ...this.formData,
            }),
            })
            .then(() => this.$router.push('/'))
            .catch(error => alert(error))
    },
}
}
</script>

<style scoped>
.contact-us-title {
    font-size: 1.75rem;
    color: var(--blue-color);
    margin-bottom: 1rem;
}
.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    font-size: 1rem;
}
.form-input {
    margin-top: 2rem;
}
textarea {
    margin-top: 2rem;
    margin-bottom: 2rem;
}
#submitButton {
    padding: 0.75rem;
    width: 150px;
    font-size: 1.2rem;
    background: var(--green-color);
}
@media screen and (min-width:1000px) {
    .contact-form {
        margin-top: 3rem;
        margin-right: 3rem;
    }
}
</style>