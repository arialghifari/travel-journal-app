import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

const Cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
});

const App = () => {
    return (
        <>
            <Navbar />
            <main className="py-10 flex flex-col gap-5 sm:px-4 sm:gap-10">
                {Cards}
            </main>
        </>
    );
};

export default App;
