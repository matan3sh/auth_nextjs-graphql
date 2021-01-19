const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const data = {
  users: [
    {
      _id: user1Id,
      avatar:
        'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
      email: 'matan3sh@gmail.com',
      name: 'Matan Shaviro',
      username: 'matan3sh',
      info: 'Hello my name is Matan Shaviro',
      password: 'testtest',
      role: 'admin',
    },
    {
      _id: user2Id,
      avatar:
        'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
      email: 'test@gmail.com',
      name: 'Test User',
      username: 'testUser',
      info: 'Hello I am Test User',
      password: 'testtest',
    },
  ],
  portfolios: [
    {
      title: 'freshbnb - Rental Marketplace',
      slug: 'freshbnb',
      subtitle: 'Web Development',
      image:
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602340233/portfolio/freshbnb1.png',
      description:
        'End2end marketplace for apartments rentals with user profile and authentication. Every user can be a Host and search for rentals around any area he wants.',
      tech: ['react', 'mongo', 'graphql', 'next', 'apollo'],
      images: [
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602340230/portfolio/freshbnb2.png',
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602340233/portfolio/freshbnb1.png',
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602340231/portfolio/freshbnb3.png',
      ],
      user: user1Id,
    },
    {
      title: 'Techzon - Online Shopping',
      slug: 'techzon',
      subtitle: 'Web Development',
      image:
        'https://media-exp1.licdn.com/dms/image/C4D22AQE_2wIJUQt64Q/feedshare-shrink_800-alternative/0/1602915127987?e=1611792000&v=beta&t=rdRT4CvDX4lEtIlrZqeYi5titGTmFX0Iy_5rfzgN8qc',
      description:
        'End2end marketplace for apartments rentals with user profile and authentication. Every user can be a Host and search for rentals around any area he wants.',
      tech: ['react', 'node', 'mongo', 'express', 'next'],
      images: [
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602857286/portfolio/techzone.png',
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602857283/portfolio/techzon1.png',
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1602857283/portfolio/techzon2.png',
      ],
      user: user1Id,
    },
    {
      title: 'Tweedev - Developer Social',
      slug: 'tweedev',
      subtitle: 'Web Development',
      image:
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1604508726/portfolio/tweedev.png',
      description:
        'End2end marketplace for apartments rentals with user profile and authentication. Every user can be a Host and search for rentals around any area he wants.',
      tech: ['react', 'node', 'mongo', 'graphql', 'express', 'apollo'],
      images: [
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1604508726/portfolio/tweedev.png',
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1604508726/portfolio/tweedev2.png',
        'https://res.cloudinary.com/dwymjj6rm/image/upload/v1604508723/portfolio/tweedev1.png',
      ],
      user: user1Id,
    },
  ],
};

module.exports = data;
