import {Wrapper, ConsentWrapper, IdIcon, IconWrapper,
    PwIcon, Line, EmailIcon, IdInput, IdWrapper,
    NameIcon,NameInput,NameWrapper, PwWrapper,
    PwInput, EmailWrapper,EmailInput, NextButton,
    SubTitle, ErrorMsg, PwCheckWrapper, PwCheckInput
}from '../../../Login_mks/fashion/styles/BoardssignIn'

import {Title, TitleWrapper} from '../../../Login_mks/fashion/styles/BoardsfindId'

import {useState} from "react";
import {useEffect} from "react";

export default function BoardsSignInPage() {

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const [email, setEmail] = useState("");

    const [nameError, setNameError] = useState("");
    const [idError, setIdError] = useState("");
    const [pwError, setPwError] = useState("");
    const [pwCheckError, setPwCheckError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwMatchError, setPwMatchError] = useState("");

    const onChangeName=(event)=>{
        setName(event.target.value)
        if(event.target.value !== ""){
            setNameError("")
        }
    }

    const onChangeId=(event)=>{
        const userInput = event.target.value;

        // 정규식을 사용하여 한글 여부 확인
        const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const isKorean = koreanRegex.test(userInput);

        setId(userInput);

        if (isKorean) {
            setIdError("영어와 숫자로만 입력해주세요.");
        } else {
            setIdError("");
        }
    }
    const onChangePw = (event) =>{
        setPw(event.target.value)
        if(event.target.value !== ""){
            setPwError("")
        }
    }

    const onChangePwCheck = (event) => {
        const newPasswordCheck = event.target.value;
        setPwCheck(newPasswordCheck);

        if (newPasswordCheck !== pw) {
            setPwMatchError("비밀번호가 일치하지 않습니다.");
        } else {
            setPwMatchError("");
        }
    }

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            setEmailError("");
            return true; // 유효한 이메일 형식이면 true 반환
        } else {
            setEmailError("올바른 이메일 형식을 입력해주세요.");
            return false; // 올바르지 않은 이메일 형식이면 false 반환
        }
    };

    const onClickNext = () => {
        const isValidEmail = validateEmail();

        if (!name) {
            setNameError("이름을 입력해주세요.");
        }
        if (!id) {
            setIdError("아이디를 입력해주세요.");
        }
        if (!pw) {
            setPwError("비밀번호를 입력해주세요");
        }
        if (!pwCheck) {
            setPwCheckError("비밀번호를 입력해주세요");
        }
        if (pw !== pwCheck) {
            setPwMatchError("비밀번호가 일치하지 않습니다.");
        }

        if (isValidEmail && name && id && pw && pwCheck && !pwMatchError) {
            alert("회원가입 완료!");
            window.location.href = "http://localhost:3000/boards/welcome";
        } else {
            // 이메일이 올바르지 않거나 다른 필수 정보가 누락되었거나 비밀번호 확인이 일치하지 않으면 에러 메시지 표시
            alert("모든 정보를 옳바르게 기입해 주세요.");
        }
    };

    const enterKeyPress = (event) => {
        if (event.key === 'Enter') {
            onClickNext();
        }
    }

    return(
        <>
        <Wrapper>
            <TitleWrapper>
                <Title>
                    MOFY
                </Title>
            </TitleWrapper>
            <SubTitle>
                회원가입
            </SubTitle>
            <ConsentWrapper>
                <NameWrapper>
                    <NameInput type="text " maxlength={20} size="50" placeholder="이름" onChange={onChangeName} onKeyPress={enterKeyPress} />
                    <ErrorMsg>{nameError}</ErrorMsg>
                </NameWrapper>
                <IdWrapper>
                    <IdInput type="text " maxlength={20} size="50" placeholder="아이디" onChange={onChangeId} onKeyPress={enterKeyPress}/>
                    <ErrorMsg>{idError}</ErrorMsg>
                </IdWrapper>
                <PwWrapper>
                    <PwInput type="password" maxlength={20} size="50" placeholder="비밀번호" onChange={onChangePw} onKeyPress={enterKeyPress}/>
                    <ErrorMsg>{pwError}</ErrorMsg>
                </PwWrapper>
                <PwCheckWrapper>
                    <PwCheckInput type="password" maxlength={20} size="50" placeholder="비밀번호 확인" onChange={onChangePwCheck} onKeyPress={enterKeyPress}/>
                    <ErrorMsg>{pwCheckError}</ErrorMsg>
                    <ErrorMsg>{pwMatchError}</ErrorMsg>
                </PwCheckWrapper>
                <EmailWrapper>
                    <EmailInput type="text " maxlength={20} size="50" placeholder="이메일" value={email} onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail();
                    }} onKeyPress={enterKeyPress}/>
                    <ErrorMsg>{emailError}</ErrorMsg>
                </EmailWrapper>
            </ConsentWrapper>
            <NextButton onClick={onClickNext}>
                다음
            </NextButton>
        </Wrapper>
        </>

    )
}
