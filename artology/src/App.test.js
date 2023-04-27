import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


test("Does the scroll arrow appear on page and scroll to next section", () => {
  render(<App />);

  // Is the arrow on the page 👍
  const arrow = screen.getByLabelText("scroll-down-arrow");
  expect(arrow).toBeInTheDocument();

  // When clicked, does the arrow scroll to the next section 👍
  // User clicks the arrow
  userEvent.click(arrow);
  // We expect the next section (artist's studio) to be in view
  // uses the aria label to find the next section
  const nextSection = screen.getByLabelText("artist-studio");
  expect(nextSection).toBeVisible();
});




// check if the page loads up with everything in the right place, added an ID to the div class name for it to work 👍

  test("checks if the page loads up", () => {
    const { getByTestId } = render(<App />);
    // 
    const appComponent = getByTestId("app-component");
    expect(appComponent).toBeInTheDocument();
  });
  
  test("Does the get random item array1 button work", () => { 
    render(<App />);
  
    // Is the button on the page 
    const button = screen.getByRole("button", { name: "Get Random Item 1" });
    expect(button).toBeInTheDocument();
  
    // When clicked, does the button change the item 
    // User clicks the button
    userEvent.click(button);
    // We expect the item to be different
    const item = screen.getByTestId("item1");
    expect(item).not.toHaveTextContent("item1");
  }); 
  
  test("Does the get random item array2 button work", () => {
    render(<App />);
  
    // Is the button on the page 
    const button = screen.getByRole("button", { name: "Get Random Item 2" });
    expect(button).toBeInTheDocument();
  
    // When clicked, does the button change the item 
    // User clicks the button
    userEvent.click(button);
    // We expect the item to be different
    const item = screen.getByTestId("item2");
    expect(item).not.toHaveTextContent("item2");
  }); 
  
  test("Does the get random item array3 button work", () => {
    render(<App />);
  
    // Is the button on the page 
    const button = screen.getByRole("button", { name: "Get Random Item 3" });
    expect(button).toBeInTheDocument();
  
    // When clicked, does the button change the item 
    // User clicks the button
    userEvent.click(button);
    // We expect the item to be different
    const item = screen.getByTestId("item3");
    expect(item).not.toHaveTextContent("item3");
  });
  
  test("Does the get random question button work", () => {
    render(<App />);
  
    // Is the button on the page 
    const button = screen.getByRole("button", { name: "New challenge!" });
    expect(button).toBeInTheDocument();
  
    // When clicked, does the button change the item 
    // User clicks the button
    userEvent.click(button);
    // We expect the item to be different
    const item = screen.getByTestId("question");
    expect(item).not.toHaveTextContent("question");
  });
  