
const chessboard = document.querySelector('.chessboard');
const oddbox = `<div class="square"></div>`.repeat(8);
const evenbox = `<div class="sq"></div>`.repeat(8);

const completeBoard =` ${oddbox} ${evenbox}`.repeat(4);
chessboard.innerHTML = completeBoard;
