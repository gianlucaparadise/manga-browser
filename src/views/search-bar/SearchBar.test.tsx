import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('renders search bar and checks props', () => {
    act(() => {
        render(<SearchBar />, container);
    })
    const sbPlaceHolder = screen.getByPlaceholderText(/Search manga/i);
    expect(sbPlaceHolder).toBeInTheDocument();

    act(() => {
        render(<SearchBar query="monster" />, container);
    })
    const sbQuery = screen.getByDisplayValue(/monster/i);
    expect(sbQuery).toBeInTheDocument();
});

test('renders search bar and checks change event', () => {
    const onChange = jest.fn();
    act(() => {
        render(<SearchBar onChange={onChange} />, container);
    })
    const sbInput = screen.getByTestId("searchbar-input") as HTMLInputElement;
    expect(sbInput).toBeInTheDocument();

    act(() => {
        fireEvent.change(sbInput, { target: { value: "attack on titan" } })
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(sbInput.value).toBe("attack on titan")
})