// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// let postsDiv = document.getElementsByClassName('posts')[0];
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value=>value.json())
//     .then(value=>{
//         for (const post of value) {
//             let postDiv = document.createElement('div');
//             postDiv.classList.add('post')
//
//             let idPost = document.createElement('div');
//             idPost.innerText=`id- ${post.id}`
//
//             let userIdPost = document.createElement('div');
//             userIdPost.innerText=`userId- ${post.userId}`
//
//             let titlePost = document.createElement('h3');
//             titlePost.innerText=post.title
//
//             let bodydPost = document.createElement('div');
//             bodydPost.innerText=post.body
//
//             let hr = document.createElement('hr');
//
//             postDiv.append(idPost,userIdPost,titlePost,bodydPost, hr)
//             postsDiv.append(postDiv)
//         }
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
let commentsDiv = document.getElementsByClassName('comments')[0];
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value=>value.json())
    .then(value=>{
        for (const comment of value) {
            let commentDiv=document.createElement('div')
            commentDiv.classList.add('comment')

            let postIdDiv=document.createElement('div')
            postIdDiv.innerText='post id- '+ comment.postId

            let idDiv=document.createElement('div')
            idDiv.innerText='id- ' + comment.id

            let nameDiv=document.createElement('h3')
            nameDiv.innerText=comment.name

            let emailDiv=document.createElement('p')
            emailDiv.innerText=comment.email

            let bodyDiv=document.createElement('div')
            bodyDiv.innerText=comment.body

            let hr = document.createElement('hr');

            commentDiv.append(postIdDiv,idDiv,nameDiv,emailDiv,bodyDiv,hr)
            commentsDiv.append(commentDiv)
        }
    })
