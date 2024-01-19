import React from "react";

const FixedBgAttachmentVideo1 = () => {
	return (
		<div className="relative h-[30rem]">
			<div className=" absolute z-10 bg-fixed bg-cover opacity-50 bg-[url('../../public/BG3.jpg')] h-full w-full"></div>
			<div className="flex z-20 absolute  flex-col items-center w-full py-10">
				<h2 className="text-4xl w-2/3 text-center font-bold my-8">
					9th International Conference for Convergence in Technology
					(I2CT)
				</h2>
				<p className="text-xl text-center w-4/5">
					The theme for 9th I2CT 2024 is Convergence in Futuristic
					Smart Technology – researchers and engineers will be brought
					together from academia and industry, and they will freely
					expose their ideas and opinions on emerging issues in the
					field of electrical, electronics and computer engineering as
					well as information technologies.
				</p>
			</div>
		</div>
	);
};

export default FixedBgAttachmentVideo1;
