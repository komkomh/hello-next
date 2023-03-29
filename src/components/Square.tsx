"use client";
import {Player, SquareValue} from "@/app/types";
import styled from "styled-components";

type Props = {
  index: number,
  value: SquareValue,
  click: (index: number) => void,
}
export const Square = (props: Props) => {
  return (
      <SquareWrapper onClick={() => props.click(props.index)}>
        {props.value}
      </SquareWrapper>
  )
}

// CSS
const SquareWrapper = styled.button`
  width: 100px;
  height: 100px;
  background-color: white;
  border: solid gray 1px;
  font-size: 80px;
`
