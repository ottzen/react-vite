import { Episode1 } from "./episode1";
import { Episode2 } from "./episode2";
import { EpisodeData } from "../interfaces/episodeData.interface";

export const allEpisodes: EpisodeData[] = [
    {
        episode: "1. Episode",
        episodeTitle: "Den rejsende",
        period: "1929",
        season: "Sæson 1",
        playTime: "45min",
        drTvUrl: "https://www.dr.dk/drtv/episode/matador_2_1",
        data: Episode1,
    },
    {
        episode: "2. Episode",
        episodeTitle: "Genboen",
        period: "1929",
        season: "Sæson 1",
        playTime: "41min",
        drTvUrl: "https://www.dr.dk/drtv/episode/matador_2_1",
        data: Episode2,
    },
];
