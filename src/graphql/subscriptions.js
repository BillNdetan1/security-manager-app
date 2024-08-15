/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDeviceLogs = /* GraphQL */ `
  subscription OnCreateDeviceLogs(
    $filter: ModelSubscriptionDeviceLogsFilterInput
    $owner: String
  ) {
    onCreateDeviceLogs(filter: $filter, owner: $owner) {
      id
      timeStamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateDeviceLogs = /* GraphQL */ `
  subscription OnUpdateDeviceLogs(
    $filter: ModelSubscriptionDeviceLogsFilterInput
    $owner: String
  ) {
    onUpdateDeviceLogs(filter: $filter, owner: $owner) {
      id
      timeStamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteDeviceLogs = /* GraphQL */ `
  subscription OnDeleteDeviceLogs(
    $filter: ModelSubscriptionDeviceLogsFilterInput
    $owner: String
  ) {
    onDeleteDeviceLogs(filter: $filter, owner: $owner) {
      id
      timeStamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
