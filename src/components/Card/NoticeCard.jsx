function NoticeCard({
  title,
  subtitle,
  description,
  content,
  imageUrl,
  noticeUrl,
}) {
  return (
    <>
      <div className="h-45vh flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 self-center place-self-center transform transition duration-300 hover:scale-110 hover:shadow-2xl">
        <div
          className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r primary-color to-blu"
          style={{ height: "150px" }} // Set a fixed height for the image container
        >
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full m-0 p-0"
            style={{ objectFit: "cover", height: "100%", width: "100%" }} // Set the image to cover the entire area
          />
        </div>
        <div className="p-6 flex flex-col justify-center flex-grow">
          <h5
            className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            style={{ maxHeight: "50px", overflow: "hidden" }}
          >
            {title}
          </h5>
          <p
            className="block text-base font-light leading-relaxed text-inherit antialiased"
            style={{ maxHeight: "100px", overflow: "hidden" }}
          >
            {description}
          </p>
        </div>
        <div className="p-6 pt-0 mt-auto">
          <button
            data-ripple-light="true"
            type="button"
            className="select-none rounded-lg primary-color py-3 px-6 text-center align-middle text-xs text-white shadow-lg shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-rose-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none font-bold"
          >
            <a href={noticeUrl} className="w-full h-full">
              <div className="flex items-center">
                Leer más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-book ml-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <path d="M3 6l0 13" />
                  <path d="M12 6l0 13" />
                  <path d="M21 6l0 13" />
                </svg>
              </div>
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export { NoticeCard };
