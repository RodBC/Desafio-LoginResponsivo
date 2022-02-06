import React from "react";
import { Checkbox } from 'antd';

import {
  Background, 
  FormStyled,
  InnerLogin,
  InputStyled,
  Logo,
  Title,
  Image,
  Enter,
  Register,
  Container,
  InnerInnerLogin} from './styles';

import {
  Button,
  Form,
  Input,
} from 'antd';
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
              style={{ color: '#AFB6C2', fontSize: '16px', }}>Entre com suas informações de cadastro</p>
            <FormStyled>
              <Form.Item
                label="E-mail"
                rules={[{ required: true }]}
              >
              <Input
              placeholder='seu email'></Input>
              </Form.Item>
              <Form.Item
                label="Senha"
                rules={[{ required: true,  }]}
              >
              <div className="senha">
                <Input.Password
                placeholder={`sua senha`}
/>

              </div>
              </Form.Item>
            <Form.Item>
            </Form.Item>
            </FormStyled>
            
            <div className="password-info">
              <Checkbox>
              </Checkbox>
              <p >lembre-me</p>
              <span>esqueci minha senha</span>
            </div>

              <Enter>
                <p>ENTRAR</p>
              </Enter>
            <Register>
             <p style={{color: '#FFC632'}}>Não tem uma conta?{' '}
                  <span >Registre-se</span>
                </p>
                  </Register>
                </InnerInnerLogin>
              </InnerLogin>
          </Background>
        <Image src={SideImage} className="image_disappear"/>
      </Container>
)}
