import React from "react";
function Article({posts}){
    return(
       posts.map(
        (post)=>{
            return(
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <small>{post.date}</small>
                    <p>{post.preview}</p>
            
                </article>   
            )
        }
       )
        
    )

}
export default Article