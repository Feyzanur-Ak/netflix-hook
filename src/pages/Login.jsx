
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form"

const Container=styled.div`
display: flex;
flex-direction: column;
gap:2rem;
align-items: center;
align-content: center;

`;
 const ContactBox=styled.div`
display: flex;
flex-direction: column;
gap:2rem;
align-items: center;
margin-top:20%;
background-color:black;
border-radius: 0.5rem;
width: 500px;
height:500px;
`;

const Input=styled.div`
margin-top: 8rem;
display: flex;
flex-direction: column;
gap:2rem;
align-items: center;
`;

const Email=styled.input`
width:300px;
height: 50px;

`;

const Password=styled.input`
width:300px;
height: 50px;
`;

const Button=styled.button`
width: 310px;
height: 50px;
border-radius: 5px;
color:white;
font-weight:bold;
background-color:#e34653;
font-size: 1.1rem;

`;

const ErrorMessage = styled.span`
  color: #ff6961; 
  font-size: 1rem;
`;

const Checked=styled.input`
width: 15px;
height: 15px;
appearance: none; // var olan görünüm göstermez
background-color: ${props => props.isChecked ? 'gray' : 'lightgray'};
cursor: pointer;


&::after {
    content: ${props => props.isChecked ? "'✔'" : "''"}; // apparance a yok dedik bu kendi oluşturduğumuz
    color: black;
    text-align: center;
  }
`;

const Head=styled.h1`
color:white;
font-weight: bold;

`;
const Login = () => {

   const history=useHistory();

    const { register,watch,formState: { errors, isValid }, handleSubmit,
      } = useForm({  mode: "onChange",defaultValues: {
        rememberMe: false 
      }});

      const onSubmit = (data) => {
        console.log(data);
        history.push("/welcome");
      };
      const isChecked = watch("rememberMe");



  return (
    <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Head >KAYIT OL</Head>
            <ContactBox>
             <Input>
                <Email 
                type="text" 
                placeholder="E mail adresi"
                {...register("email", {
                    required: "Email gereklidir",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Geçerli bir email adresi girin"
                    }
                  })} 
                />
                  {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                  </Input>
                <Password 
                type="password" 
                placeholder="Şifre"
                {...register("password", { required: "Şifre gereklidir",
                    minLength: {
                      value: 6,
                      message: "Şifre en az 6 karakter olmalıdır" } })} />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                        <Button disabled={!isValid}>Kayıt Ol</Button>
                      <div style={{color:"white", display:"flex", justifyContent:"space-between"}} >
          <Checked isChecked={isChecked} type="checkbox" {...register("rememberMe")}/> 
          Beni Hatırla
          <a style={{textDecoration:"none"}}href="#">Yardıma mı ihtiyacınız var</a>
          </div>
            </ContactBox>
           
        </form>
    </Container>
  )
}

export default Login
