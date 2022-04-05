import { render } from '@testing-library/react';
import { ActivitiesButtonHeaderComponent} from "./activitiesButtonHeader";

test('should load <ActivitiesButtonHeaderComponent> component', () => {
  expect(render(<ActivitiesButtonHeaderComponent/>)).toBeTruthy();
});