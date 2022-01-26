export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
    name
    id
    updatedAt
    createdAt
    effortDays {
      items {
        colourString
        createdAt
        day
        id
        score
        updatedAt
      }
    }
    groups_admin {
      items {
        group {
          name
          id
        }
      }
    }
    groups_member {
      items {
        group {
          name
          id
        }
      }
    }
  }
}`;