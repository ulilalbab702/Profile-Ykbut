import React from "react";
import Back from "../../common/back/Back";
import Heading from "../../common/heading/Heading";
import "./wbs.css";

const Whistleblowing = () => {
  return (
    <>
      <Back subtitle="WBS" title="WHISTLE BLOWING" />
      <div className="Container">
        <div className="Left" style={{ margin: "30px" }}>
          <Heading title="Whistle Blowing System" />
          <div className="Desc" style={{width: '60%'}}>
            Whistle Blowing System adalah mekanisme bagi
            yayasan/koperasi/perusahaan dalam pelaporan atas dugaan pelanggaran
            atau kecurangan yang berindikasi merugikan bagi yayasan/
            koperasi/perusahaan atau hal-hal lain yang melanggar kode etik
            dan/atau peraturan perundang-undangan.
          </div>
          <div className="Desc" style={{width: '60%'}}>
            Pelapor dapat menyampaikan laporan dugaan pelanggaran kepada TKPP
            melalui saluran yang telah disediakan bawah ini: a. Email :
            gcg-ykbutgroup@ykbut.co.id b. SMS/WA : 081514936111 (Endang Tri
            Handajani) 085921581230 (Heru Kurniawan C) 08121134334 (Dianwahyu
            Sri P)
          </div>
          <div className="Info">
            <a
              href="PedomanWhistleBlowerYKBUT2021.pdf"
              download="Pedoman Whisle Blower YKBUT 2021.pdf"
            >
              <button>Download PDF</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whistleblowing;
