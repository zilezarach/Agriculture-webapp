import React from "react";
import Image from "next/image";
import { title } from "process";

export default function Page() {
  const videos = [
    {
      title: "The Dairy Goat",
      videoId: "VYsWRRRZnWM",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=10TvNOPm0pzA9CfbLzAFB3KP50lmbVXQC",
    },
    {
      title: "On Farm Clean Milk Production",
      videoId: "neJh-CflIKo",
      downloadLink:
        "https://drive.google.com/uc?export= download&id=16HhOnTYlClgQkrzVLcnBcSLh8Ai3ilbL",
    },
    {
      title: "Milk Value addition",
      videoId: "fNf0lWyJnTU",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1E5UKEb6LtunVqBNczvkC-5hvHoOSPmxu",
    },
    {
      title: "Feeding the Dairy Cow",
      videoId: "VYsWRRRZnWM",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1E5UKEb6LtunVqBNczvkC-5hvHoOSPmxu",
    },
    {
      title: "Artifical Insemination of Milk Production",
      videoId: "S0gCcdAkLec",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1BkFYmk9vUN0urY7Fvv6suw8xvOZVsXyC",
    },
    {
      title: "Low  Cost GreenHouse Farming",
      videoId: "Vy72pRX6hJw",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1lwa4Tzb4CGU7rEx1HTc2takvKRDxjvcW",
    },
    {
      title: "GreenHouse Tomato Farming",
      videoId: "obsLwew-NT0",
      downloadLink:
        "https://drive.google.com/uc?export=download&id=1gvOBlqFnXve3UCn9tWqSjmnxC9ojGiia",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-6 text-green-700">
        Agriculture Educational Videos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4 hover:underline">
              {video.title}
            </h2>
            <iframe
              className="rounded-lg w-full"
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}?start=4`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {video.downloadLink && (
              <a
                href={video.downloadLink}
                download
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md transition-colors duration-200"
              >
                Download Video
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
