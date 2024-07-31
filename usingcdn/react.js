function Counter() {
  let [count, setCount] = React.useState(0);
  return React.createElement(
    "div",
    {},
    React.createElement("p", null, "Count: ", count),
    React.createElement(
      "button",
      { onClick: () => setCount((count) => count + 1) },
      "click me"
    )
  );
}
