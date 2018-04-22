<template>
  <div id="app">
    <div class="wrapper">
      <!-- Sidebar Holder -->
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>Football Blog</h3>
          <strong>FB</strong>
        </div>
        <ul class="list-unstyled components">
          <li class="active">
            <a href="#">
              <router-link to="/"><i class="glyphicon glyphicon-home"></i>Home</router-link>
            </a>
          </li>
          <li class="active">
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
              <i class="glyphicon glyphicon-duplicate"></i> List Article ({{ articles.length }})
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li v-for="(article, index) in articles" :key="index">
                <router-link  :to="{name:'DetailArticle', params:{id:article._id} } ">
                 <p>{{ article.title }}</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <router-view :listarticles="articles"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: 'App',
  data () {
    return {
      articles: []
    }
  },
  created () {
    Swal({
      onOpen: () => {
        Swal.showLoading()
        axios
          .get(`http://localhost:3000/articles/`, {})
          .then(response => {
            Swal.hideLoading()
            Swal.clickConfirm()
            this.articles = response.data.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    })
  },
  watch: {
    articles () {
      axios
        .get(`http://localhost:3000/articles/`, {})
        .then(response => {
          this.articles = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped>
p {
  color: black;
  font-weight: bold;
}
a,
a:focus,
a:active {
  color: white;
  text-decoration: none;
}
</style>
