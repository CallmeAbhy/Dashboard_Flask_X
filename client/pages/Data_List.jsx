import React, { useState, useEffect } from "react";

import { topics, countries, sectors, regions, pestles } from "../data/data.js";
import axios from "axios";
const Data_List = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    country: "",
    city: "",
    end_year: "",
  });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://imabhy.pythonanywhere.com");
      setData(response.data);
      console.log("The data Comming From Python is ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [data, filters]);

  const applyFilters = () => {
    let filtered = data.filter((item) => {
      return (
        (filters.topic === "" || item.topic === filters.topic) &&
        (filters.sector === "" || item.sector === filters.sector) &&
        (filters.region === "" || item.region === filters.region) &&
        (filters.pestle === "" || item.pestle === filters.pestle) &&
        (filters.source === "" || item.source === filters.source) &&
        (filters.country === "" || item.country === filters.country) &&
        (filters.city === "" || item.city === filters.city) &&
        (filters.end_year === "" || item.end_year === filters.end_year)
      );
    });

    setFilteredData(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Data List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <select
            name="topic"
            value={filters.topic}
            onChange={handleFilterChange}
            className="border p-2"
          >
            <option value="">All Topics</option>
            {topics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>

          <select
            name="country"
            value={filters.country}
            onChange={handleFilterChange}
            className="border p-2"
          >
            <option value="">All Countries</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>

          <select
            name="sector"
            value={filters.sector}
            onChange={handleFilterChange}
            className="border p-2"
          >
            <option value="">All Sectors</option>
            {sectors.map((sector, index) => (
              <option key={index} value={sector}>
                {sector}
              </option>
            ))}
          </select>

          <select
            name="region"
            value={filters.region}
            onChange={handleFilterChange}
            className="border p-2"
          >
            <option value="">All Regions</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>

          <select
            name="pestle"
            value={filters.pestle}
            onChange={handleFilterChange}
            className="border p-2"
          >
            <option value="">All Pestles</option>
            {pestles.map((pestle, index) => (
              <option key={index} value={pestle}>
                {pestle}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold mb-2">{item.topic}</h2>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">Year:</div>
                <div>{item.year}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">Country:</div>
                <div>{item.country}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">Region:</div>
                <div>{item.region}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">City:</div>
                <div>{item.city}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">Intensity:</div>
                <div>{item.intensity}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">Likelihood:</div>
                <div>{item.likelihood}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">Relevance:</div>
                <div>{item.relevance}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">Pestle:</div>
                <div>{item.pestle}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">Source:</div>
                <div>{item.source}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">Sector:</div>
                <div>{item.sector}</div>
              </div>
              <div className="grid grid-cols-2 gap-x-4 mb-2">
                <div className="text-gray-600">End Year:</div>
                <div>{item.end_year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data_List;
