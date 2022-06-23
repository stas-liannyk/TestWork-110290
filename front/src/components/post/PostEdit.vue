<template>
  <div id='post-edit'>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>Edit post</strong></h3>
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
            <form @submit.prevent="updatePost(post)">
              <div class="row">
                <div class="form-group col-md-12">
                  <hr>
                </div>
                <div class="form-group col-md-12">
                  <label for="title">Name</label>
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
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'post-edit',
  computed: mapGetters({
    post: 'post'
  }),
  methods: {
    ...mapActions([
      'updatePost'
    ])
  },
  created() {
    this.$store.dispatch('getPostById', this.$route.params.id)
  }
}
</script>
