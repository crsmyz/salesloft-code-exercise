import { render } from '@testing-library/react';
import { ActivitiesPanelComponent} from "./activitiesPanelComponent";

// check that component loads
test('should load <ActivitiesPanelComponent> component', () => {
  render(<ActivitiesPanelComponent/>);
});