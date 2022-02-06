import {Form, Input} from 'antd';
import styled from "styled-components"

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  display: flex;
  height: 100vh;
  @media (max-width:1000px){
    img{    
    display: none;
  }

}
`
export const Background = styled.div`
  font-family: 'Poppins';
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media (max-width: 1000px){
    background-color: #191816;
    width: 350px;
  }
  display: flex;
  align-items: center;

`;
export const InnerInnerLogin = styled.div`
  width: 350px;
  align-items: left; 
  .password-info{
    display: flex;
    font-weight: 600;
    color: #FFC632;
    font-size: 14px;
    gap: 10px;
    p{
    margin-right: 80px;
    color: #D4CCB6;
    font-size: 14px;
  }
}
`
export const Logo = styled.div`
  display: flex;
  position: absolute;
  gap: 10px;
  top: 30px;
  left: 40px;
  justify-self: flex-start;
  @media (max-width: 1000px){
    position: absolute;
  }
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
    margin-top: 20px;
  label{
    color: #AFB6C2;
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
      color: #AFB6C2;
  }
  .ant-form-item{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  Input{
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 40px;
    background: #24221F;
    border: 1px solid #868686;
    box-sizing: border-box;
    border-radius: 4px;
  }
  .senha{


}
`

export const InputStyled = styled(Input)`
  width: 100%;
`

export const Enter = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: none;
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

