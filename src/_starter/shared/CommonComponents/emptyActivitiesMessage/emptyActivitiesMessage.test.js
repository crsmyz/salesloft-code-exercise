import { render } from '@testing-library/react';
import { SLEmptyHeaderMessage} from "./emptyActivitesMessage";

test('should load <EmptyActivitiesMessage> component', () => {
  expect(render(<SLEmptyHeaderMessage message="Message"/>)).toBeTruthy();
});