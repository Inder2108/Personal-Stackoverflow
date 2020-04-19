import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import Blog from "components/Blog/Blog";
import _ from "underscore";
import "./BlogsListContainer.scss";
import api from "utils/api";

class BlogsListContainer extends Component {
    state = {
        // TODO: Work on global loader for site
        showLoader: true,
        blogs: []
    };

    componentDidMount() {
        api.getBlogs()
            .then(blogsFromAPI => {
                this.setState({
                    showLoader: false,
                    blogs: blogsFromAPI
                });
            })
            .catch(error => {
                // TODO: Handle using error boundary and show error message in modal or something
                console.error(error);
            });
    }

    returnToListView() {
        this.setState({
            showBlogDetails: false
        });
    }

    render() {
        let blogsJSX = !this.state.showLoader
            ? _.map(this.state.blogs, blog => (
                  <div className="col-6">
                      <Blog
                          blogObj={blog}
                          onShowDetailsClick={id => {
                              // TODO: Redirect to blog's own URL
                              console.log("requesting a detail blog");
                          }}
                      />
                  </div>
              ))
            : null;

        return (
            <Layout>
                <div class="row">{blogsJSX}</div>
            </Layout>
        );
    }
}

export default BlogsListContainer;
