import React from 'react';

const StatsSection = () => {
    const stats = [
        {
            label: "Total Downloads",
            value: "29.6M",
            description: "21% More Than Last Month",
        },
        {
            label: "Total Reviews",
            value: "906K",
            description: "46% More Than Last Month",
        },
        {
            label: "Active Apps",
            value: "132+",
            description: "31 More Will Launch",
        },
    ];

    return (
        <section className="bg-purple-600 py-10 px-6 text-white text-center">
            <div className="w-full mx-auto">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold mb-12">
                    Trusted By Millions, Built For You
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Stat Label */}
                            <p className="text-sm md:text-base opacity-80 mb-2 uppercase tracking-wide">
                                {stat.label}
                            </p>

                            {/* Stat Value */}
                            <h3 className="text-3xl md:text-5xl font-bold mb-3">
                                {stat.value}
                            </h3>

                            {/* Stat Description */}
                            <p className="text-xs md:text-sm opacity-70">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;