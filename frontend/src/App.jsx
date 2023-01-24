import React from "react";
import TweetCreator from "./components/TweetCreator";
import Tweets from "./components/Tweets";
import SearchTweets from "./components/SearchTweets";

const App = () => {
  return (
    <div className="flex ">
      <div className="left-side w-[50%] px-4 pt-4">
        <TweetCreator />
        <Tweets />
      </div>
      <div className="right-side w-[50%] px-4 pt-4">
        <SearchTweets />
      </div>
    </div>
  );
};

export default App;
