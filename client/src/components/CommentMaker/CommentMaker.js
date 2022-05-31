import React,{Component} from "react";
import { Post } from "../Post/Post";
import PostList from "../PostList/PostList";


// Class Component for generating Posts
export class CommentMaker extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts:[],
            searchBar:''
        }
        this.post = this.post.bind(this)
    }

    // Method for Handling Posts !
    post(postText){
        let Posts = this.state.posts
        Posts.push(<Post postText={this.state.searchBar} />)
        this.setState({
            posts : Posts    
        })
    }

    render(){
        return(
            <div className="container-fluid py-5 " style={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'}} >
                <div className="container px-0">
                    <h3>Comments</h3>
                </div>
                <hr />
                <PostList posts={this.state.posts} />
                <div className="mt-3 text-center d-flex"> 
                    <input onChange={(e) => {this.setState({
                        searchBar : e.target.value  
                    }
                    )}} className="form-control" placeholder="Enter Comment" />
                    <button onClick={() => {this.post()}} style={{backgroundColor:'#6D6EDC',color:'white'}} className="btn">Comment</button>
                </div>
            </div>
        )
    }
}