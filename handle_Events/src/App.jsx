function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }
  function handleTextChange(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <button
        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] m-4"
        onClick={handleClick}
      >
        Do Something{" "}
      </button>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="block w-full p-4 my-4 border border-gray-300 rounded-lg"
          placeholder="Enter your name"
          onChange={handleTextChange}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] m-4"
        >
          Submit Form
        </button>
      </form>
    </>
  );
}

export default App;
