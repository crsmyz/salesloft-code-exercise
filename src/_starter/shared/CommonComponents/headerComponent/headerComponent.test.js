import {render } from '@testing-library/react';
import { SLHeaderComponent } from "./headerComponent";

// check that component loads
test('should render <SLHeaderComponent> component', () => {
  expect(render(<SLHeaderComponent/>)).toBeTruthy();
});