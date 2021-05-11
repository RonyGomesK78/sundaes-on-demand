import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import SummaryForm from "../SummaryForm";

test('initial conditions', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i } );
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button", { name: /confirm order/i } );
    expect(button).toBeDisabled();
});

test('Checkbox enables button on first click and disables on second click', () => {
    render(<SummaryForm />)

    const button = screen.getByRole("button", { name: /confirm order/i } )
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i } );

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
});