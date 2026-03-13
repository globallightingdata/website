import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

function Heading({ text }) {
  return <h1 className="ImprintHeader">{text}</h1>;
}

function TwoColumns({ columnOne, columnTwo, reverse }) {
  return (
    <div className={`ImprintTwoColumns ${reverse ? "reverse" : ""}`}>
      <div className={`column first ${reverse ? "right" : "left"}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? "left" : "right"}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function Imprints() {
  return (
    <>
      <Heading text="Legal notice" />
      <TwoColumns
        columnOne={
          <>
            <h2 class="ImprintCompanyName">DIAL GmbH</h2>
            <p>
              <div>
                <strong>Chief Executive Officer</strong>
              </div>
              <div>Dipl.-Ing. Dieter Polle</div>
            </p>
            <p>
              <div>
                <strong>Court of jurisdiction – commercial register</strong>
              </div>
              <div>Iserlohn</div>
            </p>
            <p>
              <div>
                <strong>No. in commercial register</strong>
              </div>
              <div>HRB 4446</div>
            </p>
            <p>
              <div>
                <strong>VAT ID</strong>
              </div>
              <div>DE 125807143</div>
            </p>
            <p>
              <div>
                <strong>Responsible for the content</strong>
              </div>
              <div>Dipl.-Ing. Dieter Polle</div>
            </p>
            <p>
              <div>
                <strong>Contact</strong>
              </div>
              <div>
                DIAL GmbH
                <br />
                Bahnhofsallee 18
                <br />
                D-58507 Lüdenscheid
                <br />
                Fon: +49 23 51 56 74 0
                <br />
                Mail: dialog@dial.de
              </div>
            </p>
          </>
        }
        columnTwo={
          <>
            <h2 class="ImprintCompanyName">RELUX Informatik AG</h2>
            <p>
              <div>
                <strong>Chief Executive Officer</strong>
              </div>
              <div>Dipl.-Ing. Markus Hegi</div>
            </p>
            <p>
              <div>
                <strong>Court of jurisdiction – commercial register</strong>
              </div>
              <div>Basel</div>
            </p>
            <p>
              <div>
                <strong>No. in commercial register</strong>
              </div>
              <div>CHE-104.196.664</div>
            </p>
            <p>
              <div>
                <strong>VAT ID</strong>
              </div>
              <div>CHE-104.196.664 TVA</div>
            </p>
            <p>
              <div>
                <strong>Responsible for the content</strong>
              </div>
              <div>Dipl.-Ing. Robert Heinze</div>
            </p>
            <p>
              <div>
                <strong>Contact</strong>
              </div>
              <div>
                RELUX Informatik AG
                <br />
                Kaspar Pfeiffer Strasse 4
                <br />
                CH-4142 Münchenstein
                <br />
                Fon: +41 61 333 07 70
                <br />
                Mail: info@relux.com
              </div>
            </p>
          </>
        }
      />
      <div className="ImprintEditorial">
        <h2>Editorial Responsibility (Blog Section)</h2>
        <p>
          Responsible for the journalistic and editorial content of the blog section (gldf.io/blog/)
          in accordance with Section 18 (2) of the German State Media Treaty (Medienstaatsvertrag, MStV):<br />
          <strong>Dieter Polle</strong>, Managing Director of DIAL GmbH,<br />Bahnhofsallee 18, 58507 Lüdenscheid, Germany.
        </p>
        <br />
        <br />
      </div>
    </>
  );
}

const Imprint = () => {
  return (
    <Layout>
      <Head>
        <title>Imprint | GLDF</title>
      </Head>
      <Imprints />
    </Layout>
  );
};

export default Imprint;
