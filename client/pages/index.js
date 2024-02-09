import Head from "next/head";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import TopCards from "../components/TopCards";

import RecentSorces from "../components/RecentSorces";
import EChartsLineChart from "@/components/EChartsLineChart";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/data");
      setData(response.data);
      console.log("The data Comming From Python is ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards data={data} />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <EChartsLineChart data={data} />
          <RecentSorces data={data} />
        </div>
      </main>
    </>
  );
}
