import React, { useState } from 'react';
import EpisodeList from './components/SideBar';
import CharacterGrid from './components/charactor';

const App: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [selectedEpisode, setSelectedEpisode] = useState<number | null>(1);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h3>Episodes</h3>
                    <EpisodeList onEpisodeSelect={setSelectedEpisode} />
                </div>
                <div className="col-9">
                    <h3>Characters</h3>
                    <CharacterGrid page={page} episode={selectedEpisode}  />
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-primary mx-1" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                            Previous
                        </button>
                        <button className="btn btn-primary mx-1" onClick={() => handlePageChange(page + 1)}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
