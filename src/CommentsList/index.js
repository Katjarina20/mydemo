import Comments from '../Comments'
import './style.css'

export default function CommentsList(props) {

    // здесь вначале фильтруем полученный массив комментов, а потом map'им его и вызываем рендер Comments
    const filteredComments = props.comments.filter(comment => comment.postId === props.articleID)

    const commentsElements = filteredComments.map(comment => 
        <li key={comment.id} className="comments-list_li">
            <Comments comment={comment}/>
        </li>
    )
    // Любая JSX разметка в return должна быть обёрнута в любой родительский тег, иначе реакт ругается
    return (
        <ul>
            {commentsElements}
        </ul>
    )
}

