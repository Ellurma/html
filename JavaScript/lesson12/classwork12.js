

// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі
// поточного поста
let postsDiv = document.getElementsByClassName('posts')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value=>value.json())
    .then(value => {
        for (const post of value) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post')

            let idDiv = document.createElement('div');
            idDiv.innerText = `id- ${post.id}`

            let bodyDiv = document.createElement('div');
            bodyDiv.classList.add('body')
            bodyDiv.innerText = `${post.body}`

            let btn=document.createElement('button')
            btn.innerText='add comments'
            btn.onclick=function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value=>value.json())
                    .then(value => {
                        let commentsDiv=document.createElement('div')
                        commentsDiv.classList.add('post_comment')
                        for (const comment of value) {
                            let commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment')
                            commentDiv.innerText=comment.body
                            commentsDiv.append(commentDiv)
                        }
                    postDiv.append(commentsDiv)
                    })
            }
            postDiv.append(idDiv,bodyDiv,btn)
            postsDiv.appendChild(postDiv)
        }
    })
