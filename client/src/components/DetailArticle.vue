<template>
  <div id="content">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
            <i class="glyphicon glyphicon-align-left"></i>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
             <li>
               <button class="btn btn-success btn-lg" data-toggle="modal" data-target="#UpdateArticle">
                  <i class="glyphicon glyphicon-pencil"></i> Update
               </button>
             </li>
            <li>
              <button class="btn btn-warning btn-lg" @click="remove($route.params.id)">
                  <i class="glyphicon glyphicon-remove"></i> Delete
               </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
    <div class="line"></div>
   <UpdateArticle :listarticles="listarticles" :article="article"/>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import UpdateArticle from './UpdateArticle'
export default {
  props: ['listarticles'],
  name: 'DetailArticle',
  components: { UpdateArticle },
  template: '<UpdateArticle/>',
  data () {
    return {
      article: {},
      id: this.$route.params.id
    }
  },
  methods: {
    remove (id) {
      Swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
        reverseButtons: true
      })
        .then(result => {
          if (result.value) {
            axios
              .delete(`http://localhost:3000/articles/delete/${this.id}`, {})
              .then(response => {
                Swal({
                  title: 'Deleted!',
                  text: 'Your article has been removed.',
                  type: 'success',
                  showConfirmButton: false,
                  timer: 1500
                }).then(
                  () => {
                    let articleList = this.listarticles.filter(
                      list => list._id !== `${id}`
                    )
                    this.listarticles = articleList

                    this.$router.replace('/')
                    this.$router.go()
                  }
                )
              })
          }
        })

        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    Swal({
      onOpen: () => {
        Swal.showLoading()
        axios
          .get(`http://localhost:3000/articles/${this.id}`, {})
          .then(response => {
            Swal.hideLoading()
            Swal.clickConfirm()
            this.article = response.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    })
  },
  watch: {
    $route (to, from) {
      Swal.showLoading()
      axios
        .get(`http://localhost:3000/articles/${this.$route.params.id}`, {})
        .then(response => {
          Swal.hideLoading()
          Swal.clickConfirm()
          this.article = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
li {
  margin-right: 30px;
}
</style>
