import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import courses from "../data/Courses";

const Courses = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(courses);
  useEffect(() => {
    const newData = [];
    courses.forEach((course) => {
      if (course.name.toLowerCase().includes(search.trim().toLowerCase())) {
        newData.push(course);
      }
    });
    setData(newData);
  }, [search]);

  return (
    <div className="container py-5">
      <input
        type="text"
        placeholder="Search a course"
        className="search-bar mb-5"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row">
        {data.map((el, idx) => (
          <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
            <Card
              key={idx}
              name={el.name}
              img={el.img}
              desc={el.desc}
              price={el.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
