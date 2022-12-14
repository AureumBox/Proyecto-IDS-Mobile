import React from "react";

import EmptyPlayer from "./EmptyPlayer";
import FantasyPlayer from "./FantasyPlayer";

export default function PlayerRow({
  position = "",
  player,
  onInsert,
  onRemove,
}) {
  return (
    <>
      {player?.emptyPlayer ? (
        <EmptyPlayer position={position} insertPlayer={onInsert} />
      ) : (
        <FantasyPlayer player={player} removePlayer={onRemove} />
      )}
    </>
  );
}
