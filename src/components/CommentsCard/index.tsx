import { Card } from "./styles";
import { IUserResponseComments } from "../../interfaces/User";
import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { UserContext } from "../../contexts/UserContexts";

interface IComment {
  id: string;
  key?: string;
  content: string;
  createdAt: string;
  user: IUserResponseComments;
  handleUpdateToggle: () => void;
}

const CommentCard = ({
  id,
  content,
  user,
  createdAt,
  handleUpdateToggle,
}: IComment) => {
  const { onDelComment, setCommentId } = useContext(CommentsContext);
  const { userLogged } = useContext(UserContext);
  const date = createdAt.split("T")[0];

  const up = () => {
    setCommentId(id);
    handleUpdateToggle();
  };

  return (
    <>
      <Card>
        <div className="headerCard">
          <div className="container--split">
            <div className="avatar">{user?.name[0]}</div>
            <div className="nameUser">
              <strong>{user?.name}</strong>
            </div>
          </div>
          <div className="container--split">
            <div className="created">{date}</div>
          </div>
          {userLogged?.id === user.id && (
            <div className="iconsCard">
              <AiFillEdit
                type="button"
                onClick={() => up()}
                className="iconEdit"
              />
              <AiFillDelete type="button" onClick={() => onDelComment(id)} />
            </div>
          )}
        </div>

        <div className="comment">
          <p>{content}</p>
        </div>
      </Card>
    </>
  );
};

export default CommentCard;
