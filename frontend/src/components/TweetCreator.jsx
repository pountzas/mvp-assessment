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
    <>
      <div className="pl-4 text-2xl font-semibold">Fake Twitter</div>
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <input
          className="pl-4 py-4 mb-4 text-xl w-[100%]"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's happening?"
        />
        <button
          className="mx-[47%] bg-blue-300 rounded-full py-2 px-4 mb-4 text-white font-bold"
          type="submit"
        >
          Tweet
        </button>
      </form>
    </>
  );
}

export default TweetCreator;
