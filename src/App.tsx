import React from 'react';
import Navbar from './components/Navbar';
import { Title } from 'styles/typography';
import Content from 'components/Content';

export function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Title margin="32px auto 24px auto">
        Let&apos;s plan your <span>saving goal</span>.
      </Title>
      <Content />
    </>
  );
}
