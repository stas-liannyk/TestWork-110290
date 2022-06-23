<template>
  <div id='post-new'>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>New post</strong></h3>
        </div>
        <div class="pull-right">
          <router-link :to="'/posts/'" class="btn btn-default">
            Back to List posts
          </router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <form @submit.prevent="savePost(post)">
              <div class="row">
                <div class="form-group col-md-12">
                  <hr>
                </div>
                <div class="form-group col-md-12">
                  <label for="name">Name</label>
                  <input type="text" v-model="post.name" class="form-control">
                </div>
                <div class="form-group col-md-12">
                  <button type="submit" class="btn btn-lg btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'post-new',
  data () {
    return {
      post: {
        id: '',
        name: '',
      }
    }
  },
  methods: mapActions([
    'savePost'
  ])
}
</script>
