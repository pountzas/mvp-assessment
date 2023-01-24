import { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { tweetListAtom } from "../atoms/tweetsAtom";

function TweetCreator() {
  const [text, setText] = useState("");
  const [tweetsStateGlobal, setTweetsStateGlobal] =
    useRecoilState(tweetListAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/posts", { text }).then((res) => {
      console.log(res.data);
      setTweetsStateGlobal([{ text }, ...tweetsStateGlobal]);
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit">Tweet</button>
    </form>
  );
}

export default TweetCreator;
