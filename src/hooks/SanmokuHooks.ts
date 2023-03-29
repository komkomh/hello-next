import {useState} from "react";
import {Player, SquareValue} from "@/app/types";

export const usePlayer = () => {
  const [player, setPlayer] = useState<Player>('o')
  const changePlayer = (): Player => {
    const nextPlayer = player === 'o' ? 'x' : 'o'
    setPlayer(nextPlayer)
    return nextPlayer
  }
  const reset = () => setPlayer('o')
  return {player, changePlayer, reset}
}

export const useBoard = () => {
  const [values, setValues] = useState<SquareValue[]>(['', '', '', '', '', '', '', '', ''])

  // 盤がクリックされた
  const put = (index: number, player: Player): SquareValue[] => {
    if (values[index] != '') { // 空でなければ
      return [] // 何もしない
    }
    const newValues = values.map((v) => v); // 新しい配列を生成する
    newValues[index] = player // 書き込む
    setValues(newValues) // 保持する
    return newValues
  }

  const isWon = (player: Player, values: SquareValue[]): boolean => {
    const positions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    return positions.find(p => {
      return p.map((px) => values[px]).every(squareValue => squareValue === player);
    }) !== undefined
  }

  const isDraw = (values: SquareValue[]): boolean => {
    return values.every(v => v != '')
  }

  const reset = () => {
    setValues(['', '', '', '', '', '', '', '', ''])
  }
  return {values, put, isWon, isDraw, reset}
}
