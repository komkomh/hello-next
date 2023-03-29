"use client";
import {Player, SquareValue} from "@/app/types";
import styled from "styled-components";
import {Square} from "@/app/components/sanmoku/Square";

type Props = {
  player: Player,
  values: SquareValue[],
  click: (index: number) => void,
}

export const Board = (props: Props) => {

  return (
      <BoardWrapper>
        {props.values.map((value, index) => {
          return (
              <Square
                  key={index}
                  index={index}
                  value={value}
                  click={props.click}/>
          )
        })}
      </BoardWrapper>
  )
}

// CSS
const BoardWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  flex-wrap: wrap;
`
