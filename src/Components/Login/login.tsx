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
  Register,
  Container} from './styles';

import {
  Button,
  Form,
  Input,
  Checkbox} from 'antd';
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
          <Title>
            <img src={LoginLogo} alt="login" />
            <p>Faça seu login</p>
          </Title>

          <p style={{ color: '#AFB6C2', fontSize: '16px', }}>Entre com suas informações de cadastro</p>
      


        <FormStyled>
          <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: true }]}
          >
          <Input></Input>
          </Form.Item>

          <Form.Item
            label="Senha"
            name="Senha"
            rules={[{ required: true,  }]}
          >
          <Input.Password/>
          </Form.Item>

        </FormStyled>




          <Enter>
            <p>ENTRAR</p>
          </Enter>
                
          <Register>
            <p style={{color: '#FFC632'}}>Não tem uma conta?{' '}
              <span >Registre-se</span>
            </p>


            </Register>
            </InnerLogin>

          </Background>
          <Image src={SideImage} className="image_disappear"/>
    </Container>
)}