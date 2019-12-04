const comments = [{
    id: "1",
    text: "asd",
    author: 1,
    post: 1
}, {
    id: "2",
    text: "asdjj",
    author: 1,
    post: 2
}, {
    id: "3",
    text: "asgfdd",
    author: 3,
    post: 3
}, {
    id: "4",
    text: "abjhg",
    author: 2,
    post: 4
}];

const users = [{
    id: "1",
    name: "sfs1",
    email: "dfgg1",
    age: 10
}, {
    id: "2",
    name: "sfs2",
    email: "dfgg2",
    age: 10
}, {
    id: "3",
    name: "sfs3",
    email: "dfgg3",
    age: 10
}, {
    id: "4",
    name: "sfs4",
    email: "dfgg4",
    age: 10
}];

const posts = [{
    id: "1",
    title: "a",
    author: "1",
    comment: "1"
}, {
    id: "2",
    title: "ab",
    author: "1",
    comment: "2"
}, {
    id: "3",
    title: "av",
    author: "2",
    comment: "4"
}, {
    id: "4",
    title: "ad",
    author: "4",
    comment: null
}];

const db = {
    users,
    posts,
    comments
}

export {
    db as default
}