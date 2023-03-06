import { Card } from "./styles";
import { IUserResponseComments } from "../../interfaces/User";
import { CommentsContext } from "../../contexts/CommentsContext";
import {useContext} from "react"

interface IComment {
  key?: string;
  content: string;
  createdAt: string;
  user: IUserResponseComments;
}
const CommentCard = ({ content, user, createdAt }: IComment) => {
  const {onDelComment, commentsApi} = useContext(CommentsContext)
  const id = commentsApi.id

  return (
    <Card>
      <div className="headerCard">
        <div className="avatar">{user?.name[0]}</div>
        <div className="nameUser">
          <strong>{user?.name}</strong>
        </div>
        <div className="created">{createdAt}</div>
        <button type="button" onClick={() => onDelComment(id)}>X</button>
      </div>

      <div className="comment">
        <p>{content}</p>
      </div>
    </Card>
  );
};

export default CommentCard;
