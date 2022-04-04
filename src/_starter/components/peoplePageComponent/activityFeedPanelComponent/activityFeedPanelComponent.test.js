import {render, screen} from '@testing-library/react';
import { SLActivityFeedPanelComponent} from "./activityFeedPanelComponent";

// check that component loads
test('should load <SLActivityFeedPanelComponent> component', () => {
  render(<SLActivityFeedPanelComponent/>);
});