<template>
    <Layout>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg contact-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sodales magna, vel lacinia mauris. Suspendisse potenti. Cras at ornare ex, eu pulvinar enim. In imperdiet diam in urna facilisis, et faucibus sapien aliquet. Nunc a eros nec augue dapibus tincidunt ut vel sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis posuere enim.</p>
                </div>
                <div class="col-lg contact-form text-center">
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
                                <b-form-input type="text" name="name" v-model="formData.name" placeholder="Your Name" />
                            </div>
                            <div>
                                <b-form-input type="email" name="email" v-model="formData.email" placeholder="Your Email" />
                            </div>
                            <div>
                                <b-form-input type="text" name="phone" v-model="formData.phone" placeholder="Your Phone Number" />
                            </div>
                        </div>

                        <div class="message-wrapper">
                            <b-form-textarea name="message" v-model="formData.message" placeholder="What would you like done?"></b-form-textarea>
                        </div>

                        <b-button pill type="submit" id="submitButton">Submit</b-button>
                    </b-form>
                </div>
            </div>
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

<style>
input {
    padding: 1rem;
    margin: 1rem 0;
}
textarea {
    padding: 1rem;
    margin: 1rem 0;
}
#submitButton {
    background: #FCD146;
    border: none;
    font-family: "Rubik", sans-serif;
    color: #010180;
}
.contact-info {
    padding: 5rem 2rem;
}
p {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
}

@media screen (max-width: 700px) {
    .contact-info {
        padding: 0;
    }
    .contact-form {
        padding: 0;
    }
}
</style>