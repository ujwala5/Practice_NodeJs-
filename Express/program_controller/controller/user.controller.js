const get_userDetails_controllers = async (req, res) => {
    try {
        console.log('get userDetails_controller');
        res.send('Get Success');
    } catch (error) {
        res.send('Error', error.message);

    }
};

const post_userDetails_controller = async (req, res) => {
    try {
        console.log("post userDetails_controller");
        res.send("Post Success");
    } catch (error) {
        res.send("error", error.message);

    }
};

const del_userDetails_Controller = async (req, res) => {
    try {
        console.log("Delete userDetails_controller");
        res.send("Delete Success");
    } catch (error) {
        res.send("error", error.message);

    }
};

const post_addUserDetails = async (req, res) => {
    try {
        console.log("Post post_addUserDetails");
        res.send("post Success");
    } catch (error) {
        res.send("error", error.message);

    }
};

const updateUser = async (req, res) => {
    try {
        console.log("Update updateUser");
        res.send("update Success");
    } catch (error) {
        res.send("error", error.message);

    }
};

const fetchSingleUser = async (req, res) => {
    try {
        console.log("fetchSingleUser");
        res.send("get fetchSingleUser");
    } catch (error) {
        res.send("error", error.message);

    }
};

const add_blog = async (req, res) => {
    try {
        console.log("Post add_blog");
        res.send("Post add_blog");
    } catch (error) {
        console.log("error", error.message);
        res.send("error", error.message);
    }
};

const deleteBlog = async (req, res) => {
    try {
        console.log("Delete Blog");
        res.send("Delete Blog");
    } catch (error) {
        console.log("error", error.message);
        res.send("error", error.message);
    }
};

const edit_blog = async (req, res) => {
    try {
        console.log("edit_blog");
        res.send("editBlog");
    } catch (error) {
        console.log("error", error.message);
        res.send("error", error.message);
    }
};

const fetchAllBlogs = async (req, res) => {
    try {
        console.log("fetch_All_blogs");
        res.send("fetchAllBlogs");
    } catch (error) {
        console.log("error", error.message);
        res.send("error", error.message);
    }
};

const fetch_single_blog_by_id = async (req, res) => {
    try {
        console.log("fetch_single_blog_by_id");
        res.send("fetch_single_blog_by_id");
    } catch (error) {
        console.log("error", error.message);
        res.send("error", error.message);
    }
};

const fetch_comments_by_blog_id = async (req, res) => {
    try {
        console.log("fetch_comments_by_blog_id");
        res.send("fetch_comments_by_blog_id");
    } catch (error) {
        console.log("error", error.message);
        res.send("error", error.message);
    }
};

const write_conmment_by_blogid = async (req, res) => {
    try {
        console.log("write_conmment_by_blogid");
        res.send("write_conmment_by_blogid");
    } catch (error) {
        console.log("error", error.message);
        res.send("error", error.message);
    }
};

const delete_comment_blogid = async (req, res) => {
    try {
        console.log("delete_comment_blogid");
        res.send("delete_comment_blogid");
    } catch (error) {
        console.log("error", error.message);
        res.send("error", error.message);
    }
};

module.exports = {
    get_userDetails_controllers,
    post_userDetails_controller,
    del_userDetails_Controller,
    post_addUserDetails,
    updateUser,
    fetchSingleUser,
    add_blog,
    deleteBlog,
    edit_blog,
    fetchAllBlogs,
    fetch_single_blog_by_id,
    fetch_comments_by_blog_id,
    write_conmment_by_blogid,
    delete_comment_blogid
};