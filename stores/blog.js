import { defineStore } from "pinia";
export const useBlogStore = defineStore('blog',{
    state: () =>({
        id : null,
        title : "",
        date : "",
        readtime : "",
        coverimage : ""
    }),
    actions:{
        setblog : function(blog){
            this.id = blog.id;
            this.title = blog.title;
            this.date = blog.date;
            this.readtime = blog.readtime;
            this.coverimage = blog.coverimage
        }
    }
})