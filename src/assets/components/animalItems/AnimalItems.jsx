import "./animalItems.css"

const AnimalItems = ({emoji, name, species, habitat, diet, lifespan, funfact1, funfact2, funfact3}) => {
    return (
        <>
            <div className="emoji">{emoji}</div>
            <h2>{name}</h2>
            <h3>{species}</h3>
            <h3>{habitat}</h3>
            <h3>{diet}</h3>
            <p>{lifespan}</p>
            <div className="funfacts">
                <ul>
                    <li>{funfact1}</li>
                    <li>{funfact2}</li>
                    <li>{funfact3}</li>
                </ul>
            </div>
        </>
    );
}

export default AnimalItems;