import {render, screen } from '@testing-library/react';
import { SLActivityFeedItemComponent } from "./activityFeedItemComponent";
import { default as PhoneIcon } from "./../../../shared/Icons/Phone";

// check that component loads
test('should render <SLActivityFeedItemComponent> component', () => {
  const data= {
    created_at: "2020-04-09T01:50:06.951221Z",
    dynamic_data: {
      user_name: 'John Smith'
  },
  id: "call-1",
  occurred_at: "2019-10-03T15:00:57.089927Z",
  type: "voicemail"};
  expect(render(<SLActivityFeedItemComponent Icon={PhoneIcon} mainSubject={data.dynamic_data.user_name} userSubject="Modified by John Smith" date={data.occurred_at} bgColor="blueDark" color="blue"/>)).toBeTruthy();
});

test('should have an icon', () => {
  const data= {
    created_at: "2020-04-09T01:50:06.951221Z",
    dynamic_data: {
      user_name: 'John Smith'
  },
  id: "call-1",
  occurred_at: "2019-10-03T15:00:57.089927Z",
  type: "voicemail"};
  render(<SLActivityFeedItemComponent Icon={PhoneIcon} mainSubject={data.dynamic_data.user_name} userSubject={data.dynamic_data.user_name} date={data.occurred_at} bgColor="blueDark" color="blue"/>);
  const icon = screen.getByRole('button');
  expect(icon).toBeInTheDocument();
});

test('should have a username', () => {
  const data = {
    created_at: "2020-04-09T01:50:06.951221Z",
    dynamic_data: {
      user_name: 'John Smith'
  },
  id: "call-1",
  occurred_at: "2019-10-03T15:00:57.089927Z",
  type: "voicemail"};
  render(<SLActivityFeedItemComponent Icon={PhoneIcon} mainSubject="Main Subject Line" userSubject={data.dynamic_data.user_name} date="2019-10-03T15:00:57.089927Z" bgColor="blueDark" color="blue"/>);
  const username = screen.getByText('John Smith');
  expect(username).toBeInTheDocument();
});

test('should have date and time data', () => {
  const data= {
    created_at: "2020-04-09T01:50:06.951221Z",
    dynamic_data: {
      user_name: 'John Smith'
  },
  id: "call-1",
  occurred_at: "2019-10-03T15:00:57.089927Z",
  type: "voicemail"};
  render(<SLActivityFeedItemComponent Icon={PhoneIcon} mainSubject="Main Subject Line" userSubject="Modified by John Smith" date={data.created_at} bgColor="blueDark" color="blue"/>);
  const date = screen.getAllByText('Apr 9 2020');
  expect(date.length).toBeGreaterThan(0);
});

test('should mainSubject data', () => {
  const data= {
    created_at: "2020-04-09T01:50:06.951221Z",
    dynamic_data: {
      voice_mail: "Lasted for 100",
      user_name: 'John Smith'
  },
  id: "call-1",
  occurred_at: "2019-10-03T15:00:57.089927Z",
  type: "voicemail"};
  render(<SLActivityFeedItemComponent Icon={PhoneIcon} mainSubject={data.dynamic_data.voice_mail} userSubject="Modified by John Smith" date={data.created_at} bgColor="blueDark" color="blue"/>);
  const mainSubject = screen.getByText('Lasted for 100');
  expect(mainSubject).toBeInTheDocument();
});