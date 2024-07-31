const Joke = (props) => {
  const { joke, rating } = props;
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += "⭐";
    } else {
      stars += "🌟";
    }
  }
  return (
    <div>
      <p>{joke}</p>
      <p>{stars}</p>
    </div>
  );
};

export default Joke;

// const Joke = ({ joke, rating }) => {
//   let stars = "";
//   for (let i = 0; i < 5; i++) {
//     if (i < rating) {
//       stars += "⭐";
//     } else {
//       stars += "🌟";
//     }
//   }
//   return (
//     <div>
//       <h1>Funy Jokes with rating</h1>
//       <p>{joke}</p>
//       <p>{stars}</p>
//     </div>
//   );
// };

// export default Joke;

// const Joke = (props) => {
//   let stars = "";
//   for (let i = 0; i < 5; i++) {
//     if (i < props.rating) {
//       stars += "⭐";
//     } else {
//       stars += "☆";
//     }
//   }
//   return (
//     <div>
//       <h1>Funy Jokes with rating</h1>
//       <p>{props.joke}</p>
//       <p>{stars}</p>
//     </div>
//   );
// };

// export default Joke;
