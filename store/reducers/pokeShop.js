const initialState = {
  items: [
    {
      img: require('../../assets/img/pokeball.png'),
      name: 'Pokeball',
      price: 200,
    },
    {
      img: require('../../assets/img/superball.png'),
      name: 'Superball',
      price: 600,
    },
    {
      img: require('../../assets/img/hyperball.png'),
      name: 'HyperBall',
      price: 1200,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
