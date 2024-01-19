import React from "react";

const I2ctHistory = () => {
	return (
		<div className="flex flex-col bg-[#181A1B] py-6 items-center gap-4">
			<div className="i2ctjourneybottomborder mt-4 pb-2 text-4xl font-bold">
				I2CT History
			</div>
			{/* <hr className="w-52 h-[10px] text-yellow-900 bg-yellow-600" /> */}
			<div className="pb-3 w-2/3 text-center">
				All Accepted & Presented Papers of Previous Conference has been
				published by IEEE Xplore and Indexed in Scopus ( H-Indexing 12 &
				Web of Science)
			</div>
			<button className="h-10 px-4 py-2 rounded-full bg-[#967000]">
				All Works
			</button>
		</div>
	);
};

export default I2ctHistory;
