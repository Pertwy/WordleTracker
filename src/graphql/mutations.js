/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createEffort = /* GraphQL */ `
  mutation CreateEffort(
    $input: CreateEffortInput!
    $condition: ModelEffortConditionInput
  ) {
    createEffort(input: $input, condition: $condition) {
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
export const updateEffort = /* GraphQL */ `
  mutation UpdateEffort(
    $input: UpdateEffortInput!
    $condition: ModelEffortConditionInput
  ) {
    updateEffort(input: $input, condition: $condition) {
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
export const deleteEffort = /* GraphQL */ `
  mutation DeleteEffort(
    $input: DeleteEffortInput!
    $condition: ModelEffortConditionInput
  ) {
    deleteEffort(input: $input, condition: $condition) {
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
export const createGroupMembers = /* GraphQL */ `
  mutation CreateGroupMembers(
    $input: CreateGroupMembersInput!
    $condition: ModelGroupMembersConditionInput
  ) {
    createGroupMembers(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGroupMembers = /* GraphQL */ `
  mutation UpdateGroupMembers(
    $input: UpdateGroupMembersInput!
    $condition: ModelGroupMembersConditionInput
  ) {
    updateGroupMembers(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroupMembers = /* GraphQL */ `
  mutation DeleteGroupMembers(
    $input: DeleteGroupMembersInput!
    $condition: ModelGroupMembersConditionInput
  ) {
    deleteGroupMembers(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGroupAdmins = /* GraphQL */ `
  mutation CreateGroupAdmins(
    $input: CreateGroupAdminsInput!
    $condition: ModelGroupAdminsConditionInput
  ) {
    createGroupAdmins(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGroupAdmins = /* GraphQL */ `
  mutation UpdateGroupAdmins(
    $input: UpdateGroupAdminsInput!
    $condition: ModelGroupAdminsConditionInput
  ) {
    updateGroupAdmins(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroupAdmins = /* GraphQL */ `
  mutation DeleteGroupAdmins(
    $input: DeleteGroupAdminsInput!
    $condition: ModelGroupAdminsConditionInput
  ) {
    deleteGroupAdmins(input: $input, condition: $condition) {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
