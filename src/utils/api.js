import blogs from "utils/data/blog-list";
import blogDetails from "utils/data/blog-details";

let getBlogs = async () => {
    return blogs;
};

let getBlog = async url => {
    let blogDetail = blogDetails[url];
    if (!blogDetail) {
        throw {
            error: "Error"
        };
    }
    return blogDetails[url];
};

export default {
    getBlogs,
    getBlog
};
