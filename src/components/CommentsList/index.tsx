import { DivComments } from "./styles";
import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext } from "react";
import CommentCard from "../CommentsCard";

type ModalUpdateProps = {
  handleUpdateToggle: () => void
}

const ListComments = ({handleUpdateToggle}: ModalUpdateProps) => {
  const { listComments } = useContext(CommentsContext);

  return (
    
    <DivComments>
      <h3>Comentários</h3>
      {listComments?.reverse().map((comment) => (
        <CommentCard
          id={comment.id}
          key={comment.id}
          content={comment.content}
          createdAt={comment.createdAt}
          user={comment.user}
          handleUpdateToggle={handleUpdateToggle}
        />
      ))}
    </DivComments>
  );
};

export default ListComments;
