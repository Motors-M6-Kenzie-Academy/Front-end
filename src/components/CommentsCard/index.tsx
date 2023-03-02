import { Card } from "./styles";
import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext } from "react";

interface IComment {
    key?: string;
    content: string;
}
const CommentCard = ({content}: IComment) => {
    const {commentsApi} = useContext(CommentsContext)

    return (
        <Card>
            <div className="headerCard">
                <div className="avatar">{commentsApi.user.name[0]}</div>
                <div className="nameUser">
                    <strong>{commentsApi.user.name}</strong>
                </div>
                <div className="created"></div>
            </div>

            <div className="comment">
                <p>{content}</p>
            </div>
        </Card>
    )
}

export default CommentCard