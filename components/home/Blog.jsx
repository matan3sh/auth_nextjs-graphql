import React from 'react';

import { MoreVertIcon } from 'components/icons';

const blogs = [
  {
    title: 'Electron & React JS: Build Native Chat App with Javascript',
    author: 'Matan Shaviro',
    createdAt: 'January 8, 2021',
    image: 'https://img-a.udemycdn.com/course/750x422/3484696_073f.jpg',
  },
  {
    title: 'Vue JS 3, React JS & Angular - Guide to Popular Frameworks',
    author: 'Matan Shaviro',
    createdAt: 'January 8, 2021',
    image: 'https://img-a.udemycdn.com/course/750x422/3437650_7012_2.jpg',
  },
  {
    title: 'Next.js and Apollo - Portfolio App (w/ React, GraphQL, Node)',
    author: 'Matan Shaviro',
    createdAt: 'January 8, 2021',
    image: 'https://img-a.udemycdn.com/course/750x422/2940030_c817.jpg',
  },
];

const Blog = () => {
  return (
    <section className='blog section bd-container' id='Blog'>
      <span className='section-subtitle'>Blog</span>
      <h2 className='section-title'>Recent Posts</h2>

      <div className='blog__container'>
        <div className='blog__card'>
          {blogs.map((blog, index) => (
            <div className='blog__content' key={index}>
              <div className='blog__header'>
                <img src={blog.image} alt='blog-post' className='blog__img' />
                <img
                  src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
                  alt=''
                  className='blog__author'
                />
                <span className='blog__client'>{blog.author}</span>
              </div>
              <div className='blog__content-wrapper'>
                <h3 className='blog__title'>{blog.title}</h3>
              </div>
              <div className='blog__view'>
                <p>{blog.createdAt}</p>
                <MoreVertIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
