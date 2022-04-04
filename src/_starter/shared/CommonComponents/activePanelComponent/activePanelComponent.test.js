import {render } from '@testing-library/react';
import { SLActivePanelComponent } from "./activePanelComponent";

// check that component loads
test('should render <SLActiveCardComponent> component', () => {
  // render(<SLActivePanelComponent/>)
  expect(render(<SLActivePanelComponent/>)).toBeTruthy();
});