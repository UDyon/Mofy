import { useRouter } from "next/router";
import {useEffect, useState, useCallback} from "react";
import axios from "axios";
import * as S from "../marketBoard/list/MarketBoardList-styles";
import {FireFilledIcon, Searchbar, SearchbarInput} from "../marketBoard/searchbars/01/Searchbars01-styles";
import _ from "lodash";
import{v4 as uuidv4} from "uuid"
import {getDate} from "../commons/libraries/utils";
import Cookies from "js-cookie";


const SECRET = "!@#$";


export default function MarketBoardList() {


    const router = useRouter();



    const [reqData, setReqData] = useState([])
    const [keyword, setKeyword] = useState("")


    const accessToken = Cookies.get('access_token')
    const refreshToken = Cookies.get('refresh_token')

    const[dataLoaded, setDataLoaded] = useState(false)

    const [recentSearch1, setRecentSearch1] = useState([null]);
    const [isRecentSearch1Loaded, setIsRecentSearch1Loaded] = useState(false);




    useEffect(()=>{
        const fetchData = async () => {

            console.log("마운트가 완료되었디!")
            const result = await axios.get("http://127.0.0.1:8000/boardType/3/", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            })
                .then((response) => {
                    setReqData([...response.data])


                    console.log(response.data);

                    setDataLoaded(true)
                })
                .catch(function (error) {
                    console.log(error);
                });
            const response = await axios.get('http://127.0.0.1:8000/search/history/', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then((response) => {



                    setKeyword(response.data[0].query);
                    setRecentSearch1(response.data[0].query);


                    console.log(response.data[0].query);

                    setDataLoaded(true)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        if(accessToken && !dataLoaded){
            fetchData()
        }


    },[accessToken, dataLoaded])



    const printValue = useCallback(
        _.debounce((value) => console.log(value), 500),
        []
    );

    const handleChange = (event) => {
        printValue(event.target.value);
        setKeyword(event.target.value);
    };




    const onClickMoveToBoardNew = () => {
    router.push("/marketBoard/new");
  }

  let eventData ;

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/marketBoard/${event.target.id}`);
    console.log(event.target.id)


  };


  const onChangeKeyword = (value) => {
    setKeyword(value);
  };


    return (
        <S.Wrapper>
            <Searchbar>
                <FireFilledIcon />
                <SearchbarInput
                    placeholder={recentSearch1}
                    onChange={handleChange}
                />
            </Searchbar>
            중고마켓

            <S.TableTop />
            <S.Row>
                <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
                <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
                {/*<S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>*/}
                <S.ColumnHeaderBasic>가격</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>판매상태</S.ColumnHeaderBasic>
            </S.Row>


            {reqData.filter(el => el.title.includes(keyword)).map(el => (
                    <S.Row key={el.boardID}>

                        <S.ColumnBasic>{el.boardID}</S.ColumnBasic>
                        <S.ColumnBasic>{getDate(el.datetime)}</S.ColumnBasic>
                        <S.ColumnTitle id={el.boardID}  props ={eventData} onClick={onClickMoveToBoardDetail} >

                            {el.title
                                .replaceAll(keyword, `${SECRET}${keyword}${SECRET}`)
                                .split(SECRET)
                                .map((el, index) => (
                                    <S.TextToken key={uuidv4()} isMatched={keyword === el}>
                                        {el}
                                    </S.TextToken>
                                ))}
                        </S.ColumnTitle>
                        <S.ColumnBasic>{el.price}원</S.ColumnBasic>
                        <S.ColumnBasic>{el.state ? "판매중" : "판매완료"}</S.ColumnBasic>
                    </S.Row>
                ))}


            <S.TableBottom />
            <S.Footer>
                {/*  <Paginations01 refetch={props.refetch} count={props.count} />*/}
                <S.Button onClick={onClickMoveToBoardNew}>
                    {/*<S.PencilIcon src="/images/board/list/write.png" />*/}
                    판매글 올리기
                </S.Button>
            </S.Footer>
        </S.Wrapper>
    );

}
