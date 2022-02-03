import React from "react";
import {
  Background, 
  FormStyled,
  InnerLogin,
  InputStyled,
  Logo,
  Title,
  Image,
  PasswordInfos,
  Enter,
  Register} from './styles';
import {Button, Form, Input} from 'antd';
import {
    SideImage,
    LogoCamp,
    LoginLogo,
    Mail,
    Eye,
    Lock,
  } from '../../Assets';

export const Login = () =>{
    return(
    <Background>
        <Logo>
          <img src={LogoCamp} alt="logo" />
          <h3>camp.in</h3>
        </Logo>

          <InnerLogin>
                <Title>
              <img src={LoginLogo} alt="login" />
              <p>Faça seu login</p>
                </Title>
<p style={{ color: '#AFB6C2', fontSize: '16px', }}>Entre com suas informações de cadastro</p>               
    
                <FormStyled>
                        <Form.Item
                        label='E-mail'
                        rules={
                          [{
                           required: true,
                           message: "campo obrigatório"
                          }]
                        }
                     >
                         <InputStyled/>
                     </Form.Item>

            <Form.Item
              label="Senha"
              rules={
                [{
                  required: true,
                  message: 'Campo obrigatório'
                }]
              }
            >

              <Input/>
              <PasswordInfos>
              <FormStyled
                style={{ color: '#868686' }}
                name="Lembre-me"                  
/>
                  <p>Esqueci minha senha</p>

              </PasswordInfos>            

              <Enter>
                <p>ENTRAR</p>
              </Enter>

            <Register> 
            <p style={{color: '#FFC632'}}>Não tem uma conta?{' '}
              <span >Registre-se</span>
            </p>
            </Register>
                    </Form.Item>
                    </FormStyled>
            </InnerLogin>
            <Image src={SideImage}/>
        </Background>
    )
}