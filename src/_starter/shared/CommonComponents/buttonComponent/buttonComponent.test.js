import {render } from '@testing-library/react';
import { SLButtonComponent } from "./buttonComponent";
import { default as PhoneIcon } from "./../../../shared/Icons/Phone";

// check that component loads
test('should render <SLActivityFeedItemComponent> component', () => {
  expect(render(<SLButtonComponent buttonName="Button" Icon={PhoneIcon} />)).toBeTruthy();
});