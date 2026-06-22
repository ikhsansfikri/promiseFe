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
            className="group p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col items-center text-center"
        >
            <img
                src={img}
                className="h-10 sm:h-12 w-10 sm:w-12 mb-3 group-hover:scale-110 transition duration-300"
            />
            <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">{title}</h3>
            <p className="text-xs text-gray-500">{subtitle}</p>
        </a>
    );
}