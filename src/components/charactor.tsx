import React, { useEffect, useState } from 'react';
import { getCharacters, getCharactersByEpisode } from "../services/service"
import Loading from './Loading';

interface Character {
    id: number;
    name: string;
    image: string;
}

interface CharacterGridProps {
    page: number;
    episode : number|null
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ page ,episode}) => {
    const [loding,setloading] = useState<boolean>(true)
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            console.log(episode);
            setCharacters([])
            setloading(true)
            
            const data = await getCharacters(page,episode);
            console.log(loding);
            
            //setloading(false)
            //console.log(data);
            
            setCharacters(data.results);
        };
        fetchCharacters();
    }, [page,episode]);
    if (loding) {
        return(
           <Loading/>
          
        )
    }

    return (
        <div className="row">
            {characters.map(character => (
                <div key={character.id} className="col-3 mb-4">
                    <div className="card">
                        <img src={character.image} className="card-img-top" alt={character.name} />
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CharacterGrid;
