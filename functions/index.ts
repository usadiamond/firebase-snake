
import { initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { HttpsError, onCall } from "firebase-functions/v2/https";

initializeApp();

export const joinGame = onCall(async (request) => {
  const { player, gameId } = request.data;
  if (!player || !gameId) {
    throw new HttpsError("invalid-argument", "Player and gameId are required.");
  }

  const db = getDatabase();
  const gameRef = db.ref(`games/${gameId}`);
  const playerRef = gameRef.child("players").child(player.id);

  await playerRef.set(player);

  return { status: "success" };
});

export const leaveGame = onCall(async (request) => {
    const { playerId, gameId } = request.data;
    if (!playerId || !gameId) {
      throw new HttpsError(
        "invalid-argument",
        "Player ID and gameId are required."
      );
    }
  
    const db = getDatabase();
    const playerRef = db.ref(`games/${gameId}/players/${playerId}`);
  
    await playerRef.remove();
  
    return { status: "success" };
  });
