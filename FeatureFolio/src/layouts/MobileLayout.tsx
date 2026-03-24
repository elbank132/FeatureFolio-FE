export const MobileLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
        <div className="flex items-center justify-start gap-4 bg-blue-900 px-6 py-4">
            <img
                src="/icons/hamburger.svg"
                alt=""
                className="h-[12px] w-[18px] text-white"
            />
            <h1 className="text-2xl font-bold text-white">FeatureFolio</h1>
        </div>
    </div>
  );
};