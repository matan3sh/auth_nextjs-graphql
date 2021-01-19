const Topic = () => {
  return (
    <>
      <section className='topic section bd-container'>
        <span className='section-subtitle'>Topic</span>
        <h2 className='section-title'>I have a question</h2>
      </section>

      <div className='topic__container'>
        <div className='topic__card'>
          <img
            src='https://avatars0.githubusercontent.com/u/44439428?s=460&u=27fed5ba4905eae94ad362b54b683d3c48c39316&v=4'
            alt='avatar'
          />
          <div className='topic__body'>
            <h3>Matan Shaviro</h3>
            <small>21h ago</small>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here',
            </p>
            <button className='button button-link button-border'>Replay</button>
          </div>
        </div>
        <div className='topic__card'>
          <img
            src='https://avatars0.githubusercontent.com/u/44439428?s=460&u=27fed5ba4905eae94ad362b54b683d3c48c39316&v=4'
            alt='avatar'
          />
          <div className='topic__body'>
            <h3>Matan Shaviro</h3>
            <small>21h ago</small>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here',
            </p>
            <button className='button button-link button-border'>Replay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;
