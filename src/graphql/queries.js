/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      members {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      admins {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        members {
          nextToken
        }
        admins {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
      name
      groups_member {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      groups_admin {
        items {
          id
          groupID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      effortDays {
        items {
          id
          day
          score
          colourString
          createdAt
          updatedAt
          userEffortDaysId
        }
        nextToken
      }
      friends {
        items {
          id
          name
          createdAt
          updatedAt
          userFriendsId
        }
        nextToken
      }
      createdAt
      updatedAt
      userFriendsId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        groups_member {
          nextToken
        }
        groups_admin {
          nextToken
        }
        effortDays {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        userFriendsId
      }
      nextToken
    }
  }
`;
export const getEffort = /* GraphQL */ `
  query GetEffort($id: ID!) {
    getEffort(id: $id) {
      id
      day
      score
      colourString
      createdAt
      updatedAt
      userEffortDaysId
    }
  }
`;
export const listEfforts = /* GraphQL */ `
  query ListEfforts(
    $filter: ModelEffortFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEfforts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        day
        score
        colourString
        createdAt
        updatedAt
        userEffortDaysId
      }
      nextToken
    }
  }
`;
export const getGroupMembers = /* GraphQL */ `
  query GetGroupMembers($id: ID!) {
    getGroupMembers(id: $id) {
      id
      groupID
      userID
      group {
        id
        name
        members {
          nextToken
        }
        admins {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        groups_member {
          nextToken
        }
        groups_admin {
          nextToken
        }
        effortDays {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroupMembers = /* GraphQL */ `
  query ListGroupMembers(
    $filter: ModelGroupMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupID
        userID
        group {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          name
          createdAt
          updatedAt
          userFriendsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroupAdmins = /* GraphQL */ `
  query GetGroupAdmins($id: ID!) {
    getGroupAdmins(id: $id) {
      id
      groupID
      userID
      group {
        id
        name
        members {
          nextToken
        }
        admins {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        name
        groups_member {
          nextToken
        }
        groups_admin {
          nextToken
        }
        effortDays {
          nextToken
        }
        friends {
          nextToken
        }
        createdAt
        updatedAt
        userFriendsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGroupAdmins = /* GraphQL */ `
  query ListGroupAdmins(
    $filter: ModelGroupAdminsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupID
        userID
        group {
          id
          name
          createdAt
          updatedAt
        }
        user {
          id
          name
          createdAt
          updatedAt
          userFriendsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
