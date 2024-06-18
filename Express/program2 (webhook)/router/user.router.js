const express = require('express');
const router = express.Router();

const { get_userDetails_controllers, post_userDetails_controller, del_userDetails_Controller, post_addUserDetails, updateUser, fetchSingleUser, add_blog, deleteBlog, edit_blog, fetchAllBlogs, fetch_single_blog_by_id, fetch_comments_by_blog_id, write_conmment_by_blogid, delete_comment_blogid } = require("../controller/user.controller.js");

// router.get('/', (req, res) => {
//     console.log("Hello world");
//     res.send("Hello world");
// });


router.get('/', get_userDetails_controllers);
router.post('/', post_userDetails_controller);
router.delete('/', del_userDetails_Controller);
router.post('/addUser', post_addUserDetails);
router.patch('/updateUser', updateUser);
router.get('/fetchSingleUser', fetchSingleUser);
router.post('/add_blog', add_blog);
router.delete('/delete_blog', deleteBlog);
router.put('/editBlog', edit_blog);
router.get('/fetch_all_blogs', fetchAllBlogs);
router.get('/fetch_single_blog_by_id', fetch_single_blog_by_id);
router.get('/fetch_comments_by_blog_id', fetch_comments_by_blog_id);
router.post('/write_conmment_by_blogid', write_conmment_by_blogid);
router.delete('/delete_comment_blogid', delete_comment_blogid);

module.exports = router;