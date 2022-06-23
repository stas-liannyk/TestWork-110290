<template>
  <div id='post-index'>
    <div v-if="messages && messages.length" class="row">
      <div class="col-md-12">
        <div class="alert alert-success">
          {{ messages }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>List posts</strong></h3>
        </div>
        <div class="pull-right">
          <router-link :to="'/posts/new'" class="btn btn-lg btn-default">
            New post
          </router-link>
          <router-link :to="'/'" class="btn btn-lg btn-default">
            Back to homepage
          </router-link>
        </div>
      </div>
    </div>
    <hr class="top">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>ACTION</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(post, index) in posts" v-bind:key="post.id">
        <td><div class="text-center">{{ index+1 }}</div></td>
        <td>{{ post.name }}</td>
        <td>
          <router-link v-bind:to="'/posts/' + post.id" class="btn btn-sm btn-warning">
            Show post
          </router-link>
          <router-link v-bind:to="'/posts/edit/' + post.id" class="btn btn-sm btn-warning">
            Edit post
          </router-link>
          <button @click="destroy(post.id)" class="btn btn-sm btn-danger">
            Delete post
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'post-index',
  computed: mapGetters({
    posts: 'allPosts',
    messages: 'messages'
  }),
  methods: mapActions([
    'destroy'
  ]),
  created () {
    this.$store.dispatch('getAllPosts')
  }
}
</script>
