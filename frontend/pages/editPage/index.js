import {
    Wrapper, Top, Mid, Bottom, Title, TitleWrapper,
    TopButton, Divide, EditText, EditImgWrapper,
    EditNameWrapper, EditPWWrapper, EditClothTypeWrapper,
    EditSkinTypeWrapper, EditUserSizeWrapper, DeleteUser,
    UserImg, EditNameText, EditNameInput, EditPWText,
    EditPWInput, EditUserSizeInput, EditClothTypeText,
    EditSkinTypeText, EditUserHeightText, EditUserWeightText,
    EditUserFootText, OverlayImage,
    EditUser, EditTypeButtonWrapper, EditTypeButton,
    EditUserSizeSubText, EditUserSizeSubWrapper,
    ConsentWrapper, OverlayImageInput, Check, EditUserSizeTextWrapper
} from '../../styles/editPageStyle'
import {useEffect, useRef, useState} from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
const onClickHome = () => {
    window.location.href = "http://localhost:3000/mainPage";
}
const onClickDelete = () => {
    window.location.href = "http://localhost:3000/deletePage";
}
// 버튼을 클릭했을 때 호출되는 함수입니다.
const onClickLogout = () => {
    Cookies.remove('access_token');
    window.location.href = "http://localhost:3000/mainPage";
}

export default function BoardNewPage() {
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();
    const [name, setName]= useState("");
    const [pw, setPw] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [shoeSize, setShoeSize] = useState("");

    const [simple, setSimple] = useState(false);
    const [modern, setModern] = useState(false);
    const [feminine, setFeminine] = useState(false);
    const [dandy, setDandy] = useState(false);
    const [retro, setRetro] = useState(false);
    const [minimal, setMinimal] = useState(false);
    const [casual, setCasual] = useState(false);
    const [street, setStreet] = useState(false);
    const [sporty, setSporty] = useState(false);
    const [urban, setUrban] = useState(false);
    const [classic, setClassic] = useState(false);

    const [normal, setnormal] = useState(false);
    const [dry, setdry] = useState(false);
    const [oily, setoily] = useState(false);
    const [combination, setcombination] = useState(false);
    const [sensitive, setsensitive] = useState(false);
    const [acne, setacne] = useState(false);


    const [nameError, setNameError] = useState("");
    const [pwError, setPwError] = useState("");
    const [heightError, setHeightError] = useState("");
    const [weightError, setWeightError] = useState("");
    const [shoeSizeError, setShoeSizeError] = useState("");



    const onChangeName=(event)=>{
        setName(event.target.value)
        if(event.target.value !== ""){
            setNameError("")
        }
    }
    const onChangePw=(event)=>{
        setPw(event.target.value)
        if(event.target.value !== ""){
            setPwError("")
        }
    }
    const onChangeHeight=(event)=>{
        setHeight(event.target.value)
        if(event.target.value !== ""){
            setHeightError("")
        }
    }
    const onChangeWeight=(event)=>{
        setWeight(event.target.value)
        if(event.target.value !== ""){
            setWeightError("")
        }
    }
    const onChangeShoeSize=(event)=>{
        setShoeSize(event.target.value)
        if(event.target.value !== ""){
            setShoeSizeError("")
        }
    }
    const onClickSimple = () => {
        if (!simple){
            setSimple(true);
        }
        else{
            setSimple(false);
        }
    }
    const onClickModern = () => {
        if (!modern){
            setModern(true);
        }
        else{
            setModern(false);
        }
    }
    const onClickFeminine = () => {
        if (!feminine){
            setFeminine(true);
        }
        else{
            setFeminine(false);
        }
    }
    const onClickDandy = () => {
        if (!dandy){
            setDandy(true);
        }
        else{
            setDandy(false);
        }
    }
    const onClickRetro = () => {
        if (!retro){
            setRetro(true);
        }
        else{
            setRetro(false);
        }
    }
    const onClickMinimal = () => {
        if (!minimal){
            setMinimal(true);
        }
        else{
            setMinimal(false);
        }
    }
    const onClickCasual = () => {
        if (!casual){
            setCasual(true);
        }
        else{
            setCasual(false);
        }
    }
    const onClickStreet = () => {
        if (!street){
            setStreet(true);
        }
        else{
            setStreet(false);
        }
    }
    const onClickSporty = () => {
        if (!sporty){
            setSporty(true);
        }
        else{
            setSporty(false);
        }
    }
    const onClickUrban = () => {
        if (!urban){
            setUrban(true);
        }
        else{
            setUrban(false);
        }
    }
    const onClickClassic = () => {
        if (!classic){
            setClassic(true);
        }
        else{
            setClassic(false);
        }
    }


    const onClicknormal = () => {
        if (!normal){
            setnormal(true);
        }
        else{
            setnormal(false);
        }
    }
    const onClickdry = () => {
        if (!dry){
            setdry(true);
        }
        else{
            setdry(false);
        }
    }
    const onClickoily = () => {
        if (!oily){
            setoily(true);
        }
        else{
            setoily(false);
        }
    }
    const onClickcombination = () => {
        if (!combination){
            setcombination(true);
        }
        else{
            setcombination(false);
        }
    }
    const onClicksensitive = () => {
        if (!sensitive){
            setsensitive(true);
        }
        else{
            setsensitive(false);
        }
    }

    const onClickacne = () => {
        if (!acne){
            setacne(true);
        }
        else{
            setacne(false);
        }

    }

    const accessToken = Cookies.get('access_token');
    const onClickSave = () => {
        if (name && pw && height && weight && shoeSize){
            axios.post('http://127.0.0.1:8000/useredit/', {
                name: name,
                pw: pw,
                weight: weight,
                height: height,
                shoeSize: shoeSize,
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .catch(error => {
                    console.error('서버 요청 오류:', error);
                });


            axios.post('http://127.0.0.1:8000/clothTypeSet/', {
                Simple: simple,
                Modern: modern,
                Feminine: feminine,
                Dandy: dandy,
                Retro: retro,
                Minimal: minimal,
                Casual: casual,
                Street: street,
                Sporty: sporty,
                Urban: urban,
                Classic: classic,
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .catch(error => {
                    console.error('서버 요청 오류:', error);
                });

            axios.post('http://127.0.0.1:8000/skinTypeSet/', {
                normal: normal,
                dry: dry,
                oily: oily,
                combination: combination,
                sensitive: sensitive,
                acne: acne,
                simple: simple,
                modern: modern,
                feminine: feminine,
                casual: casual,
                street: street,
                sporty: sporty,
                urban: urban,
                classic: classic,

                // skinType: Array.from(skinTypeArray),
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .catch(error => {
                    console.error('서버 요청 오류:', error);
                });

            window.location.href="http://localhost:3000/myPage"
        } else{
           alert('모든 정보를 입력해주세요.')
        }
    }


    // 이미지 업로드 input의 onChange
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
        };

        // Upload the image to Django backend
        const formData = new FormData();
        formData.append('image', file);

        axios.post('http://localhost:8000/upload_image/', formData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                console.log('Image uploaded successfully:', response.data);
                // Optionally, you can update the UI or perform other actions after a successful upload
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    };

    // 유저 정보 fetch
    useEffect(() => {
        const fetchUserInfo = async() => {

            // 프로필 사진
            try {
                const response = await axios.get('http://127.0.0.1:8000/user_image/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setImgFile(response.data.profile_image_url);
            } catch (error) {
                console.error('서버 요청 오류:', error);
            }

            // 이름
            try {
                const userResponse = await axios.get('http://127.0.0.1:8000/userinfo/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setName(userResponse.data.username);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            // 키
            try {
                const response = await axios.get('http://127.0.0.1:8000/userinfo3/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setHeight(response.data.height);
            } catch (error) {
                console.error('서버 요청 오류:', error);
            }

            // 몸무게
            try {
                const response = await axios.get('http://127.0.0.1:8000/userinfo2/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setWeight(response.data.weight);
            } catch (error) {
                console.error('서버 요청 오류:', error);
            }

            // 발 사이즈
            try {
                const response = await axios.get('http://127.0.0.1:8000/userinfo4/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                setShoeSize(response.data.shoeSize);
            } catch (error) {
                console.error('서버 요청 오류:', error);
            }
        }
        fetchUserInfo();
    }, [accessToken]);

    // 옷, 피부 타입 fetch
    useEffect(() => {
        const typeFetch = async() => {

            // 옷
            try {
                const response = await axios.get('http://127.0.0.1:8000/clothTypeView/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                console.log("true값 확인")
                console.log(response.data.Simple)
                if(response.data.Simple === true) {setSimple(true)}
                if(response.data.Modern === true) {setModern(true)}
                if(response.data.Feminine === true) {setFeminine(true)}
                if(response.data.Dandy === true) {setDandy(true)}
                if(response.data.Retro === true) {setRetro(true)}
                if(response.data.Minimal === true) {setMinimal(true)}
                if(response.data.Casual === true) {setCasual(true)}
                if(response.data.Street === true) {setStreet(true)}
                if(response.data.Sporty === true) {setSporty(true)}
                if(response.data.Urban === true) {setUrban(true)}
                if(response.data.Classic === true) {setClassic(true)}
            } catch (error) {
                console.error('서버 요청 오류:', error);
            }

            // 피부
            try {
                const response = await axios.get('http://127.0.0.1:8000/skinTypeView/', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },})
                if(response.data.normal === true) {setnormal(true)}
                if(response.data.dry === true) {setdry(true)}
                if(response.data.oily === true) {setoily(true)}
                if(response.data.combination === true) {setcombination(true)}
                if(response.data.sensitive === true) {setsensitive(true)}
                if(response.data.acne === true) {setacne(true)}
            } catch (error) {
                console.error('서버 요청 오류:', error);
            }
        }
        typeFetch();
    }, []);

    return (
        <>
            <Wrapper>
                <ConsentWrapper>
                    <Top>
                        <TitleWrapper>
                            <Title onClick={onClickHome} src="images/mofylogo.png"/>
                        </TitleWrapper>
                        <TopButton onClick={onClickLogout}>Log Out</TopButton>
                    </Top>
                    <Divide/>
                    <Mid>
                        <EditText>프로필 수정</EditText>
                        <EditImgWrapper>
                            <UserImg src={imgFile ? imgFile :"images/firstImg.jpg"}/>
                            <label>
                                <OverlayImage src={"https://cdn-icons-png.flaticon.com/512/5218/5218413.png"}/>
                                <OverlayImageInput type="file" accept="image/*" onChange={saveImgFile} ref={imgRef}/>
                            </label>
                        </EditImgWrapper>
                    </Mid>
                    <Bottom>
                        <EditNameWrapper>
                            <EditNameText>이름
                            </EditNameText>
                            <EditNameInput value={name} onChange={onChangeName}/>
                            <Check>{nameError}</Check>
                        </EditNameWrapper>
                        <EditPWWrapper>
                            <EditPWText>비밀번호
                            </EditPWText>
                            <EditPWInput onChange={onChangePw} placeholder='기존 비밀번호 또는 변경할 비밀번호를 입력해주세요.'/>
                            <Check>{pwError}</Check>
                        </EditPWWrapper>
                        <EditClothTypeWrapper>
                            <EditClothTypeText>옷 타입</EditClothTypeText>
                            <EditTypeButtonWrapper>
                                <EditTypeButton
                                    id={"simple"}
                                    onClick={onClickSimple}
                                    style={!simple ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Simple
                                </EditTypeButton>
                                <EditTypeButton
                                    id={"modern"}
                                    onClick={onClickModern}
                                    style={!modern ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Modern</EditTypeButton>
                                <EditTypeButton
                                    id={"feminine"}
                                    onClick={onClickFeminine}
                                    style={!feminine ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Feminine</EditTypeButton>
                                <EditTypeButton
                                    id={"dandy"}
                                    onClick={onClickDandy}
                                    style={!dandy ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Dandy</EditTypeButton>
                                <EditTypeButton
                                    id={"retro"}
                                    onClick={onClickRetro}
                                    style={!retro ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Retro</EditTypeButton>
                                <EditTypeButton
                                    id={"minimal"}
                                    onClick={onClickMinimal}
                                    style={!minimal ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Minimal</EditTypeButton>
                                <EditTypeButton
                                    id={"casual"}
                                    onClick={onClickCasual}
                                    style={!casual ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Casual</EditTypeButton>
                                <EditTypeButton
                                    id={"street"}
                                    onClick={onClickStreet}
                                    style={!street ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Street</EditTypeButton>
                                <EditTypeButton
                                    id={"sporty"}
                                    onClick={onClickSporty}
                                    style={!sporty ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Sporty</EditTypeButton>
                                <EditTypeButton
                                    id={"urban"}
                                    onClick={onClickUrban}
                                    style={!urban ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Urban</EditTypeButton>
                                <EditTypeButton
                                    id={"classic"}
                                    onClick={onClickClassic}
                                    style={!classic ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}>
                                    #Classic</EditTypeButton>
                            </EditTypeButtonWrapper>
                        </EditClothTypeWrapper>
                        <EditSkinTypeWrapper>
                            <EditSkinTypeText>피부 타입</EditSkinTypeText>
                            <EditTypeButtonWrapper>
                                <EditTypeButton
                                    id={"normal"}
                                    onClick={onClicknormal}
                                    style={!normal ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}
                                    >
                                    보통</EditTypeButton>
                                <EditTypeButton
                                    id={"dry"}
                                    onClick={onClickdry}
                                    style={!dry ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}
                                    >
                                    건성</EditTypeButton>
                                <EditTypeButton
                                    id={"oily"}
                                    onClick={onClickoily}
                                    style={!oily ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}
                                    >
                                    지성</EditTypeButton>
                                <EditTypeButton
                                    id={"sensitive"}
                                    onClick={onClickcombination}
                                    style={!sensitive ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}
                                    >
                                    복합성</EditTypeButton>
                                <EditTypeButton
                                    id={"combination"}
                                    onClick={onClicksensitive}
                                    style={!combination ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}
                                    >
                                    민감성</EditTypeButton>
                                <EditTypeButton
                                    id={"acne"}
                                    onClick={onClickacne}
                                    style={!acne ? { backgroundColor: 'white' } : { backgroundColor: 'pink' }}
                                    >
                                    여드름</EditTypeButton>
                            </EditTypeButtonWrapper>
                        </EditSkinTypeWrapper>
                        <EditUserSizeWrapper>
                            <EditUserSizeTextWrapper>
                                <EditUserHeightText>키</EditUserHeightText>
                                <EditUserWeightText>몸무게</EditUserWeightText>
                                <EditUserFootText>발 사이즈</EditUserFootText>
                            </EditUserSizeTextWrapper>
                            <EditUserSizeSubWrapper>
                                <EditUserSizeInput value={height} onChange={onChangeHeight}/>
                                <Check>{heightError}</Check>
                                <EditUserSizeSubText>cm</EditUserSizeSubText>
                                <EditUserSizeInput value={weight} onChange={onChangeWeight}/>
                                <Check>{weightError}</Check>
                                <EditUserSizeSubText>kg</EditUserSizeSubText>
                                <EditUserSizeInput value={shoeSize} onChange={onChangeShoeSize}/>
                                <Check>{shoeSizeError}</Check>
                                <EditUserSizeSubText>mm</EditUserSizeSubText>
                            </EditUserSizeSubWrapper>

                        </EditUserSizeWrapper>
                        <EditUser onClick={onClickSave}>저장하기</EditUser>
                        <DeleteUser onClick={onClickDelete}>탈퇴하기</DeleteUser>
                    </Bottom>
                </ConsentWrapper>
            </Wrapper>
        </>
    )
}