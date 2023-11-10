// app.js
import { ReactDOM } from 'react-dom/client';
function LikeButton() {
  return (
    <button>Like</button>
  );
}

function UnlikeButton() {
  return (
    <button>Unlike</button>
  );
}

ReactDOM.render(<LikeButton />, document.getElementById('likeButtonContainer'));
ReactDOM.render(<UnlikeButton />, document.getElementById('unlikeButtonContainer'));
