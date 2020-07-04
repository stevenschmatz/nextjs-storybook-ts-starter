import ExampleButton from "components/ExampleButton/ExampleButton"

export default () => {
  return (
    <html>
      <h2>Hello there!</h2>
      <p>This is an example project setup combining:</p>
      <ol>
        <li>next.js</li>
        <li>typescript</li>
        <li>styled-jsx</li>
        <li>storybook</li>
      </ol>
      <p>Here's an example of a component wiring all the above together:</p>
      <ExampleButton onClick={() => alert("Nice!")}>Hello world</ExampleButton>
      <hr/>
      <strong>If this was useful to you, give me a star at the Github repo!</strong>
    </html>
  );
}