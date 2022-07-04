import * as React from "react";
import renderer from "react-test-renderer";

import { Hello } from "../component";

it("component renders", () => {
    const tree = renderer.create(<Hello />).toJSON();
    expect(tree).toMatchSnapshot();
});
