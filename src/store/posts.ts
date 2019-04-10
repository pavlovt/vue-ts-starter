/*import { VuexModule, Module, Action, Mutation, MutationAction } from 'vuex-module-decorators'
import {  } from 'axios'

@Module
export default class Posts extends VuexModule {
    posts: PostEntity[] = [] // initialise empty for now

    get totalComments(): number {
        return posts.filter((post) => {
            // Take those posts that have comments
            return post.comments && post.comments.length
        }).reduce((sum, post) => {
            // Sum all the lengths of comments arrays
            return sum + post.comments.length
        }, 0)
    }
    @Mutation
    updatePosts(posts: PostEntity[]) {
        this.posts = posts
    }

    @Action({ commit: 'updatePosts' })
    async function fetchPosts() {
        return await get('https://jsonplaceholder.typicode.com/posts')
    }
}*/
