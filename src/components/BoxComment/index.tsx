import { DivComment } from "./styles";
import { useForm } from "react-hook-form";
import { ICommentsRequest } from "../../interfaces/Comments";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { CommentsContext } from "../../contexts/CommentsContext";
import { Button } from "../Button";

const BoxComment = () => {
  const { register, handleSubmit } = useForm<ICommentsRequest>();
  const { userLogged } = useContext(UserContext);
  const { onSubmitComments, autoPost} = useContext(CommentsContext);

  return (
    <DivComment>
      <div className="headerBox">
        <div className="avatar">{userLogged?.name[0]}</div>
        <div className="nameUser">
          <strong>{userLogged?.name}</strong>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmitComments)}>
        <input
          type="text"
          placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
          {...register("content")}
        />
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
          <button className="ideia" onClick={() => autoPost({content: "Gostei muito!"})}>Gostei muito!</button>
          <button className="ideia" onClick={() => autoPost({content: "Incrível!"})}>Incrível</button>
          <button className="ideia" onClick={() => autoPost({content: "Recomendarei para meus amigos!"})}>Recomendarei para meus amigos!</button>
      </div>

      
    </DivComment>
  );
};

export default BoxComment;
