const Category = () => {
  return (
    <>
      <section className='category section bd-container'>
        <span className='section-subtitle'>Write a topic about</span>
        <h2 className='section-title'>General Discussion</h2>
      </section>
      <div className='category__container'>
        <div className='category__card'>
          <div className='category__author'>
            <img
              src='https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png'
              alt='avatar'
            />
            <p>Matan</p>
          </div>
          <div className='category__topic'>
            <h2>I have a question</h2>
            <small>4 hours ago</small>
          </div>
          <div className='category__detail'>
            <h3>General Discussion</h3>
            <small>2 Replies</small>
          </div>
        </div>

        <div className='category__card'>
          <div className='category__author'>
            <img
              src='https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png'
              alt='avatar'
            />
            <p>Matan</p>
          </div>
          <div className='category__topic'>
            <h2>I have a question</h2>
            <small>4 hours ago</small>
          </div>
          <div className='category__detail'>
            <h3>General Discussion</h3>
            <small>2 Replies</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
