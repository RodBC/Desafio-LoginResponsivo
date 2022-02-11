import React from "react";

import {
  Background, 
  FormStyled,
  InnerLogin,
  Logo,
  Title,
  Image,
  Enter,
  Register,
  Container,
  InnerInnerLogin,
  CheckboxStyled,
} from './styles';

import {
  Form,
  Input,
} from 'antd';
import {
  SideImage,
  LogoCamp,
  LoginLogo,
  Mail,
  } from '../../Assets';

  export const Login: React.ElementType = () => {
  
    return(
      <Container>
        <Background>

          <Logo>
            <img src={LogoCamp} alt="logo" />
            <h3>camp.in</h3>
          </Logo>
            <InnerLogin>
              <InnerInnerLogin>

              <Title>
                <img src={LoginLogo} alt="login" />
                <p>Faça seu login</p>
              </Title>
              <p className="paragrafoInicial"
              style={{ color: '#AFB6C2', fontSize: '16px', fontWeight: '600' }}>Entre com suas informações de cadastro</p>
            

            <FormStyled>
              <Form.Item
                label="E-mail"
                rules={[{ required: true }]}
              >
                <Input
                  placeholder='seu email'
                />
              </Form.Item>

              <Form.Item
                label="Senha"
                rules={[{ required: true,  }]}              
              >
                <div className="senha"> 
                  <Input.Password 
                    placeholder={`sua senha`}>
                  </Input.Password>                  
                </div>
              </Form.Item>

            </FormStyled>

            <div className="password-info">
              <CheckboxStyled >
                Lembre-me
              </CheckboxStyled>
              <span>Esqueci minha senha</span>
            </div>

              <Enter>
                <p>ENTRAR</p>
              </Enter>

                <Register>
                  <p style={{color: '#FFC632'}}>Não tem uma conta?{' '}
                    <span className="register">Registre-se</span>
                  </p>
                </Register>
              </InnerInnerLogin>
            </InnerLogin>
          </Background>
        <Image src={SideImage} className="image_disappear"/>
      </Container>
)}
