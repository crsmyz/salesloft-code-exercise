import {render } from '@testing-library/react';
import { SLEmptyPanelComponent } from "./emptyPanelComponent";

// check that component loads
test('should render <SLEmptyPanelComponent> component', () => {
  expect(render(<SLEmptyPanelComponent/>)).toBeTruthy();
});