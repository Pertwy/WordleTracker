/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEffort = /* GraphQL */ `
  subscription OnCreateEffort {
    onCreateEffort {
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
export const onUpdateEffort = /* GraphQL */ `
  subscription OnUpdateEffort {
    onUpdateEffort {
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
export const onDeleteEffort = /* GraphQL */ `
  subscription OnDeleteEffort {
    onDeleteEffort {
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
export const onCreateGroupMembers = /* GraphQL */ `
  subscription OnCreateGroupMembers {
    onCreateGroupMembers {
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
export const onUpdateGroupMembers = /* GraphQL */ `
  subscription OnUpdateGroupMembers {
    onUpdateGroupMembers {
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
export const onDeleteGroupMembers = /* GraphQL */ `
  subscription OnDeleteGroupMembers {
    onDeleteGroupMembers {
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
export const onCreateGroupAdmins = /* GraphQL */ `
  subscription OnCreateGroupAdmins {
    onCreateGroupAdmins {
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
export const onUpdateGroupAdmins = /* GraphQL */ `
  subscription OnUpdateGroupAdmins {
    onUpdateGroupAdmins {
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
export const onDeleteGroupAdmins = /* GraphQL */ `
  subscription OnDeleteGroupAdmins {
    onDeleteGroupAdmins {
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
