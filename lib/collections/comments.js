Comments = new Mongo.Collection('comments');

Meteor.methods({
    commentInsert: function(commentAttributes) {
        check(this.userId, String);
        check(commentAttributes, {
            postId: String,
            body: String
        });

        var user = Meteor.user();
        var post = Posts.findOne(commentAttributes.postId);

        if (!post)
            throw new Meteor.Error('invalid-comment', "You must comment on a post!");

        comment = _.extend(commentAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });

        // Update the post with the number of comments
        Posts.update(comment.postId, {$inc: {commentsCount: 1}});

        // Create the comment and save the id
        comment._id = Comments.insert(comment);

        // Create a notification informing the user that there's been a comment
        createCommentNotification(comment);

        return comment._id;
    }
});