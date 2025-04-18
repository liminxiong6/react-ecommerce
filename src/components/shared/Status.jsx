import React from "react";

const Status = ({ text, icon: Icon, bg, color }) => {
	return (
		<div
			className={`${bg} ${color} flex items-center gap-1 rounded p-2 font-medium`}
		>
			{text} <Icon size={15} />
		</div>
	);
};

export default Status;
