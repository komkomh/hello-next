"use client";
import {Board} from "@/app/components/sanmoku/Board";
import styled from "styled-components";
import {useState} from "react";
import {usePlayer} from "@/app/hooks/sanmoku/Player";
import {useBoard} from "@/app/hooks/sanmoku/Board";

export const Game = () => {

  const player = usePlayer()
  const board = useBoard()
  const [isGamePlaying, setGamePlaying] = useState(true)
  const [message, setMessage] = useState(`Next Player: ${player.player}`)

  const onClick = (index: number) => {
    // ゲームが終了していれば
    if (!isGamePlaying) {
      // 何もしない
      return
    }

    // oxを書く -> ここで更新なければいい
    const values = board.put(index, player.player);
    if (values.length === 0) {
      return
    }

    // どちらかが勝てば
    if (board.isWon(player.player, values)) {
      // ゲームを終了する
      setGamePlaying(false)
      setMessage(`player ${player.player} won`)
      return
    }

    // 引き分けなら
    if (board.isDraw(values)) {
      // ゲームを終了する
      setGamePlaying(false)
      setMessage(`draw`)
      return
    }

    // playerをチェンジする
    const nextPlayer = player.changePlayer()
    setMessage(`Next Player: ${nextPlayer}`)
  }

  const onResetClick = () => {
    player.reset()
    board.reset()
    setMessage(`Next Player: ${player.player}`)
    setGamePlaying(true)
  }

  return (
      <>
        <MessageWrapper>{message}</MessageWrapper>
        <Board player={player.player} values={board.values} click={onClick}/>
        <button onClick={onResetClick}>reset</button>
      </>
  )
}

// css
const MessageWrapper = styled.div`
  font-size: 26px;
`