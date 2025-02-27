export interface Line {
    line: string;
}

export interface EpisodeLine {
    start: string;
    end: string;
    lines: Line[];
}

export type Episode = EpisodeLine[];