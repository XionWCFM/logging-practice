import { UserTracker } from '@/domain/model/UserTracker';
import React from 'react';

interface LoggingProps {
  track: UserTracker['track'];
}

const Logging = ({ track }: LoggingProps) => {
  return (
    <div>
      <button onClick={() => track('home:apply-button:click')}>
        track함수 호출
      </button>
    </div>
  );
};

export default Logging;
