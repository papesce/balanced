import React from 'react';
import Link from 'gatsby-link';

import Fullscreen from '../components/fullscreen';
import Meta from '../components/meta';
import Wrapper from '../components/wrapper';

import styles from './styles.module.css';

const Index = ({ location }) => (
  <div>
    <Meta location={location} />
    <Fullscreen className={styles.intro} firstItem>
      <Wrapper>
        <h1>
          Hello. I’m Pablo Pesce.
          <br />
          <br />
          I’m a FullStack web developer.
          <br />
          <br />
          Check out my <Link className={styles.link} to="/work">work</Link>.
        </h1>
      </Wrapper>
    </Fullscreen>
  </div>
);

export default Index;
