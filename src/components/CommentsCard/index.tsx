import { Card } from "./styles";
import { IUserResponseComments } from "../../interfaces/User";

interface IComment {
  key?: string;
  content: string;
  createdAt: string;
  user: IUserResponseComments;
}
const CommentCard = ({ content, user, createdAt }: IComment) => {
  return (
    <Card>
      <div className="headerCard">
        <div className="avatar">{user?.name[0]}</div>
        <div className="nameUser">
          <strong>{user?.name}</strong>
        </div>
        <div className="created">{createdAt}</div>
      </div>

      <div className="comment">
        <p>{content}</p>
      </div>
    </Card>
  );
};

export default CommentCard;
