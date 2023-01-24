import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import { useRecoilState } from "recoil";
import { tweetListAtom } from "../atoms/tweetsAtom";

function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [tweetsStateGlobal, setTweetsStateGlobal] =
    useRecoilState(tweetListAtom);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((res) => {
      const sortedTweets = _.sortBy(res.data, "createdAt").reverse();

      setTweets(sortedTweets);
      setTweetsStateGlobal(sortedTweets);
    });
    console.log("Tweets useEffect", tweets);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    tweets !== tweetsStateGlobal && setTweets(tweetsStateGlobal);
    console.log("Tweets useEffect", tweets);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tweetsStateGlobal]);

  return (
    <ul>
      {tweets?.map((tweet) => (
        <li key={tweet._id}>
          <p>{tweet.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default Tweets;
