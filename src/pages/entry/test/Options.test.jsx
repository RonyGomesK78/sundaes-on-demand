import { render, screen } from "../../../test-utils/testing-library-utils";
import Options from "../Options";
<<<<<<< HEAD
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
=======
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';
>>>>>>> 9d2b0800531120b30ffadc1a2c766bf42036505b

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
