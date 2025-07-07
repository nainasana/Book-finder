export default function Loading() {
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 h-screen flex flex-col gap-4 items-center justify-center">
            <span className="loading loading-spinner text-accent"></span>
            <i>Loading...</i>
        </div>
    );
}
