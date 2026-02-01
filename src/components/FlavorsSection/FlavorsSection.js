'use client';
import { useState } from 'react';

const flavors = [
    {
        id: 'orange',
        title: 'Orange flavor',
        color: 'text-[#FFA500]',
        textDark: 'text-[#CC8400]',
        bg: 'bg-[#FFF4E6]',
        hoverBg: 'hover:bg-[#FFA500]',
        gradient: 'from-[#FFA500] to-[#FF9100]',
        img: '/images/Orange juice bottle.png',
        fullImg: '/images/orange bottle.png',
        shutterType: 'shutter-left-to-right',
        arrow: '→'
    },
    {
        id: 'plum',
        title: 'Plum flavor',
        color: 'text-[#D14785]',
        textDark: 'text-[#A6386A]',
        bg: 'bg-[#FDF2F7]',
        hoverBg: 'hover:bg-[#D14785]',
        gradient: 'from-[#D14785] to-[#B3306B]',
        img: '/images/Plum juice bottle.png',
        fullImg: '/images/plum bottle.png',
        shutterType: 'shutter-center',
        arrow: '↔'
    },
    {
        id: 'kiwi',
        title: 'Kiwi flavor',
        color: 'text-[#6DBE45]',
        textDark: 'text-[#579837]',
        bg: 'bg-[#F4FAF0]',
        hoverBg: 'hover:bg-[#6DBE45]',
        gradient: 'from-[#6DBE45] to-[#4A8F2F]',
        img: '/images/kiwi juice bottle.png',
        fullImg: '/images/kiwi bottle.png',
        shutterType: 'shutter-center',
        arrow: '↔'
    },
    {
        id: 'strawberry',
        title: 'Strawberry flavor',
        color: 'text-[#901D22]',
        textDark: 'text-[#73171B]',
        bg: 'bg-[#FFF0F0]',
        hoverBg: 'hover:bg-[#901D22]',
        gradient: 'from-[#901D22] to-[#701216]',
        img: '/images/strawbery juice bottle.png',
        fullImg: '/images/strawbery bottle.png',
        shutterType: 'shutter-right-to-left',
        arrow: '←'
    },
];

export default function FlavorsSection() {
    const [selectedFlavor, setSelectedFlavor] = useState(null);

    const handleFlavorClick = (flavor) => {
        setSelectedFlavor(flavor);
    };
    const handleClose = (e) => {
        e.stopPropagation();
        setSelectedFlavor(null);
    };

    const isAnySelected = selectedFlavor !== null;

    return (
        <section className={`relative w-full ${isAnySelected ? 'h-screen' : 'h-[800px] md:h-[720px]'} bg-white border-y border-gray-100 font-outfit transition-all duration-700 ${isAnySelected ? 'z-50 overflow-visible' : 'z-10 overflow-hidden'}`}>
            <div className={`flex flex-wrap md:flex-nowrap w-full h-full relative ${isAnySelected ? 'static' : ''}`}>
                {flavors.map((flavor) => {
                    const isSelected = selectedFlavor?.id === flavor.id;
                    const isAnySelectedLocal = selectedFlavor !== null;

                    return (
                        <div
                            key={flavor.id}
                            onClick={() => !isSelected && handleFlavorClick(flavor)}
                            className={`group flex flex-col items-center justify-center overflow-hidden transition-all duration-[2500ms] cubic-bezier(0.645, 0.045, 0.355, 1) cursor-pointer
                                ${isSelected
                                    ? 'fixed md:relative inset-0 md:inset-auto z-[100] md:z-30 w-full h-screen md:h-full md:flex-[100] cursor-default'
                                    : isAnySelectedLocal
                                        ? 'opacity-0 scale-95 md:flex-[0.00001] pointer-events-none'
                                        : 'relative w-1/2 h-1/2 md:h-full md:flex-1 bg-[#F8F8F8] even:bg-white'}
                            `}
                        >
                            {/* Shutter Content */}
                            <div className={`shutter-top-to-bottom absolute inset-0 z-10 flex flex-col transition-all duration-[1500ms] ease-in-out ${flavor.bg} ${isSelected ? 'shutter-open opacity-100' : ''}`}>
                                <div className="relative w-full h-[55%] md:h-[65%] flex items-center justify-center overflow-hidden pt-8">
                                    <img
                                        src={flavor.img}
                                        alt={flavor.title}
                                        className={`w-2/3 md:w-full h-full object-contain transform transition-all duration-[1500ms] ease-in-out
                                            ${isSelected ? 'opacity-0 -translate-y-24 scale-110' : 'opacity-100 translate-y-0 scale-100 group-hover:scale-105'}
                                            ${!isSelected ? 'delay-[600ms]' : 'delay-0'}
                                        `}
                                    />
                                </div>

                                <div className={`w-full h-[45%] md:h-[35%] flex flex-col items-center justify-start pt-4 md:pt-4 px-4 text-center transition-all duration-[1000ms] ${isSelected ? 'opacity-0 scale-95' : 'opacity-100'} ${!isSelected ? 'delay-[800ms]' : 'delay-0'}`}>
                                    <h2 className={`text-3xl md:text-[3.2rem] font-black ${flavor.color} leading-none mb-1`}>Juice</h2>
                                    <h3 className={`text-base md:text-xl font-bold ${flavor.textDark} mb-6 md:mb-6 capitalize`}>{flavor.title}</h3>
                                    <button className={`view-more-btn px-6 md:px-10 py-2.5 md:py-3 rounded-full border-2 border-current ${flavor.color} font-bold text-xs md:text-sm transition-all duration-300 ${flavor.hoverBg} hover:text-white cursor-pointer uppercase tracking-wider`}>
                                        {flavor.arrow === '←' ? `${flavor.arrow} View more` : `View more ${flavor.arrow}`}
                                    </button>
                                </div>
                            </div>

                            {/* Card Content (Default State) */}
                            <div className={`relative z-20 text-center transition-all duration-[1000ms] pointer-events-none p-4 ${isAnySelectedLocal ? 'opacity-0 scale-90 translate-y-8' : 'opacity-100 translate-y-0'} ${!isAnySelectedLocal ? 'delay-500' : 'delay-0'}`}>
                                <h2 className={`text-4xl md:text-[3.5rem] font-black ${flavor.color} mb-1 tracking-tight group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-500 drop-shadow-sm`}>Juice</h2>
                                <h3 className={`text-lg md:text-2xl font-bold mb-6 md:mb-12 capitalize group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-500 delay-75 ${flavor.color}`}>{flavor.title}</h3>
                                <button className={`view-more-btn pointer-events-auto mx-auto flex items-center gap-2 px-8 md:px-10 py-3 md:py-3.5 rounded-full border-2 border-current ${flavor.color} font-bold text-xs md:text-sm transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4 ${flavor.hoverBg} hover:text-white cursor-pointer uppercase tracking-widest`}>
                                    View more
                                    <span className="ml-2 font-bold">{flavor.arrow}</span>
                                </button>
                            </div>

                            {/* Expanded Content View */}
                            <div className={`absolute inset-0 z-30 flex items-center justify-center bg-gradient-to-br ${flavor.gradient} transition-all duration-[1500ms] ease-in-out ${isSelected ? 'opacity-100' : 'opacity-0 pointer-events-none delay-[800ms]'}`}>
                                {/* Premium Background Elements */}
                                <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-[2000ms] ease-out ${isSelected ? 'scale-100' : 'scale-125 opacity-0'}`}>
                                    <span className="text-[25vw] md:text-[30vw] font-black text-white/[0.08] whitespace-nowrap tracking-tighter uppercase leading-none transform -rotate-12 translate-y-4 md:translate-y-12">PULPY</span>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] border-[1px] border-white/10 rounded-full" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[45vw] h-[60vw] md:h-[45vw] border-[1px] border-white/5 rounded-full" />
                                </div>

                                {/* Content Layer - This is the "Full Width Section" */}
                                <div className={`relative z-10 w-full h-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-12 md:py-12 gap-8 md:gap-0 transition-all ease-in-out
                                    ${isSelected ? 'translate-y-0 opacity-100 scale-100 duration-[1500ms] delay-300' : 'translate-y-16 opacity-0 scale-90 duration-[800ms] delay-[600ms]'}
                                `}>
                                    {/* Left Side: Product Info */}
                                    <div className="w-full md:w-5/12 text-white flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-4 order-2 md:order-1">
                                        <div className="hidden md:block h-1 w-20 bg-white/40 mb-4" />
                                        <h4 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black drop-shadow-lg tracking-tight leading-tight">
                                            Delicious <br className="hidden md:block" />
                                            <span className="opacity-80 font-medium italic">{flavor.id} Experience</span>
                                        </h4>
                                        <p className="text-base md:text-xl opacity-90 leading-relaxed max-w-[450px] font-light">
                                            Discover our wide range of fresh fruit pulpy juice that leaves you refresh. We bring you the finest quality of juice squeezed from hand-picked orchards.
                                        </p>
                                        <button
                                            onClick={handleClose}
                                            className="group mt-4 md:mt-4 px-10 md:px-12 py-4 md:py-5 rounded-full bg-white text-juice font-bold text-base md:text-lg shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex items-center gap-3"
                                        >
                                            Shop Now
                                            <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl md:text-2xl">→</span>
                                        </button>
                                    </div>

                                    {/* Center: Large Bottle */}
                                    <div className="w-full md:w-4/12 h-[35vh] md:h-full flex items-center justify-center relative order-1 md:order-2">
                                        <div className={`absolute w-[220px] md:w-[300px] h-[220px] md:h-[300px] bg-white/20 blur-[70px] md:blur-[100px] rounded-full transition-all duration-[1500ms] ${isSelected ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                                        <img
                                            src={flavor.fullImg}
                                            alt={flavor.title}
                                            className={`h-full md:max-h-[85%] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.4)] md:drop-shadow-[0_45px_65px_rgba(0,0,0,0.4)] z-10 transform transition-all ease-in-out ${isSelected ? 'scale-100 rotate-0 opacity-100 duration-[1500ms] delay-500' : 'scale-75 rotate-6 opacity-0 duration-[800ms] delay-[600ms]'}`}
                                        />
                                    </div>

                                    {/* Right Side: Sizes */}
                                    <div className="w-full md:w-3/12 flex flex-col items-center md:items-end gap-6 md:gap-8 text-white order-3">
                                        <div className="flex flex-row md:flex-col gap-6 md:gap-6 p-4 md:p-6 rounded-[30px] md:rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                                            {[
                                                { size: '500 ml', active: false },
                                                { size: '100 ml', active: true },
                                                { size: '125 ml', active: false }
                                            ].map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center text-[10px] md:text-[10px] font-black uppercase text-center border-2 transition-all duration-500 cursor-pointer group ${item.active ? 'bg-white text-juice border-white scale-110 shadow-[0_10px_20px_rgba(255,255,255,0.3)]' : 'border-white/40 hover:border-white hover:bg-white/5'}`}
                                                >
                                                    <span className="text-xs md:text-sm">{item.size.split(' ')[0]}</span>
                                                    <span className="opacity-60 hidden md:inline">{item.size.split(' ')[1]}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-center md:text-right hidden sm:block">
                                            <p className="text-[10px] md:text-sm opacity-60 uppercase tracking-widest mb-1 md:mb-1">Select Size</p>
                                            <p className="text-xl md:text-2xl font-bold">Standard Glass</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Close Trigger */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-8 md:top-12 right-8 md:right-12 text-white/40 hover:text-white transition-all hover:rotate-90 duration-500 cursor-pointer p-2 md:p-2 z-[60] bg-black/10 hover:bg-black/20 rounded-full"
                                >
                                    <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
