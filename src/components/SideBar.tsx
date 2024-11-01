import React, { useEffect, useState } from 'react';
import { getEpisodes } from '../services/service';

interface Episode {
    id: number;
    name: string;
}

interface EpisodeListProps {
    onEpisodeSelect: (id: number) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ onEpisodeSelect }) => {
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            const data = await getEpisodes();
            setEpisodes(data.results);
        };
        fetchEpisodes();
    }, []);
    const getEpisodeId = (id :any)=>{
        //console.log(id);
        onEpisodeSelect(id)
        

    }

    return (
        <div className="list-group">
            {episodes.map(episode => (
                <button
                    key={episode.id}
                    className="list-group-item list-group-item-action"
                    onClick={() => getEpisodeId(episode.id)}
                >
                    {episode.name}
                </button>
            ))}
        </div>
    );
};

export default EpisodeList;