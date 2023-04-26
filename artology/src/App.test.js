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

// check if the page loads up with everything in the right place
test ("Does the page load up with the correct elements in the correct places", () => {  
  render(<App />);



  // Navigation menu
  const navMenu = screen.getByRole("navigation");
  expect(navMenu).toBeInTheDocument();


  //first time using closest() it's a method that allows you to go up the DOM tree from a given element to find the nearest ancestor that matches a the selector
  // Music massage studio section
  const musicMassage = screen.getByText("Music Massage");
  expect(musicMassage).toBeInTheDocument();
  expect(musicMassage.closest("section")).toHaveStyle({ marginTop: "0px" });

  // Science lab studio section
  const scienceLab = screen.getByText("Science Lab");
  expect(scienceLab).toBeInTheDocument();
  expect(scienceLab.closest("section")).toHaveStyle({ marginTop: "0px" });

  // Artist's studio section
  const artistStudio = screen.getByLabelText("artist-studio");
  expect(artistStudio).toBeInTheDocument();
  expect(artistStudio.closest("section")).toHaveStyle({ marginTop: "100px" });

  // Codeplay studio section
  const codeplay = screen.getByText("CodePlay");
  expect(codeplay).toBeInTheDocument();
  expect(codeplay.closest("section")).toHaveStyle({ marginTop: "100px" });
});

//orignal test code, used the above to try and specify the test more so that the nav elements are in the right place
/*
  //Is the music massage studio button on the top of the page 
  const musicMassage = screen.getByText("Music Massage");
  expect(musicMassage).toBeInTheDocument();
  
  
  // Is the science lab studio on the top of the page
  const sciencelab = screen.getByText("Science Lab");
  expect(sciencelab).toBeInTheDocument();

  // Is the artist's studio on the top of the page 
  const artistStudio = screen.getByLabelText("artist-studio");
  expect(artistStudio).toBeInTheDocument();
  
  // is the codeplay studio button on the top of the page
  const codeplay = screen.getByText("CodePlay");
  expect(codeplay).toBeInTheDocument();

  
*/

// test if the get randomitem array1 button works when you click the corresponding change item button
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

// test if the get randomitem array2 button works
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

// test if the get randomitem array3 button works
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


// test if the get random question is working when someone clicks the "new challenge" button
test("Does the get random question button work", () => {
  render(<App />);

  // Is the button on the page 
  const button = screen.getByRole("button", { name: "New Challenge" });
  expect(button).toBeInTheDocument();

  // When clicked, does the button change the item 
  // User clicks the button
  userEvent.click(button);
  // We expect the item to be different
  const item = screen.getByTestId("question");
  expect(item).not.toHaveTextContent("question");
});


