import { AudioMode, AudioSource, AudioStatus, RecorderState, RecordingOptions, RecordingStatus } from './Audio.types';
import AudioModule from './AudioModule';
import { AudioPlayer, AudioRecorder } from './AudioModule.types';
export declare function useAudioPlayer(source?: AudioSource | string | number | null, updateInterval?: number): AudioPlayer;
export declare function useAudioPlayerStatus(player: AudioPlayer): AudioStatus;
export declare function useAudioSampleListener(player: AudioPlayer, listener: (data: {
    channels: {
        frames: number[];
    }[];
    timestamp: number;
}) => void): void;
export declare function useAudioRecorder(options: RecordingOptions, statusListener?: (status: RecordingStatus) => void): [AudioRecorder, RecorderState];
export declare function setIsAudioActiveAsync(active: boolean): Promise<void>;
export declare function setAudioModeAsync(mode: AudioMode): Promise<void>;
export { AudioModule, AudioPlayer, AudioRecorder };
export * from './Audio.types';
//# sourceMappingURL=index.d.ts.map