const { Database } = require("@tableland/sdk");
const { getAccounts } = require("@tableland/local");

// This is a convenience function to help devs interact with the app without running the app
//  You can deploy everything, mint a game, and finially this script let's you make moves
//  on behalf of the account listed below.

const MOVES_TABLENAME = "chess_moves_31337_4";
const GAME_ID = 0;
const MOVE = "bar2";

const doMove = async function () {
  // const signer = getAccounts()[8];
  const signer = getAccounts()[9];
  // const signer = getAccounts()[10]; // not allowed

  const db = new Database({
    signer
  });

  const query = `INSERT INTO
      ${MOVES_TABLENAME} (player_address, game_id, move)
      VALUES ('${signer.address.toLowerCase()}', ${GAME_ID}, '${MOVE}');`

  const response = await db.prepare(query).all();
  console.log(response);
};

doMove().then(() => {
  console.log("success");
}).catch(err => {
  console.log(err);
});