import React from "react";

const TopCards = ({ data }) => {
  // Filter data for countrys "United States of America", "India", and "China"

  const uniqueTopics = [...new Set(data.map((item) => item.topic))];
  console.log("The Unique Set are", uniqueTopics);

  const filteredData = data.filter(
    (item) =>
      item.country === "Saudi Arabia" ||
      item.country === "India" ||
      item.country === "China"
  );

  // Calculate average and maximum likelihood for each country
  const Saudi_Arabia = filteredData.filter(
    (item) => item.country === "Saudi Arabia"
  );
  const avgLikelihoodOfSaudi_Arabia =
    Saudi_Arabia.reduce((sum, item) => sum + item.likelihood, 0) /
    Saudi_Arabia.length;

  const avgIntensitySaudi_Arabia =
    Saudi_Arabia.reduce((sum, item) => sum + item.intensity, 0) /
    Saudi_Arabia.length;

  const maxLikelihoodOfSaudi_Arabia = Math.max(
    ...Saudi_Arabia.map((item) => item.likelihood)
  );

  const maxIntensityOfSaudi_Arabia = Math.max(
    ...Saudi_Arabia.map((item) => item.intensity)
  );

  const IndiaData = filteredData.filter((item) => item.country === "India");
  const avgLikelihoodOfIndia =
    IndiaData.reduce((sum, item) => sum + item.likelihood, 0) /
    IndiaData.length;

  const avgIntensityIndia =
    IndiaData.reduce((sum, item) => sum + item.intensity, 0) / IndiaData.length;

  const maxLikelihoodOfIndia = Math.max(
    ...IndiaData.map((item) => item.likelihood)
  );

  const maxIntensityIndia = Math.max(
    ...IndiaData.map((item) => item.intensity)
  );

  const ChinaData = filteredData.filter((item) => item.country === "China");
  const avgLikelihoodOfChina =
    ChinaData.reduce((sum, item) => sum + item.likelihood, 0) /
    ChinaData.length;
  const avgIntensityOfChina =
    ChinaData.reduce((sum, item) => sum + item.intensity, 0) / ChinaData.length;

  const maxLikelihoodOfChina = Math.max(
    ...ChinaData.map((item) => item.likelihood)
  );

  const maxIntensityOfChina = Math.max(
    ...ChinaData.map((item) => item.intensity)
  );

  const PerAvgLikeSA =
    ((avgLikelihoodOfSaudi_Arabia / maxLikelihoodOfSaudi_Arabia) * 100).toFixed(
      2
    ) + " %";

  const PerAvgIntSA =
    ((avgIntensitySaudi_Arabia / maxIntensityOfSaudi_Arabia) * 100).toFixed(2) +
    " %";

  const PerAvgLikeIndia =
    ((avgLikelihoodOfIndia / maxLikelihoodOfIndia) * 100).toFixed(2) + " %";

  const PerAvgIntIndia =
    ((avgIntensityIndia / maxIntensityIndia) * 100).toFixed(2) + " %";

  const PerAvgLikeChina =
    ((avgLikelihoodOfChina / maxLikelihoodOfChina) * 100).toFixed(2) + " %";

  const PerAvgIntChina =
    ((avgIntensityOfChina / maxIntensityOfChina) * 100).toFixed(2) + " %";

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{PerAvgLikeSA}</p>
          <p className="text-gray-600">Saudi Arabia</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">{PerAvgIntSA}</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{PerAvgLikeIndia}</p>
          <p className="text-gray-600">India</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">{PerAvgIntIndia}</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{PerAvgLikeChina}</p>
          <p className="text-gray-600">China </p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 text-lg">{PerAvgIntChina}</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
