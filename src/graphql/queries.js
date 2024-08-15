/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDeviceLogs = /* GraphQL */ `
  query GetDeviceLogs($id: ID!) {
    getDeviceLogs(id: $id) {
      id
      timeStamp
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listDeviceLogs = /* GraphQL */ `
  query ListDeviceLogs(
    $filter: ModelDeviceLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timeStamp
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
