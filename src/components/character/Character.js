import './character.css'
function Character({id, name, status, species, gender, image}){
    return (
        <div className={'character-wrap'}>
            <div className='character-pic'>
                <img src={image} alt={name}/>
            </div>
            <div className='character-info'>
                <h2>{id}. {name}</h2>
                <h2>status: {status}</h2>
                <h2>species: {species}</h2>
                <h2>gender: {gender}</h2>
            </div>

        </div>
    );
}
export default Character;