import { UserTrackerAmplitudeImpl } from '@/adapters/outgoing/userTrackerAmplitudeImpl';
import Logging from '@/components/Logging';
import { UserTracker } from '@/domain/model/UserTracker';
import React from 'react';

export default function Home() {
  const [userTracker] = React.useState<UserTracker>(UserTrackerAmplitudeImpl);
  return (
    <main>
      <Logging track={userTracker.track} />
    </main>
  );
}
