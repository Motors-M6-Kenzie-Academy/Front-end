import { DivComments } from "./styles";
import { Card } from "../CommentsCard/styles";
import { CommentsContext } from "../../contexts/CommentsContext";
import { useContext } from "react";

const ListComments = () => {
    const {listComments} = useContext(CommentsContext)

    return (
        <DivComments>
            {
                listComments?.map((comment) => (
                    <Card key={id} comment={comment} />
                ))
            }
        </DivComments>
    )
}

export default ListComments