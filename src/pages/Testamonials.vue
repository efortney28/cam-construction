<template>
    <Layout>
        <main>
            <h1 class="testamonial-page-header text-center">
                Add a Testamonial
            </h1>
            <p class="testamonial-page-subheading text-center">
                Fill out the form below to submit your feedback! We look forward to hearing from you and appreciate your time!
            </p>
            <section class="testamonial-form text-center">
                <b-form
                    name="testamonial"
                    method="post"
                    v-on:submit.prevent="handleSubmit"
                    action="/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="testamonial" />
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
                            <b-form-input class="form-input" type="text" name="customer-location" v-model="formData.location" placeholder="Your Location" />
                        </div>
                    </div>

                    <div class="message-wrapper">
                        <b-form-textarea class="form-textarea" name="message" v-model="formData.message" placeholder="Comments about job..."></b-form-textarea>
                    </div>

                    <b-button pill type="submit" id="submitButton">Submit</b-button>
                </b-form>
            </section>
        </main>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: "CAM Custom | Add Testamonial"
    },
    data() {
        return {
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
    },

}
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.testamonial-page-header {
    margin-top: 2rem;
    font-size: 1.75rem;
    color: var(--blue-color);
}
.testamonial-page-subheading {
    font-size: 1rem;
    margin-right: 2rem;
    margin-left: 2rem;
    color: var(--text-color);
    margin-top: 2rem;
}
.testamonial-form {
    margin-right: 1rem;
    margin-left: 1rem;
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
</style>