import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { imageProps, PaginatedResponse } from "../pages/Home";

const fetchImage = async (
  id: number
): Promise<PaginatedResponse<imageProps>> => {
  const response = await fetch(
    `https://pixabay.com/api/?key=30718815-7a91dad995e224b2d59581c16&id=${id}&image_type=photo`
  ).then((response) => response.json());
  return response;
};
export const DetailPage = () => {
  const [image, setImage] = useState<imageProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [err, setError] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchedImages = async () => {
      try {
        const res: PaginatedResponse<imageProps> = await fetchImage(Number(id));
        setImage(res.hits.flat()[0]);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchedImages();
  }, [id]);

  const height = image?.webformatHeight;
  const width = image?.webformatWidth;

  if (err) {
    return (
      <div className="text-rose-500">
        An error occured! Try reloading the page
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="text-slate-500">Loading...</div>
      ) : (
        <div>
          <div className="grid grid-cols-5">
            <div className="col-span-3 justify-self-center">
              <img
                src={image?.webformatURL}
                alt={image?.tags}
                style={{
                  height: `${height! - 150}px`,
                  width: `${width! - 30}px !important`,
                }}
                className={`object-cover`}
              />
            </div>
            <div className="col-span-2 space-y-3 p-4 divide-y rounded-3xl shadow shadow-slate-300 border max-w-[26rem] justify-self-end border-slate-300 divide-slate-300 ">
              <div className="space-y-3 ">
                <div className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-slate-500/50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm">
                    Free for use under the Pixabay <span>Content License</span>
                  </p>
                </div>
                <div className="inline-flex gap-4 items-center">
                  <button className="px-7 py-2.5 border border-slate-300/50 rounded-full">
                    Edit image
                  </button>
                  <button className="flex items-center text-white gap-2 px-4 py-2.5 bg-[#02be6e] rounded-full">
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6 py-4 ">
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex gap-2 items-center border px-8 py-2.5 rounded-md border-slate-300/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>

                    <span>{image?.likes}</span>
                  </div>
                  <div className="flex gap-2 items-center border px-8 py-2.5 rounded-md border-slate-300/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>

                    <span>Save</span>
                  </div>

                  <div className="flex gap-2 items-center border p-2.5 rounded-md border-slate-300/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-2 items-center border p-2.5 rounded-md border-slate-300/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="flex w-full justify-between">
                    <span>views</span>
                    <span>{image?.views}</span>
                  </div>
                  <div className="flex w-full justify-between">
                    <span>Downloads</span>
                    <span>{image?.downloads}</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <div>
                  <div className="flex items-center gap-2">
                    <img
                      src={image?.userImageURL}
                      alt={`/${image?.user}`}
                      className="w-12 h-12 rounded-full "
                    />
                    <div className="text-sm">
                      <h5 className="font-semibold capitalize">
                        {image?.user}
                      </h5>
                      <p className="text-xs">983 followers</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm">
                  If you like my photo, please click like button. Your support
                  will be highly appreciated
                </p>
                <button className="w-full border rounded-full border-slate-300 py-2.5 text-center">
                  Donate
                </button>
              </div>
            </div>
          </div>
          <div>{image?.tags}: Free for use</div>
          <div>{image?.comments} comments</div>
        </div>
      )}
    </>
  );
};
