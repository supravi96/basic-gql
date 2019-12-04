const Query = {
    comments(parent, args, {
        db
    }, info) {
        return db.comments;
    },
    posts(parent, args, {
        db
    }, info) {
        if (!args.query) {
            return db.posts;
        }

        return db.posts.filter((post) => {
            return post.title.toLowerCase().includes(args.query.toLowerCase());
        });
    },
    users(parent, args, {
        db
    }, info) {
        if (!args.query) {
            return db.users;
        }

        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase());
        });
    },
    me() {
        return {
            id: "1",
            name: "leifyusghdli",
            email: "dfkjlh@f.grg",
            age: 10
        }
    },
    post() {
        return {
            id: "1",
            title: "fdlfjhd",
            body: "fslihvcnuilgmiu,g",
            published: false,
        }
    }
};

export {
    Query as default
}