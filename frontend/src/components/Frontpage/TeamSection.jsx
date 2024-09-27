import React, { useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";

const TeamSection = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:4444/team");
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      <div className="mycontainer py-10 text-center">
        <h1 className="rubrik mb-32 lg:mb-24">Vores team</h1>
        <div className="mx-auto xl:w-11/12 2xl:w-10/12">
          <div className="grid gap-28 lg:grid-cols-4 lg:gap-2">
            {data ? (
              data.map((member) => (
                <div
                  key={member._id}
                  className="mx-auto flex w-[24em] flex-col items-center bg-mygray p-4 lg:w-44 xl:w-52 2xl:w-60"
                >
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={`/src/assets/images/front/team/${member.image}`}
                      alt={member.name}
                      className="z-10 -m-20 w-44 rounded-full ring-8 ring-white"
                    />
                    <div className="flex h-52 w-full flex-col items-center justify-center pt-24 lg:h-44">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="pb-2 font-semibold text-primarycolor">
                        {member.role}
                      </p>
                      <p>{member.phone}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No team members available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
