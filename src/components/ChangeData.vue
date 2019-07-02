<template>
  <b-container fluid>
    <div role="group">
      <label for="input-live">Name:</label>
      <b-form-input
        id="input-live"
        v-model="data.name"
        aria-describedby="input-live-help input-live-feedback"
        placeholder="Enter your name"
        trim
      ></b-form-input>
      <label for="input-live">Surname:</label>
      <b-form-input
        id="input-live"
        v-model="data.surname"
        aria-describedby="input-live-help input-live-feedback"
        placeholder="Enter your name"
        trim
      ></b-form-input>
    </div>
    <label for="input-live">phone:</label>
    <b-form-input
      id="input-live"
      v-model="data.phone"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>
    <label for="input-live">Email:</label>
    <b-form-input
      id="input-live"
      v-model="data.email"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>
    <b-button size="xl" @click="checkData" class="mr-1">
      Set
    </b-button>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      localStorageData: [],
      data: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        id: this.$route.params.id
      }
    }
  },
  mounted: function () {
    if (localStorage.data) {
      this.localStorageData = JSON.parse(localStorage.data)
      if (this.$route.params.id !== 'add') {
        this.data = this.localStorageData[this.localStorageData.findIndex((item) => item.id.toString() === this.data.id.toString())]
      }
    }
  },
  methods: {
    checkData () {
      let method = (this.$route.params.id === 'add' ? 'addData' : 'updateData')
      this[method]()
    },
    addData () {
      this.data.id = this.generationId()
      if (localStorage.data) {
        this.localStorageData.push(this.data)
      } else {
        this.localStorageData = [this.data]
      }
      this.saveData()
    },
    saveData () {
      let parsed = JSON.stringify(this.localStorageData)
      localStorage.setItem('data', parsed)
      this.$router.push({ path: '/' })
    },
    updateData () {
      this.localStorageData[this.localStorageData.indexOf(this.data)] = this.data
      this.saveData()
    },
    generationId () {
      let id = 0
      for (let i in this.localStorageData) {
        if (id < this.localStorageData[i].id) {
          id = this.localStorageData[i].id
        }
      }
      return id + 1
    }
  }
}
</script>
