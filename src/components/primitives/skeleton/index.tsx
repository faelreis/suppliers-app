"use client";

import React from "react";
import * as S from "./styles";

interface SkeletonProps {
	width?: string;
	height?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
	width = "100%",
	height = "20px",
}) => {
	return <S.SkeletonContainer width={width} height={height} />;
};

export default Skeleton;
