import { createSlice } from "@reduxjs/toolkit";



export const postsSlice=createSlice({
    name:'posts',
    initialState:{
        posts:[]
    },
    reducers:{
      fetchPost:(state,action)=>{
        state.posts=action.payload;
      },  
      addPost: (state, action) => {
        const newPost = action.payload;
        const lastPost = state.posts[state.posts.length - 1];
  
        // Set the new post's id to be one greater than the last post's id
        newPost.id = lastPost ? lastPost.id + 1 : 1;
  
        state.posts = [...state.posts, newPost];
      },
      deletePost:(state,action)=>{
        state.posts=state.posts.filter((post)=>post.id!==action.payload);
      },
      editPost: (state, action) => {
        const editedPost = action.payload;
        const index = state.posts.findIndex(post => post.id === editedPost.id);
  
        if (index !== -1) {
          state.posts[index] = editedPost;
        }
      },
    }
})


export const {fetchPost,addPost,deletePost,editPost}=postsSlice.actions;
export default postsSlice.reducer;