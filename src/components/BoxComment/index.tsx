import { DivComment } from "./styles";
import {useForm} from "react-hook-form"
import { ICommentsRequest } from "../../interfaces/Comments";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import {CommentsContext} from "../../contexts/CommentsContext"
import { Button } from "../Button";

const BoxComment = (data: any) => {
    const {handleSubmit} = useForm<ICommentsRequest>();
    const {user} = useContext(UserContext)
    const {onSubmitComments} = useContext(CommentsContext)

    return (
        <DivComment>
            <div className="headerBox">
                <div className="avatar">{user!.name[0]}</div>
                <div className="nameUser">
                    <strong>{user!.name}</strong>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmitComments)}>
                <input type="text" placeholder="Carro muito confortável, foi uma ótima experiência de compra..."/>
                <Button
                type="submit"
                backgroud="var(--brand1)"
                color="var(--white)"
                border={true}
                borderColor="var(--brand1)"
                isWidth={true}
                width="100px"
                >
                    Comentar
                </Button>
            </form>

            <div className="tags">
                <span className="ideia">Gostei muito!</span>
                <span className="ideia">Incrível</span>
                <span className="ideia">Recomndarei para meus amigos!</span>
            </div>
            
        </DivComment>
    );
};

export default BoxComment