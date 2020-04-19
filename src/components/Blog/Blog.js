import React from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";

let blog = props => {
    let { id, title, preview, date, category, subCategory } = props.blogObj;
    return (
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
                <strong class="d-inline-block mb-2 text-primary">{category} / {subCategory}</strong>
                <h3 class="mb-0 btn btn-link" onClick={props.onShowDetailsClick}>
                    <Link to={process.env.PUBLIC_URL + "/blog-detail/" + id}>{title}</Link>
                </h3>
                <div class="mb-1 text-muted">{date}</div>
                <p class="card-text mb-auto">{preview}</p>
            </div>
        </div>
    );
};

export default blog;
