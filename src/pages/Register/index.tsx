import InputContainer from "../../components/Imputs";
import Navbar from "../../components/Navbar";
import {
  inputsAccountTypeForm,
  inputsAddressFirstSelectForm,
  inputsAddressForm,
  inputsAddressSecondSelectForm,
  inputsUserForm,
} from "../../utils/formRegisterData";
import {
  FormSelectType,
  Container,
  FormContainer,
  MainContainer,
  Button,
} from "./styles";

export const Register = () => {
  return (
    <Container>
      <Navbar />
      <MainContainer>
        <FormContainer>
          <h2>Cadastro</h2>
          <p>informações pessoais</p>
          <div>
            {inputsUserForm.map((user) => (
              <InputContainer
                label={user.label}
                placeHolder={user.placeHolder}
                typeInput={user.type}
                key={user.label}
              />
            ))}
          </div>
          <p>informações de endereço</p>
          <div>
            {inputsAddressForm.map((address) =>
              address.label === "CEP" ? (
                <>
                  <InputContainer
                    label={address.label}
                    placeHolder={address.placeHolder}
                    typeInput={address.type}
                    key={address.label}
                  />
                  <div className="teste">
                    {inputsAddressFirstSelectForm.map((address) => (
                      <InputContainer
                        label={address.label}
                        placeHolder={address.placeHolder}
                        typeInput={address.type}
                        key={address.label}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <InputContainer
                    label={address.label}
                    placeHolder={address.placeHolder}
                    typeInput={address.type}
                    key={address.label}
                  />
                  <div className="teste">
                    {inputsAddressSecondSelectForm.map((address) => (
                      <InputContainer
                        label={address.label}
                        placeHolder={address.placeHolder}
                        typeInput={address.type}
                        key={address.label}
                      />
                    ))}
                  </div>
                </>
              )
            )}
          </div>
          <p>Tipo de conta</p>
          <div className="form-account-type">
            {inputsAccountTypeForm.map((account) => (
              <FormSelectType
                value={account.label}
                disabled
                bgColor={account.bgColor}
                border={account.border}
              />
            ))}
          </div>
          <div className="form-submit-action">
            <InputContainer
              label={"Senha"}
              placeHolder={"Digitar Senha"}
              typeInput={"password"}
              key={"Senha"}
            />
            <InputContainer
              label={"Confirmar Senha"}
              placeHolder={"Digitar Senha"}
              typeInput={"password"}
              key={"Confirmar Senha"}
            />
          </div>
          <div>
            <Button bgColor="blue" txColor="white">
              Finalizar Cadastro
            </Button>
          </div>
        </FormContainer>
      </MainContainer>
      {/* <Footer /> */}
    </Container>
  );
};
