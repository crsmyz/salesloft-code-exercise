import {render } from '@testing-library/react';
import { SLActivityFeedItemComponent } from "./activityFeedItemComponent";
import { default as PhoneIcon } from "./../../../shared/Icons/Phone";

// check that component loads
test('should render <SLActivityFeedItemComponent> component', () => {
  const id = 1;
  const data= {
    created_at: "2020-04-09T01:50:06.951221Z",
    dynamic_data: {
      user_name: 'John Smith'
  },
  id: "call-1",
  occurred_at: "2019-10-03T15:00:57.089927Z",
  type: "voicemail"};
  expect(render(<SLActivityFeedItemComponent key={id} props={data} Icon={PhoneIcon}/>)).toBeTruthy();
});