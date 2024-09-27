import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import { Link } from "react-router-dom";

import Countdown from "../Travels/Countdown";

const CountdownSection = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:4444/tours");
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const sortedData = data?.sort(
    (a, b) => new Date(a.spacelaunch) - new Date(b.spacelaunch),
  );

  const soonestLaunchDate = sortedData?.[0]?.spacelaunch;

  return (
    <section>
        <Link to="ture">
      {soonestLaunchDate && <Countdown targetDate={soonestLaunchDate} />}
        </Link>
    </section>
  );
};

export default CountdownSection;
