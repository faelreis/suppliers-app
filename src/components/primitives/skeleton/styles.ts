import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonContainer = styled.div<{
	width: string;
	height: string;
}>`
	background: #f0f0f0;
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	border-radius: 4px;
	animation: ${shimmer} 1.5s infinite linear;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
`;
