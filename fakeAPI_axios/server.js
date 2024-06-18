const { fetch_all_posts, fetch_single_post_by_postId, fetch_posts_by_userId } = require('./Service/postService');
const { fetch_all_users, fetch_single_user_by_Id, fetch_user_by_username } = require('./Service/userService');
const { fetch_all_comments, fetch_comments_by_ID, fetch_comments_by_postID } = require('./Service/commentService');


const main = async () => {
    try {
        const fetchAllPosts = await fetch_all_posts();
        console.log("fetchAllPosts == ", JSON.stringify(fetchAllPosts));

        const fetchSinglePostByPostId = await fetch_single_post_by_postId(95);
        console.log("fetchSinglePostByPostId == ", fetchSinglePostByPostId);

        const fetchPostByUserID = await fetch_posts_by_userId(9);
        // console.log("fetchPostByUserID == ", fetchPostByUserID);

        const fetchAllUsers = await fetch_all_users();
        console.log("fetchAllUsers : ", fetchAllUsers);

        const fetchSingleUserById = await fetch_single_user_by_Id(5);
        console.log("fetchSingleUserById : ", fetchSingleUserById);

        const fetchUserByUsername = await fetch_user_by_username('Antonette');
        console.log("fetchUserByUsername : ", fetchUserByUsername);

        const fetchAllComments = await fetch_all_comments();
        console.log("fetchAllComments : ", fetchAllComments);

        const fetchCommentsByID = await fetch_comments_by_ID(21);
        console.log("fetchCommentsByID :", fetchCommentsByID);

        const fetchCommentsByPostID = await fetch_comments_by_postID(5);
        console.log({ fetchCommentsByPostID });

    } catch (error) {
        console.log("main error : ", error);
    }
};

main();