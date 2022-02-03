import {Form, Input} from 'antd';
import styled from "styled-components"

export const Container = styled.div`
  justify-content: space-between;
  display: flex;
  height: 100vh;
  img{
    width: fit-content;
  }
`
export const Background = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  font-family: 'Poppins';
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #191816;
  color: #D5CCB6;
  width: 100%;
`

export const InnerLogin = styled.div`

  width: 650px;
  height: 450px;
  display: flex;

  justify-content: center;
  flex-direction: column;
  background-color:#24221F;
  display: flex;
  align-items: center;
  

`;
export const Logo = styled.div`
  display: flex;
  position: absolute;
  gap: 10px;
  top: 30px;
  left: 40px;
  justify-self: flex-start;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  p {
    font-weight: 600;
    color: #D4CCB6;
    font-size: 24px;
  }
`


export const FormStyled = styled(Form)`
  label{
    color: #AFB6C2;
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
      color: #AFB6C2;
  }
  .ant-form-item{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  Input{
    width: 100%;
  }
`
export const InputStyled = styled(Input)`
  width: 100%;
`
export const PasswordInfos = styled.div`
display: flex;
align-items: center;
p {
    color: #FFC632;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }
`
export const Enter = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFC632;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  cursor: pointer;
  :hover {
    background-color: #d1a124;
    transition: .5s;
  }
`;
export const Register = styled.div`
    color: '#FFC632'; 
    font-size: 20px;
    margin-top: 10px;

span{
    font-weight: 600;
    cursor: 'pointer' 
  }
  p{
    text-align: 'center';
    margin-top: '15px'
}
`

export const Image = styled.img``