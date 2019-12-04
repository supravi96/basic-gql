import uuidv4 from 'uuid/v4';
import { type } from 'os';

const Mutation = {
    createPost(parent, args, {
        db
    }, info) {
        let userExists = db.users.some(user => user.id === args.data.author);
        if (!userExists) {
            throw new Error("User does not exist.");
        }

        let post = {
            id: uuidv4(),
            ...args.data
        }
        db.posts.push(push);
        return post;
    },
    deletePost(parent, args, {
        db
    }, info) {
        let postIndex = db.posts.findIndex(post => post.id === args.id);
        if (postIndex === -1) {
            throw new Error("post does not exist");
        }

        let deletedPosts = db.posts.splice(postIndex, 1);
        db.comments = db.comments.filter(comment => comment.post === post.id);
        return deletedPosts[0];
    },
    updatePost(parent, args, {
        db
    }, info) {

    },
    createUser(parent, args, {
        db
    }, info) {
        let emailTaken = db.users.some(user => user.email === args.data.email);
        if (emailTaken) {
            throw new Error("Email is taken");
        }

        let user = {
            id: uuidv4(),
            ...args.data
        }
        db.users.push(user);
        return user;
    },
    deleteUser(parent, args, {
        db
    }, info) {
        let userIndex = db.users.findIndex(user => user.id === args.id);
        if (userIndex === -1) {
            throw new Error("user does not exist");
        }

        let deletedUsers = db.users.splice(userIndex, 1);

        db.posts = db.posts.filter(post => {
            let match = post.author === args.id

            if (match) {
                db.comments = db.comments.filter(comment => comment.post === post.id);
            }
            return !match;
        });

        db.comments = db.comments.filter(comment => comment.author === args.id);
        return deletedUsers[0];
    },
    updateUser(parent, args, {
        db
    }, info) {
        const user = db.users.find(user => user.id === args.id);

        if(!user) {
            throw new Error("user not found");
        }

        if(typeof args.data.email === "string") {
            const emailTaken = db.users.some(user => user.email == args.data.email);
            console.log(emailTaken)
            if(emailTaken) {
                throw new Error("Email in use.");
            }

            user.email = args.data.email;
        }

        if(typeof args.data.name === "string") {
            user.name = args.data.name;
        }

        if(typeof args.data.age !== "undefined") {
            user.age = args.data.age;
        }
        return user;
    },
    createComment(parent, args, {
        db
    }, info) {
        console.log(args)
        let userExists = db.users.some(user => user.id === args.data.author);
        if (!userExists) {
            throw new Error("User does not exist.");
        }
        let validPost = db.posts.some(post => post.id === args.data.post);
        if (!validPost) {
            throw new Error("Invalid post.");
        }

        let comment = {
            id: uuidv4(),
            ...args.data
        }
        db.comments.push(comment);
        return comment;
    },
    deleteComment(parent, args, {
        db
    }, info) {
        let commentIndex = db.comments.findIndex(comment => comment.id === args.id);
        if (commentIndex === -1) {
            throw new Error("comment does not exist");
        }

        let deletedComments = db.comments.splice(commentIndex, 1);
        return deletedComments[0];
    }
}

export {
    Mutation as
    default
}