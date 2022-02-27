import locationSvg from "../assets/location.svg";

interface Props {
    key: number;
    item: {
        id: number;
        location: string;
        title: string;
        body: string;
        img: string;
        date: string;
        gmaps: string;
    };
}

function getImageUrl(name: string) {
    return new URL(`../assets/${name}`, import.meta.url).href;
}

const Card = ({ item }: Props) => {
    return (
        <section className="card flex justify-center">
            <div className="flex gap-5 text-color-default w-[570px] sm:flex-col sm:gap-4">
                <div
                    className="min-h-[230px] min-w-[170px] bg-center bg-cover rounded-lg"
                    style={{ backgroundImage: `url(${getImageUrl(item.img)})` }}
                ></div>
                <div>
                    <div className="location flex text-sm">
                        <img src={locationSvg} alt="" />
                        <p className="ml-1">{item.location}</p>
                        <a
                            href={item.gmaps}
                            target="_blank"
                            className="underline ml-4 text-link"
                        >
                            View on Google Maps
                        </a>
                    </div>
                    <h2 className="font-bold text-[28px] my-4 sm:my-2">
                        {item.title}
                    </h2>
                    <p className="font-bold text-sm">{item.date}</p>
                    <p className="text-sm leading-[150%] mt-2">{item.body}</p>
                </div>
            </div>
        </section>
    );
};

export default Card;
