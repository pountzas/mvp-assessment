import React from "react";
import TweetCreator from "./components/TweetCreator";
import Tweets from "./components/Tweets";
import SearchTweets from "./components/SearchTweets";

const App = () => {
  return (
    <div className="App">
      <div className="left-side">
        <TweetCreator />
        <Tweets />
      </div>
      <div className="right-side">
        <SearchTweets />
      </div>
    </div>
  );
};

export default App;
