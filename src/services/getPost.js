const getPost=(id)=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(value => value.json())
}
export {
    getPost
}