import styled, { css } from "styled-components";
import Skeleton from "react-loading-skeleton";

const tHeadBodyStyle = css`
  display: flex;

  > div:nth-child(n + 2) {
    margin-left: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 100vw;
  min-height: 200px;
  border-radius: 10px;
  box-shadow: 2px 3px 6px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 0 auto 20px auto;
  max-width: 1000px;
`;

export const Item = styled.div`
  width: 100%;
  > span {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(Skeleton)`
  width: 50px !important;
  height: 50px;
  margin-right: 10px;
`;
export const Title = styled(Skeleton)`
  width: min(500px, 50vw) !important;
  height: 20px;
`;

export const Table = styled.div`
  margin-top: 10px;
`;

export const Thead = styled.div`
  ${tHeadBodyStyle}
`;

export const Tbody = styled.div`
  display: flex;
  margin-top: 5px;

  ${tHeadBodyStyle};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dcdcdc;
  margin: 15px 0 5px 0;
`;

export const Column = styled(Skeleton)`
  height: 20px;
  margin-top: 10px;
`;
