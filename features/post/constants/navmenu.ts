import { Href } from "expo-router";
import { icons } from "@/assets/icons";

interface INavMenu {
    id: number;
    icon: keyof typeof icons;
    link: string;
}

export const navmenu: INavMenu[] = [
    {
        id: 1,
        icon: "home",
        link: "/feed"
    },
    {
        id: 2,
        icon: "image",
        link: "/image"
    },
    {
        id: 3,
        icon: "video",
        link: "/video"
    },
    {
        id: 4,
        icon: "allusers",
        link: "/users"
    },
    {
        id: 5,
        icon: "bell",
        link: "/notifications"
    },
]