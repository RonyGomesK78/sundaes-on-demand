import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for each toppings option from server", async () => {
  render(<Options optionType="toppings" />);

  const toppingImage = await screen.findAllByRole("img", { name: /topping$/i });
  expect(toppingImage).toHaveLength(3); 

  const altText = toppingImage.map((element) => element.alt);
  expect(altText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"]);
});
