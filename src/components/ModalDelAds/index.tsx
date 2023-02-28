import { ContainerDel } from "./styles";
import { useContext } from "react";
import { AdsContext } from "../../contexts/AdsContexts";

const ModalDelete = (ads: any) => {
    const {isOpenModalDelete, setIsOpenModalDelete, delAds, adsApi} = useContext(AdsContext)
    const id = adsApi.id

    return(
        <>
        {
            isOpenModalDelete && (
                <ContainerDel>
                    <div className="modalBox">
                        <div className="headerModal">
                            <h2>Excluir anúncio</h2>
                            <button type="button" className="btnClose" onClick={() => setIsOpenModalDelete(false)}>X</button>
                        </div>
            
                        <div className="divText">
                            <h2>Tem certeza que deseja remover este anúncio?</h2>
                            <p>Essa ação não pode ser desfeita. Isso excluirá permanentemente o anúncio e removerá as informações do mesmo dos nossos servidores.</p>
                        </div>

                        <div className="divButton">
                            <button type="button" onClick={() => setIsOpenModalDelete(false)}>Cancelar</button>
                            <button className="btnExclude" onClick={() => delAds(id)}>Sim, excluir anúncio</button>
                        </div>
                    </div>
                </ContainerDel>
            )
        }
        </>
        )
}

export default ModalDelete