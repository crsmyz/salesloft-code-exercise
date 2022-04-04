import { render } from '@testing-library/react';
import { SLTabComponent } from "./tabComponent";

// check that component loads
test('should render <SLTabComponent> component', () => {
  expect(render(
    <ul>
      <SLTabComponent tabName="Tab Test" onClick={console.log("Test Click")}/>
    </ul>)).toBeTruthy();
});