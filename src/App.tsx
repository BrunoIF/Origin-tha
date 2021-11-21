import React from 'react';
import Navbar from './components/Navbar';
import { Title } from 'styles/typography';
import Content from 'components/Content';
import { Col, Row } from 'styles/layout';
import useIsMobileResolution from 'hooks/useIsMobileResolution';

export function App(): JSX.Element {
  const isMobile = useIsMobileResolution();

  return (
    <>
      <Navbar />
      <Title margin="32px auto 24px auto">
        Let&apos;s plan your <span className="bold">saving goal</span>.
      </Title>
      <Row justify="center">
        <Col span={isMobile ? 12 : 4}>
          <Content />
        </Col>
      </Row>
    </>
  );
}
