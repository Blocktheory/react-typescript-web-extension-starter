import * as React from "react";
import renderer from "react-test-renderer";

import { Popup } from "../component";

it("component renders", () => {
    const tree = renderer.create(<Popup />).toJSON();
    expect(tree).toMatchSnapshot();
});
