import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import BlogDetail from "components/BlogDetail/BlogDetail";
import "./BlogDetailContainer.scss";
import api from "utils/api";

class BlogDetailContainer extends Component {
    state = {
        showLoader: true,
        blogDetail: {}
    };

    componentDidMount() {
        let blogURL = this.props.match.params.url;
        api.getBlog(blogURL)
            .then(blogDetailFromAPI => {
                this.setState({
                    showLoader: false,
                    blogDetail: blogDetailFromAPI
                });
            })
            .catch(error => {
                // TODO: Handle using error boundary and show error message in modal or something
                console.error(error);
            });
    }

    render() {
        let blogDetailJSX = !this.state.showLoader ? <BlogDetail blogObj={this.state.blogDetail} /> : null;
        return <Layout>{blogDetailJSX}</Layout>;
    }
}

export default BlogDetailContainer;
