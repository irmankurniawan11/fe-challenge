export default function Loading() {
    return (
        <div className="container max-w-7xl mx-auto">
            <h1 className="text-4xl leading-[3rem] font-bold text-center my-8">Blog Post</h1>
            <div className="flex gap-2 flex-wrap justify-center">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                    <div className="animate-pulse flex flex-col justify-between w-[512px] max-w-lg bg-white gap-2 p-6 rounded-xl border border-slate-100">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-200">
                                </div>
                                <div className="w-32 h-[20px] rounded-md bg-slate-200"></div>
                            </div>
                            <div>
                                <div className=" h-[20px] rounded-md bg-slate-200 mb-2"></div>
                                <div className="w-48 h-[20px] rounded-md bg-slate-200"></div>
                            </div>
                            <div>
                                <div className="h-[16px] rounded-md bg-slate-200 mb-2"></div>
                                <div className="w-64 h-[16px] rounded-md bg-slate-200"></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                            <div className="flex gap-2 items-center">
                                <div className="w-16 h-[16px] rounded-md bg-slate-200"></div>
                                <div className="w-16 h-[16px] rounded-md bg-slate-200"></div>
                            </div>
                            <div className="w-32 h-[36px] rounded-full bg-slate-200"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}