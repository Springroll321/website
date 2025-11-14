
interface BadgeProps {
    title: string;
    colorClass?: string;
}
export

function Badge({title, colorClass = "bg-blue-100 text-blue-800"} : BadgeProps) {
    return (
        <span className={`text-medium font-medium me-2 px-2.5 py-0.5 rounded ${colorClass}`}>
            {title}
        </span>
    );
}   
export default Badge;