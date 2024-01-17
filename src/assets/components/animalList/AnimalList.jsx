import AnimalItems from "../animalItems/AnimalItems";


const AnimalList = ({animals}) => {
    return (
        <>
        <h1>Zoo Party DB</h1>
        <p>Explore the fascinating world of zoo animals!</p>
        {animals.map((animal, index) => {
            return (
                <section key = {index}>
                    <AnimalItems
                    emoji = {animal.emoji}
                    name = {animal.name}
                    species = {animal.species}
                    habitat = {animal.habitat}
                    diet = {animal.diet}
                    lifespan = {animal.lifespan}
                    funfact1 = {animal.funFacts[0]}
                    funfact2 = {animal.funFacts[1]}
                    funfact3 = {animal.funFacts[2]}
                    />
                </section>
            )
        })}
        </>
    );
}

export default AnimalList;