import React from 'react';
// import variables from './variables.module.scss';
// import './scsstest.scss';
import '../../public/assets/sass/components/_scsstest.scss';

export const Scsstest = () => {
  return (
    <>
      <div className="test-container">
        <section className="test-special">Scsstest</section>
        <section
          className="section-test1"
          style={{ color: 'blue', fontSize: '20px' }}
        >
          Scsstest
        </section>
        <section className="section-test2">Scsstest</section>
        <section className="section-test3">Scsstest</section>
      </div>
    </>
  );
};

export default Scsstest;
