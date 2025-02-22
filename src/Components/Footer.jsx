import React from "react";

const Footer = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-10  gap-32 flex">
                <div className="basis-1/2 px-4 py-3">
                    <h1 className="font-semibold text-[25vh] leading-none tracking-tight">
                        refokus.
                    </h1>
                </div>
                <div className="basis-1/2 flex gap-10">
                    <div className="basis-1/3 ">
                        <h4 className="text-zinc-300 font-semibold capitalize mb-10">
                            socials
                        </h4>
                        {["instagram", "twitter", "linkedin"].map((item, index) => (
                            <a key={index} className="block mt-3 text-zinc-600 capitalize">{item}</a>))}
                     </div>
                    <div className="basis-1/3 ">
                    <h4 className="text-zinc-300 font-semibold capitalize mb-10">
                            socials
                        </h4>
                        {["instagram", "twitter", "linkedin"].map((item, index) => (
                            <a key={index} className="block mt-3 text-zinc-600 capitalize">{item}</a>
                        ))}
                    </div>
                    <div className="text-zinc-500 flex flex-col items-end ">
                        <p className="text-right">refokus is a pioneering digital agency driven by design and empowered by technology</p>
                        <img className="w-[20vh] mt-5" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Footer;
