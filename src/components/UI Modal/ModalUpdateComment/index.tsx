import { useForm } from "react-hook-form";
import { CommentsContext } from "../../../contexts/CommentsContext";
import { UIButton } from "../../UI Components/Button";
import { FormContainer } from "../../UI Components/FormContainer";
import { FormGroup } from "../../UI Components/FormGroup";
import { FormTitle } from "../../UI Components/FormTitle";
import { UIInput } from "../../UI Components/Input";
import { useContext } from "react";

type ModalUpdateCommentProps = {
    handleUpdateToggle: () => void;
  };

export const ModalUpdateComments = ( {handleUpdateToggle}: ModalUpdateCommentProps) => {
    const {onPatchComment, commentId, setOpenUpdate} = useContext(CommentsContext);
    const {register, handleSubmit, formState: {errors}} = useForm()    

    const submit = (data: any) => {
        const {content} = data      
        onPatchComment(commentId, content);

      };

    return(
        <FormContainer onSubmit={handleSubmit(submit)}>
            <FormGroup propColumn="row" propJustify="space-between">
                <FormTitle>Editar comentário</FormTitle>
                <UIButton
                onClick={handleUpdateToggle}
                propBG="--transparent"
                propTextColor="--gray1"
                >
                X
                </UIButton>
            </FormGroup>
            
            <FormGroup>
                <UIInput
                propBorder={true}
                type={"text"}
                placeholder="Digitar comentário"
                {...register("content")}
                />
            </FormGroup>

            <FormGroup propColumn="row" propJustify="flex-end">
                <UIButton
                propBG="--gray6"
                propTextColor="--gray2"
                onClick={() => setOpenUpdate(false)}
                type="reset"
                >
                Cancelar
                </UIButton>
                <UIButton propBG="--brand1" type="submit">
                Salvar Alterações
                </UIButton>
            </FormGroup>
        </FormContainer>
    )
}