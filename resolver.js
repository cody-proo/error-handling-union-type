module.exports = {
  resolvers: {
    Query: {
      users: (root, { throwError }) => {
        if (throwError) return { message: "throw error", status: 400 };
        return {
          data: [
            { id: "1", name: "hosein ladmakhi" },
            { id: "2", name: "nima arefi" },
          ],
        };
      },
    },

    UsersResponse: {
      __resolveType(object) {
        if (object?.data) {
          return "UsersSuccess";
        }
        return "UsersError";
      },
    },
  },
};
