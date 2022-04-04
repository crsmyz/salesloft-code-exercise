import {render, screen} from '@testing-library/react';
import { SLActivityPanelButtonHeaderComponent} from "./activityPanelButtonHeader";

test('should load <SLActivityPanelButtonHeaderComponent> component', () => {
  render(<SLActivityPanelButtonHeaderComponent/>);
  expect(render(<SLActivityPanelButtonHeaderComponent/>)).toBeTruthy();
});