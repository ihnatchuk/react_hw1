import './postDetails.css'

const PostDetails = ({ postDetails } ) => {

    const {id, userId, title, body} = postDetails
    return (
                <div >
                    <h2>{id}. userId: {userId}</h2>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
    );
};

export {PostDetails};