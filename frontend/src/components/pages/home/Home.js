import React, { useEffect, useState } from "react";
import BlogpostList from "./BlogpostList";
import BlogpostMini from "./BlogpostMini";
import './css/Home.css';
import http from "../../../utils/http/httpConfig";
import { useNavigate } from "react-router-dom";
import BlogpostPreview from "./BlogpostPreview";
import BlogpostMiniList from "./BlogpostMiniList";

const Home = () => {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {


        http.get("/blogpost/list")
            .then((res) => {
                setPosts(res.data);
            })

    }, []);
    return (<>
        <div className="home-sidebar-container">
        </div>
        <div className="home-main-content-container">
            {posts.length > 0 &&
                <div>
                    
                    <div className="home-title-latest">Latest</div>
                    <BlogpostPreview post={posts[posts.length - 1]} handleClick={() => navigate(`blogpost/${posts[posts.length - 1]?.id}`)} />
                    <hr></hr>
                    <div className="home-title-latest">Previous Posts</div>
                    <BlogpostMiniList posts={ posts.slice(posts.length - 4, posts.length - 1) }/>
                    
                </div>

            }

        </div>
        <div className="home-sidebar-container"></div>
    </>
    )
}

export default Home;