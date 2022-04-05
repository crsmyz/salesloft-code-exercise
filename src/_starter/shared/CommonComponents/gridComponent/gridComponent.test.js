import { render } from '@testing-library/react';
import { SLGridComponent} from "./gridComponent";
import { SLEmptyPanelComponent } from "./../emptyPanelComponent/emptyPanelComponent";

// check that component loads
test('should load <SLGridComponent> component', () => {
  const gridData = [{}, {}, {}];
  const generatePanel = (i, data) => <SLEmptyPanelComponent key={i}/>;
  expect(render(<SLGridComponent gridData={gridData} gridRenderFunction={generatePanel}/>)).toBeTruthy();
});