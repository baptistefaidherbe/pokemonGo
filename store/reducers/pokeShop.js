const initialState = {
  items: [
    {
      img: require('../../assets/img/pokeball.png'),
      name: 'Pokeball',
      price: 20,
    },
    {
      img: require('../../assets/img/superball.png'),
      name: 'Superball',
      price: 100,
    },
    {
      img: require('../../assets/img/hyperball.png'),
      name: 'HyperBall',
      price: 300,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
