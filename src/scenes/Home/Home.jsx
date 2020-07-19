import React from 'react';
import styled from 'styled-components';

function Home({ className }) {

  return (
    <section className={`${className} Home`}>
      Home
    </section>
  )
}

export default styled(Home)`
  &.Home {

  }
`;