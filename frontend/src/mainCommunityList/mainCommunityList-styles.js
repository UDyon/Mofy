import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 550px;
  font-size: 15px;
  
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 50px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
 // background-color:red;
  
`;

export const ColumnHeaderBasic = styled.div`
  width: 50%;
  text-align: center;
  //background-color: pink;
`;
export const Roww=styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: pink;
  }
  
`
export const ColumnHeaderTitle = styled.div`
  width: 50%;
  text-align: center;
  //background-color: skyblue;
`;

export const ColumnBasic = styled.div`
  width: 50%;
  text-align: center;
  :hover {
    color: pink;
  }
`;

export const ColumnTitle = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: pink;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;
