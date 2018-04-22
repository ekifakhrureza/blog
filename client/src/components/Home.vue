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
            <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#AddArticle">
                                      <i class="glyphicon glyphicon-plus"></i> Add
                                  </button>
          </ul>
        </div>
      </div>
    </nav>
    <div v-for="(article, index) in listarticles" :key="index">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
      <router-link :to="{name:'DetailArticle', params:{id:article._id} } ">
        <div><button type="button" class="btn btn-warning">Manage</button></div>
      </router-link>
      <div class="line"></div>
    </div>
    <AddArticle :listarticles="listarticles" />
  </div>
</template>

<script>
import AddArticle from './AddArticle'
export default {
  name: 'Home',
  components: { AddArticle },
  template: '<AddArticle/>',
  props: ['listarticles'],
  data () {
    return {}
  }
}
</script>
