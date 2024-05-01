import React from "react";
import Article from "./Article";
import blogData from "../data/blog";
 
function ArticleList(){
    return(
        <main>
            <Article posts={blogData.posts} />
        </main>

    )
}
export default ArticleList