import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";

const DetailPromo = () => {
  const { id } = useParams();
  const getDetail = () => {
    axios
      .get(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);

  return <div>tes</div>;
};

export default DetailPromo;
