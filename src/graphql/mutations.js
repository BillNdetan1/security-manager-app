/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDeviceLogs = /* GraphQL */ `
  mutation CreateDeviceLogs(
    $input: CreateDeviceLogsInput!
    $condition: ModelDeviceLogsConditionInput
  ) {
    createDeviceLogs(input: $input, condition: $condition) {
      id
      timeStamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateDeviceLogs = /* GraphQL */ `
  mutation UpdateDeviceLogs(
    $input: UpdateDeviceLogsInput!
    $condition: ModelDeviceLogsConditionInput
  ) {
    updateDeviceLogs(input: $input, condition: $condition) {
      id
      timeStamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteDeviceLogs = /* GraphQL */ `
  mutation DeleteDeviceLogs(
    $input: DeleteDeviceLogsInput!
    $condition: ModelDeviceLogsConditionInput
  ) {
    deleteDeviceLogs(input: $input, condition: $condition) {
      id
      timeStamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
