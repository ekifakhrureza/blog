<template>
  <div class='modal fade' id='AddArticle' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
    <div class='modal-dialog'>
      <div class='modal-content'>
        <!-- Modal Header -->
        <div class='modal-header'>
          <button type='button' class='close' data-dismiss='modal'>
                             <span aria-hidden='true'>&times;</span>
                             <span class='sr-only'>Close</span>
                      </button>
          <h4 class='modal-title' id='myModalLabel'>
           Add Article
          </h4>
        </div>
        <!-- Modal Body -->
        <div class='modal-body'>
          <form class='form-horizontal' role='form'>
            <div class='form-group'>
              <label class='col-sm-2 control-label' for='title'>Title</label>
              <div class='col-sm-10'>
                <input v-model='title' name='title' type='text' class='form-control' id='title' placeholder='Input Title' />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-sm-2 control-label' for='content'>Content</label>
              <div class='col-sm-10'>
               <textarea v-model='content' name='content' class='form-control' id='content' placeholder='Input Content'></textarea>
              </div>
            </div>
          </form>
        </div>
        <!-- Modal Footer -->
        <div class='modal-footer'>
          <button type='button' class='btn btn-default' data-dismiss='modal'>
                                  Close
                      </button>
          <button type='button' class='btn btn-primary' @click='add()'>
                          Post
                      </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: 'AddArticle',
  props: ['listarticles'],
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    add () {
      axios
        .post('http://localhost:3000/articles/add', {
          title: this.title,
          content: this.content
        })
        .then(response => {
          this.listarticles.push(response.data.data)
          document.querySelector('.close').click()
          Swal({
            type: 'success',
            title: 'Your article has been posted',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
          })
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
* {
  text-align: justify;
}
</style>
