import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { SERVICES } from '../../../static/content';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps & Readonly<{}>;

const Services: VFCX = ({ className }) => (
  <div {...{ className }}>
    {SERVICES.map((service, i) => (
      <div key={i}>
        <div className='emoji'>{service.emoji}</div>
        <h3>{service.title}</h3>
        <div>{service.description}</div>
      </div>
    ))}
  </div>
);

const StyledServices = styled(Services)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  gap: 64px;
  @media (max-width: 1000px) {
    gap: 4vw;
  }
  max-width: 1000px;

  .emoji {
    font-size: 80px;
  }

  > div {
    display: flex;
    flex-direction: column;
    min-height: 250px;
    align-items: center;
    box-shadow: 0 2px 5px -1px #0003, 0 3px 8px -2px #0002;
    background-color: #fff;
    padding: 1em 3em 3em;
    border-radius: 4px;
  }
`;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <h2>Services</h2>
    <StyledServices />
  </div>
);

const StyledComponent = styled(Component)`
  padding: 5vh 20px 10vh 100px;
  @media (max-width: 1000px) {
    padding: 5vh 20px 10vh 20px;
  }
  background-color: #fffc;
  backdrop-filter: blur(16px);
  color: #012d;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 60px;
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
