export default function Button({
    children,
    onClick,
    type = 'button',
    className = '',
                               }:{
    children:React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}) {
    return (
        <button
            type = {type}
            onClick =  {onClick}
            className={`px-4 py-2 bg-neutral-500 text-white rounded hover:bg-neutral-600 ${className}`}
        >
            {children}
        </button>
    );
}