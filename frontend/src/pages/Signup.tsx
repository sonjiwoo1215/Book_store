import styled from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import { Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";


export interface SignupProps {
    email: string;
    password: string;   
}

function Signup() {
  const {userSignup} = useAuth();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    // };

    // useForm 훅을 이용한 폼 상태 설정
    const {
        register, // 입력 필드를 react-hook-form에 등록
        handleSubmit, // 제출 이벤트 핸들러
        formState: {errors}, // 유효성 검사 에러 객체
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
      userSignup(data);
    };

  return (
    <>
      <Title size="large">회원가입</Title>
      <SignupStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <InputText placeholder="이메일" inputType="email"
            // value={email} onChange={(e)=>setEmail(e.target.value)}
            {...register("email", {required: true})}
             />
             {errors.email && <p className="error-text">이메일을 입력하세요</p>}  
          </fieldset>
          <fieldset>
            <InputText placeholder="비밀번호" inputType="password"
            // value={password} onChange={(e)=>setPassword(e.target.value)}
            {...register("password", {required: true})}
            />
            {errors.password && <p className="error-text">비밀번호를 입력하세요</p>}
          </fieldset>
          <fieldset>
            <Button type="submit" size="medium" scheme="primary">
              회원가입
            </Button>
          </fieldset>
          <div className="info">
            <Link to="/reset">비밀번호 초기화</Link>
          </div>
        </form>
      </SignupStyle>
    </>
  );
}

export const SignupStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin: 80px auto;

  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    .error-text {
      color: red;
    }
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }

  .info {
    text-align: center;
    padding: 16px 0 0 0;
  }
`;

export default Signup;
