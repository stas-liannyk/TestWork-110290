<template>
  <div id='post-edit'>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>Show post</strong></h3>
        </div>
        <div class="pull-right">
          <router-link :to="'/posts/'" class="btn btn-default">
            Back to List posts
          </router-link>
        </div>
      </div>
    </div>
    <hr class="top">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-body">
            <h1>{{post.name}}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'post-show',
  computed: mapGetters({
    post: 'post'
  }),
  created () {
    this.$store.dispatch('getPostById', this.$route.params.id)
  }
}
</script>
