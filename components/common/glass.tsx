import React, { FCX } from 'react';
import styled from '@emotion/styled';

type ContainerProps = Readonly<{ depth?: number; elevation?: number; blur?: number }>;
type Props = Readonly<{ depth: number; elevation: number; blur: number }>;

const Component: FCX<Props> = ({ className, children }) => <div {...{ className }}>{children}</div>;

const StyledComponent = styled(Component)`
  backdrop-filter: blur(${({ blur }) => blur}px);
  box-shadow: ${({ elevation }) =>
    elevation === 1
      ? '0 2px 3px -1px #0002, 0 3px 5px 1px #0002'
      : `0 2px ${elevation + 2}px -1px #000${elevation + 1}, 0 3px ${elevation * 2 + 1}px 1px #000${
          elevation * 2 + 1
        }`};
  border: 1px solid #fff2;
  border-radius: 16px;
  background: linear-gradient(
      135deg,
      ${({ depth }) => `#fff${depth}`} 60%,
      ${({ depth }) => `#ddd${depth}`}
    ),
    radial-gradient(circle, transparent 20%, #0002);
  color: #fff;
`;

const Container: FCX<ContainerProps> = ({ depth = 3, elevation = 1, blur = 8, ...others }) => {
  return <StyledComponent {...{ depth, elevation, blur, ...others }} />;
};

export const Glass = Container;
