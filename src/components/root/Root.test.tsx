import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./../../utils/store";
import Root from "./Root";

test("renders learn react link", () => {
	const { getByText } = render(
		<Provider store={store}>
			<Root />
		</Provider>
	);

	expect(getByText(/learn/i)).toBeInTheDocument();
});
