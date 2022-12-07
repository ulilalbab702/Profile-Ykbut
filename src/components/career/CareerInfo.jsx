import React, { useState } from "react";
import Heading from "../common/heading/Heading";
import "./career.scss"
import {logo_gsi, logo_mbut, logo_kamaju, logo_dpp, logo_lsp_abi} from "../../assets";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const CareerInfo = () => {
  const [dataCareer, setDataCareer] = useState([
    {
      id: 1,
      name: "Mekanik",
      logo: logo_mbut,
      assignment: "PT MITRA BAKTI UT",
      personNeeded: "5 Orang",
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        " Lulusan niminal SMA / sederajat",
        " Berpengalaman minimal 2 tahun",
        " Memiliki paspor",
      ],
    },
    {
      id: 2,
      name: "Mekanik",
      logo: logo_gsi,
      assignment: "PT GLOBAL SERVIE INDONESIA",
      personNeeded: "5 Orang",
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        " Lulusan niminal SMA / sederajat",
        " Berpengalaman minimal 2 tahun",
        " Memiliki paspor",
      ],
    },
    {
      id: 3,
      name: "Mekanik",
      logo: logo_kamaju,
      assignment: "PT KAMAJU",
      personNeeded: "5 Orang",
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        " Lulusan niminal SMA / sederajat",
        " Berpengalaman minimal 2 tahun",
        " Memiliki paspor",
      ],
    },
    {
      id: 4,
      name: "Mekanik",
      logo: logo_dpp,
      assignment: "PT DIAN PANDU PRATAMA",
      personNeeded: "5 Orang",
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        " Lulusan niminal SMA / sederajat",
        " Berpengalaman minimal 2 tahun",
        " Memiliki paspor",
      ],
    },
    {
      id: 5,
      name: "Mekanik",
      logo: logo_lsp_abi,
      assignment: "LSP ABI",
      personNeeded: "5 Orang",
      location: "Jakarta Timur",
      requirements: [
        "Pria",
        " Lulusan niminal SMA / sederajat",
        " Berpengalaman minimal 2 tahun",
        " Memiliki paspor",
      ],
    },
  ]);

  const renderCareer = (data, index) => {
      return (
        <div className="data_career" key={index}>
          <div className="card_career" >
            <img src={data.logo} className="logo_career" />
            <div className="name_career">
              <p className="job_career">{data.name}</p>
              <p className="assign_career">{data.assignment}</p>
            <div className="req_career">{data.requirements}</div>
            <div className="loc_career">
              <p className="icon_loc"><LocationOnOutlinedIcon/></p> {data.location} </div>
            <div className="q_career">
              <p className="icon_loc"><PersonOutlineOutlinedIcon/></p> {data.personNeeded}</div>
            </div>
          </div>
        </div>
      );
  };

  return (
    <div className="container">
      <Heading subtitle="Career Info" title="Recruitment Informationn" />
      <div className="">
        {dataCareer.map((data) => renderCareer(data))}
      </div>
    </div>
  );
};

export default CareerInfo;