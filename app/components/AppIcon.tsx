interface AppIconProps {
    url?: string;
    img: string;
    title: string;
    subtitle: string;
}

export default function AppIcon({ url, img, title, subtitle }: AppIconProps) {
    return (
        <a
            href={url}
            target="_blank"
            className="group p-5 rounded-2xl bg-white  shadow-sm hover:shadow-xl transition flex flex-col items-center"
        >
            <img
                src={img}
                className="h-12 w-12 mb-3 group-hover:scale-110 transition duration-300"
            />
            <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
            <p className="text-xs text-gray-500">{subtitle}</p>
        </a>
    );
}
