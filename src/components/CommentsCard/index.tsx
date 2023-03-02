import { Card } from "./styles";
import { UserContext } from "../../contexts/UserContexts";
import { useContext } from "react";

const CommentCard = () => {
    const {user} = useContext(UserContext)

    return (
        <Card>
            <div className="headerCard">
                <div className="avatar">{user!.name[0]}</div>
                <div className="nameUser">
                    <strong>{user!.name}</strong>
                </div>
            </div>

            <div className="comment">
                <p></p>
            </div>
        </Card>
    )
}

export default CommentCard