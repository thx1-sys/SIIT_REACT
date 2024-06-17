import "./NoticeCardStudent.css";

function NoticeCardStudent({ title, inf }) {
  return (
    <div className="flex flex-col w-full h-64 bg-gradient-linear text-white border border-slate-300 justify-center p-4 gap-4 rounded-lg transform transition duration-500 hover:scale-110 opacity-90 hover:opacity-100 hover:shadow-2xl">
      <div className="text-lg font-bold capitalize rounded-md overflow-y-auto scrollbar-hide">
        {title}
      </div>
      <div className="rounded-md overflow-y-auto scrollbar-hide">{inf}</div>
    </div>
  );
}

export { NoticeCardStudent };
