import "./groups.scss"

const Post = (props) => {
    return (
        <div>
            {props.arr.length ? 
                <div className="post__wrapper">
                    {props.arr}
                    <button className="post__btn" onClick={props.getMore}>Посмотреть еще</button>
                </div>
                    :
                    null
            }
        </div>
    )
}

export default Post