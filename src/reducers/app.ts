const InitialState = {
  title: 'TypeScript rocks!',
};

const app = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return InitialState;
  }
};

export default app;
