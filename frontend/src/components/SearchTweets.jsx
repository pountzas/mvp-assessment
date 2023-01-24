import React, { useState } from "react";
import { Autocomplete, createFilterOptions } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useRecoilState } from "recoil";
import { tweetListAtom } from "../atoms/tweetsAtom";

const SearchTweets = () => {
  const [search] = useState("");
  const [selectedTweet, setSelectedTweet] = useState(null);
  const [setTweets] = useState([]);

  const [tweetsStateGlobal] = useRecoilState(tweetListAtom);

  const handleSearch = async (e) => {
    e.preventDefault();
    const filteredTweets = tweetsStateGlobal.filter((tweet) =>
      tweet.text.includes(search.text)
    );
    setTweets(filteredTweets);
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSearch}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          className=" bg-gray-200 outline-none"
          filterOptions={createFilterOptions({ limit: 5 })}
          options={tweetsStateGlobal}
          getOptionLabel={(tweet) => (tweet.text ? tweet.text : "")}
          onChange={(e, tweet) => setSelectedTweet(tweet)}
          sx={{
            outline: "none",
            strokeWidth: "0",
            MuiOutlinedInput: { border: "none", strokeWidth: "0" }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search tweets"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </form>
      <div className="flex flex-col justify-start bg-gray-200 mt-[25%] min-h-[40%]">
        {selectedTweet && (
          <div className=" p-4">
            <p className="font-bold text-lg">{selectedTweet.text}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchTweets;
