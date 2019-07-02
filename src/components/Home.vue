<template>
  <div>
    <b-button size="md" class="mr-2">
      <router-link to="/change/add" class="mr-2 button">Add user</router-link>
    </b-button>
    <b-table striped hover :fields="fields" :items="datas">
      <template slot="edit" slot-scope="datas">
        <b-button size="sm" class="mr-2">
          <router-link :to="{ name: 'Change', params: { id: datas.item.id }}" class="mr-2 button">Edit</router-link>
        </b-button>
      </template>
      <template slot="delete" slot-scope="datas">
        <b-button size="sm" @click="deleteItem(datas.item.id)" class="mr-2">
          Delete
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: ['name', 'surname', 'phone', 'email', 'edit', 'delete'],
      datas: []
    }
  },
  mounted () {
    if (localStorage.data) {
      this.datas = JSON.parse(localStorage.data)
    }
  },
  methods: {
    deleteItem (itemId) {
      console.log(this.datas.findIndex((item) => item.id.toString() === itemId.toString()))
      this.datas.splice(this.datas.findIndex((item) => item.id.toString() === itemId.toString()), 1)
      this.saveData()
    },
    saveData () {
      let parsed = JSON.stringify(this.datas)
      localStorage.setItem('data', parsed)
    }
  }
}
</script>
<style>
  .button, .button:hover{
    color: #fff;
  }
</style>
