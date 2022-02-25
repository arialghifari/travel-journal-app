interface Data {
    id: number;
    location: string;
    title: string;
    body: string;
    img: string;
    date: string;
    gmaps: string;
}

const Data: Data[] = [
    {
        id: 1,
        location: "Lombok Island, ID",
        title: "Sembalun Village",
        body: "Sembalun is a wonderful place to visit in lombok, its in east north part of Lombok. Sembalun is surounded by beautiful hill and of course Mount Rinjani, breathtaking!",
        img: "sembalun.png",
        date: "20 Feb 2022 - 24 Feb 2022",
        gmaps: "https://goo.gl/maps/veaU5A8vc6thFnfE9",
    },
    {
        id: 2,
        location: "Lombok Island, ID",
        title: "Mandalika Circuit",
        body: "Mandalika International Street Circuit is located in Central Lombok Regency in West Nusa Tenggara province of Indonesia. It has such a beautiful view from the hill near the circuit, you can also see circuit surounded by hills and beach nearby.",
        img: "mandalika.png",
        date: "1 Feb 2022",
        gmaps: "https://goo.gl/maps/96fEtLPZQH17c8xs9",
    },
    {
        id: 3,
        location: "Bali, ID",
        title: "GWK Cultural Park",
        body: "GWK (Garuda Wisnu Kencana) is the most iconic landmark in Bali its 120.9 meters high, it feels like the statue just watch over the island. You also can play segway ride and other activities. There’s so much to cover!",
        img: "gwk.png",
        date: "15 Jan 2022",
        gmaps: "https://goo.gl/maps/T2iubMUiyZDDys1WA",
    },
];

export default Data;
