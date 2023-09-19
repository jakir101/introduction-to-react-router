import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border:'2px solid red',
        padding: '10px',
        borderRadius: '10px',
        margin:'5px'
    }

    const handleDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>Post Of Id: {id}</h3>
            <p>Tile: {title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleDetails}>Details</button>
        </div>
    );
};

export default Post;