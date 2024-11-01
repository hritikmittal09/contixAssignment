import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading: React.FC = () => {
  return (
    <div className="row w-100%" >
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="col-3 mb-3">
          <div className="card">
            <Skeleton height={150} width="100%" />
            <div className="card-body">
              <Skeleton width="80%" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
