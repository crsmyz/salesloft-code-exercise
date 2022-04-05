import { render } from '@testing-library/react';
import { PeoplePageComponent } from "./peoplePageComponent";

// check that component loads
test('should render <PeoplePageComponent> component', () => {
  expect(render(<PeoplePageComponent/>)).toBeTruthy();
});