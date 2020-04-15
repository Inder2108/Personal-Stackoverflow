import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import Blog from "components/Blog/Blog";
import BlogDetail from "components/BlogDetail/BlogDetail";
import _ from "underscore";
import "./BlogDashboard.scss";
import blogList from "data/blog-list";
import blogDetails from "data/blog-details";

class BlogDashboard extends Component {
    state = {
        selectedBlogID: null,
        selectedBlogDetails: {
            title: ""
        },
        showBlogDetails: false
    };

    returnToListView() {
        this.setState({
            showBlogDetails: false
        });
    }

    render() {
        let blogs = _.map(blogList, blog => (
            <div className="col-6">
                <Blog
                    blogObj={blog}
                    onShowDetailsClick={(id) => {
                        this.setState({
                            selectedBlogID: id,
                            selectedBlogDetails: _.find(blogDetails, obj => obj.id === blog.id),
                            showBlogDetails: true
                        });
                    }}
                />
            </div>
        ));

        let blogDetail = (
            <div className="col-12">
                <BlogDetail
                    blogObj={this.state.selectedBlogDetails}
                    onCloseClick={() => {
                        this.setState({
                            showBlogDetails: false
                        });
                    }}
                />
            </div>
        );

        return (
            <Layout>
                <div className={this.state.showBlogDetails ? "d-none" : "row"}>{blogs}</div>
                <div className={!this.state.showBlogDetails ? "d-none" : "row"}>{blogDetail}</div>
            </Layout>
        );
    }
}

export default BlogDashboard;
