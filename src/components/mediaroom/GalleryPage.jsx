import React from "react";
import { Container } from "@mui/material";
import Back from "../common/back/Back";
import Gallery from "./component/gallery";

function MediaPage() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
      <Back subtitle="media" title="MEDIA ROOM" />
      <section className="team padding">
        <div>
          <Gallery />
        </div>
      </section>
    </Container>
  );
}

export default MediaPage;
