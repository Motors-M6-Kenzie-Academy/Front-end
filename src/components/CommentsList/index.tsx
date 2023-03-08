import { DivComments } from "./styles";
import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext } from "react";
import CommentCard from "../CommentsCard";
import LoadingAnimation from "../LoadingAnimation";

type ModalUpdateProps = {
  handleUpdateToggle: () => void
}

const ListComments = ({handleUpdateToggle}: ModalUpdateProps) => {
  const { listComments, isLoading } = useContext(CommentsContext);

  return (
    
    <DivComments>
      <h3>Comentários</h3>
      {isLoading ? (
        <LoadingAnimation />
      ) : listComments.length === 0 ? (
        <div className="container--empty">
          <p>Esse anúncio ainda não possui comentários.</p>
        </div>
      ) : (
        listComments?.map((comment) => (
          <CommentCard
          id={comment.id}
          key={comment.id}
          content={comment.content}
          createdAt={comment.createdAt}
          user={comment.user}
          handleUpdateToggle={handleUpdateToggle}
          />
        ))
      )}
    </DivComments>
  );
};

export default ListComments;
