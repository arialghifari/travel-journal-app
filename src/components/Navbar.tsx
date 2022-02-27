import globeSvg from "../assets/globe.svg";

const Navbar = () => {
    return (
        <nav className="h-20 bg-white drop-shadow-[0px_4px_10px_rgba(0,0,0,0.04)] flex justify-center items-center gap-3">
            <div>
                <img src={globeSvg} alt="" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-primary">
                MY TRAVEL JOURNAL
            </h1>
        </nav>
    );
};

export default Navbar;
