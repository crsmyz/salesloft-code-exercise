import { render } from '@testing-library/react';
import { EmptyActivitiesMessage} from "./emptyActivitesMessage";

test('should load <EmptyActivitiesMessage> component', () => {
  expect(render(<EmptyActivitiesMessage/>)).toBeTruthy();
});