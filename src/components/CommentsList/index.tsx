import { DivComments } from "./styles";
import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext } from "react";
import CommentCard from "../CommentsCard";

const ListComments = () => {
  const { listComments } = useContext(CommentsContext);

  return (
    <DivComments>
      <h3>Comentários</h3>
      {listComments?.reverse().map((comment) => (
        <CommentCard
          key={comment.id}
          content={comment.content}
          createdAt={comment.createdAt}
          user={comment.user}
        />
      ))}
    </DivComments>
  );
};

export default ListComments;
