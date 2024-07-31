import axios from "axios";
import { useState } from "react";
const Quote = () => {
  const [quote, setQuote] = useState("");
  return (
    <div>
      <p>{quote}</p>
      <button
        onClick={() =>
          axios
            .get("https://api.kanye.rest")
            .then((result) => setQuote(result.data.quote))
        }
      >
        {" "}
        click here
      </button>
    </div>
  );
};

export default Quote;
