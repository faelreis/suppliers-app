"use client";

import Skeleton from "../primitives/skeleton";

const SkeletonTable = () => {
	return (
		<tr>
			<td>
				<Skeleton height="40px" />
			</td>
			<td>
				<Skeleton height="40px" />
			</td>
			<td>
				<Skeleton height="40px" />
			</td>
			<td>
				<Skeleton height="40px" />
			</td>
			<td>
				<Skeleton height="40px" />
			</td>
		</tr>
	);
};

export { SkeletonTable };
