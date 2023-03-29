import {useState} from "react";
import {Player} from "@/app/types";

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
