import{Wrapper, TitleWrapper, GoLoginBtn,
    GoOptionBtn, ConsentWrapper, BtnWrapper,
    Title1, Title2, Title3, Title12
    
} from '../../../Login_mks/fashion/styles/Boardswelcome'

import {useState} from "react";

export default function BoardsWelcomePage(){
    const onClickGoLogin=()=>{
        window.location.href="http://localhost:3000/boards/login";
    }

    const onClickSelectStyle=()=>{
        window.location.href="http://localhost:3000/boards/signIn/selectYourstyle";
    }

    return(
        <>
        <Wrapper>
            <ConsentWrapper>
                <TitleWrapper>
                    <Title1>MOFY</Title1>
                    <Title2>의</Title2>
                    <Title3>가입을 환영합니다.</Title3>
                </TitleWrapper>
                <BtnWrapper>
                    <GoLoginBtn onClick={onClickGoLogin}>
                        로그인하러 가기
                    </GoLoginBtn>
                    <GoOptionBtn onClick={onClickSelectStyle}>
                        개인정보 입력하러 가기
                    </GoOptionBtn>
                </BtnWrapper>
            </ConsentWrapper>
        </Wrapper>
        </>
    )
}