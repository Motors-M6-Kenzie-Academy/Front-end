import { Card } from "./styles";
import { IUserResponseComments } from "../../interfaces/User";
import { CommentsContext } from "../../contexts/CommentsContext";
import {useContext} from "react"
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

interface IComment {
  id: string;
  key?: string;
  content: string;
  createdAt: string;
  user: IUserResponseComments;
  handleUpdateToggle: () => void
}






const CommentCard = ({ id, content, user, createdAt, handleUpdateToggle }: IComment) => {
  const {onDelComment, setCommentId} = useContext(CommentsContext)

  const up = () => {
    setCommentId(id)
    handleUpdateToggle()
  }
  
  return (
    <>
    <Card>
      <div className="headerCard">
        <div className="avatar">{user?.name[0]}</div>
        <div className="nameUser">
          <strong>{user?.name}</strong>
        </div>
        <div className="created">{createdAt}</div>

        <div className="iconsCard">
          <AiFillEdit type="button" onClick={() => up()} className="iconEdit"/>
          <AiFillDelete type="button" onClick={() => onDelComment(id)} />
        </div>
      </div>

      <div className="comment">
        <p>{content}</p>
      </div>
    </Card>

    
    </>
  );
};

export default CommentCard;
