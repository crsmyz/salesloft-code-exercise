import { render } from '@testing-library/react';
import { SLTabListComponent } from "./tabListComponent";

// check that component loads
test('should render <SLTabListComponent> component', () => {
  expect(render(<SLTabListComponent>
    <div label="Test Tab 1">
        <h2 className="slActivitiesHeader">Test Header 1</h2>
    </div>
    <div label="Test Tab 2">
        <h2 className="slActivitiesHeader">Test Header 2</h2>
    </div>
    <div label="Test Tab 3">
        <h2 className="slActivitiesHeader">Test Header 3</h2>
    </div>
  </SLTabListComponent>
  )).toBeTruthy();
});