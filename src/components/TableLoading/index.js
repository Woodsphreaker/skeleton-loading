import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";

import {
  Container,
  Item,
  Header,
  Icon,
  Title,
  Table,
  Thead,
  Tbody,
  Line,
  Column
} from "./styles";

const TableLoading = ({ color = "eee", highlightColor = "#f5f5f5" }) => {
  return (
    <Container>
      <Header>
        <SkeletonTheme color={color} highlightColor={highlightColor}>
          <Icon />
        </SkeletonTheme>
        <SkeletonTheme color={color} highlightColor={highlightColor}>
          <Title />
        </SkeletonTheme>
      </Header>
      <Table>
        <Thead>
          {Array.from({ length: 10 }, () => (
            <Item>
              <SkeletonTheme color={color} highlightColor={highlightColor}>
                <Column count={1} />
              </SkeletonTheme>
            </Item>
          ))}
        </Thead>
        <Line />

        <Tbody>
          {Array.from({ length: 10 }, () => (
            <Item>
              <SkeletonTheme color={color} highlightColor={highlightColor}>
                <Column count={5} />
              </SkeletonTheme>
            </Item>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default TableLoading;
