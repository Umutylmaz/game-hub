import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () =>
    useQuery<Platform[], Error>({
        queryKey: ['platforms'],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>('/platforms/lists/parent')
                .then(res => res.data.results),
        staleTime: 24 * 60 * 60 * 1000, //24hour
        initialData: platforms
    })

export default usePlatforms;