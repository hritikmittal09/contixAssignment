import React, { useEffect, useState } from 'react';
import { getCharacters } from "../services/service"

interface Character {
    id: number;
    name: string;
    image: string;
}

interface CharacterGridProps {
    page: number;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ page }) => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const data = await getCharacters(page);
            setCharacters(data.results);
        };
        fetchCharacters();
    }, [page]);

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
