import React from "react";
import AboutI2ct from "@/components/AboutI2ct";
import CopyrightFooter1 from "@/components/CopyrightFooter1";
import FixedBgAttachmentPaper2 from "@/components/FixedBgAttachmentPaper2";
import FixedBgAttachmentVideo1 from "@/components/FixedBgAttachmentVideo1";
import Headbar1 from "@/components/Headbar1";
import HeadMenuBar2 from "@/components/HeadMenuBar2";
import HeroCorousel from "@/components/HeroCorousel";
import I2ctHistory from "@/components/I2ctHistory";
import I2ctJourney from "@/components/I2ctJourney";
import OurSpeakersCorousel from "@/components/OurSpeakersCorousel";
import SponsorFooter2 from "@/components/SponsorFooter2";
import SuccessCounter from "@/components/SuccessCounter";

const page = () => {
	return (
		<div className="text-white bg-[#181A1B] flex flex-col w-full ">
			<Headbar1 />
			<HeadMenuBar2 />
			<HeroCorousel />
			<AboutI2ct />
			<FixedBgAttachmentVideo1 />
			<I2ctHistory />
			<FixedBgAttachmentPaper2 />
			<SuccessCounter />
			<OurSpeakersCorousel />
			<I2ctJourney />
			<SponsorFooter2 />
			<CopyrightFooter1 />
		</div>
	);
};

export default page;
