import { DivComments } from "./styles";
import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext } from "react";
import CommentCard from "../CommentsCard";

const ListComments = () => {
    const {listComments} = useContext(CommentsContext)
    
    return (
        <DivComments>
            {
                listComments?.map((comment) => (
                    <CommentCard key={comment.id} content={comment.content} />
                ))
            }
        </DivComments>
    )
}

export default ListComments