<template>
    <Layout>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg contact-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sodales magna, vel lacinia mauris. Suspendisse potenti. Cras at ornare ex, eu pulvinar enim. In imperdiet diam in urna facilisis, et faucibus sapien aliquet. Nunc a eros nec augue dapibus tincidunt ut vel sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis posuere enim.</p>
                </div>
                <div class="col-lg contact-form">
                    <form
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
                            <label for="name" class="label" >Name</label>
                            <input type="text" name="name" v-model="formData.name" />
                            </div>
                            <div>
                            <label for="email">Email</label>
                            <input type="email" name="email" v-model="formData.email" />
                            <label for="phone" class="label">Phone Number</label>
                            <input type="text" name="phone" v-model="formData.phone" />
                            </div>
                        </div>

                        <div class="message-wrapper">
                            <label for="message">Message</label>
                            <textarea name="message" v-model="formData.message"></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
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
            .then(() => this.$router.push('/success'))
            .catch(error => alert(error))
    },
}
}
</script>

<style>

</style>