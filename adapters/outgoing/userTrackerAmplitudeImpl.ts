import { UserEvent } from '@/domain/model/UserEvent';
import { UserTrackerAmplitude } from './UserTrackerAmplitude';

export const UserTrackerAmplitudeImpl = (): UserTrackerAmplitude => ({
  init: (apiKey: string) => {
    console.log(`UserTrackerAmplitude.init${apiKey}`);
  },
  setDeviceId: (deviceId: string) => {
    console.log(`setDeviceId${deviceId}`);
  },
  track: (event, properties) => {
    console.log('UserTrackerAmpluted', event, properties);
  },
});
