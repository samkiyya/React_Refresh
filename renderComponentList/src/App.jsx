import Joke from "./Joke";

function App() {
  const funnyJokes = [
    {
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      rating: 3,
    },

    {
      joke: "Why did the chicken cross the road? To get to the other side!",
      rating: 5,
    },
    {
      joke: "Why did the tomato turn red? Because it saw the salad dressing!",
      rating: 4,
    },
    {
      joke: "Why did the cow become a farmer? Because it wanted to be free!",
      rating: 2,
    },
    {
      joke: "Why did the cookie go to the doctor? Because it was feeling crumbly!",
      rating: 1,
    },
    {
      joke: "Why did the computer go to the doctor? Because it had a virus!",
      rating: 3,
    },
    {
      joke: "Why did the bicycle fall over? Because it was two-tired!",
      rating: 5,
    },
    {
      joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      rating: 4,
    },
    {
      joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      rating: 2,
    },
    {
      joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      rating: 1,
    },

    {
      joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
      rating: 3,
    },
  ];

  return (
    <>
      {" "}
      <h1>Funy Jokes with rating</h1>
      {funnyJokes
        .filter((joke) => joke.rating > 3)
        .map((joke, index) => (
          <Joke
            key={index}
            //  joke={joke.joke} rating={joke.rating}
            {...joke}
          />
        ))}{" "}
    </>
  );
}

export default App;
