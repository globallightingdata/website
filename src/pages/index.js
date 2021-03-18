import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";

const textContent = {
  feature1: `
  <p>A new, modern and modular lighting data format with a structure, that is capable of supporting simple to complex 
  <strong>luminaires</strong> and <strong>sensors</strong>.</p>
  <p>Developed by <strong>DIAL</strong> and <strong>RELUX</strong> to save efforts in creation and interpretation 
  of lighting data, offering more capabilities than ROLF or ULD. <strong>Open and free</strong> available for 
  everyone.</p>
  `,
  xmlCodeText: `
  <p>The core element of GLDF is a <strong>XML file</strong>, which describes all product features and variations. 
  Containing three major blocks - metadata, product parts, the product itself - it allows the definition of luminaires in 
  a <strong>modular manner</strong>.</p>
  <p>With the possibility to <strong>reuse</strong> 
  elements and combine them to multiple variants of the same product <strong>effortless</strong>.</p>
  <p>All that backed by a consistent, documented and versioned XSD Schema to <strong>validate</strong> your data.</p>
  `,
  codeExample: `<?xml version="1.0" encoding="UTF-8"?>
  <Root xsi:noNamespaceSchemaLocation="GldfSchema.xsd">
    <Header />
    <GeneralDefinitions>
      <Files />
      <Sensors />
      <Photometries />
      <Spectrums />
      <LightSources />
      <ControlGears />
      <Equipments />
      <Geometries />    
    </GeneralDefinitions>
    <ProductDefinitions>
      <ProductMetaData />
      <Variants>
        <Variant />
        <Variant />
      </Variants>
    </ProductDefinitions>
  </Root>
  `,
  feature2: `
  <p>Create 3D models for your products and visualize them in <strong>different levels of detail</strong>. 
  From basic bodies, through parameterisable models up to detailed 3D geometries.</p>
  <p>Combine GLDF with our <strong>newly developed L3D format</strong>. To visualise enclosures in fine granularity, 
  precisely positioned light-emitting surfaces/sensors and movable parts with joints as required.</p>
  `,
  feature3: `
<p>GLDF was created by experts with <strong>decades of lighting experience</strong> for all modern use cases.</p>
<p>Our goal: everything a manufacturer could communicate about his product, should be possible in GLDF.</p>
<p><strong>This includes</strong> luminaires with multiple light emitters and/or sensors, conventional/LED light sources, spectrums, 
embeded/linked files, emergency lighting, maintenance factors, control gears, mounting point definitions, dimming curves, 
optional use of all ~350 CEN/TS 17623 - ZVEI BIM properties <strong>to name just a few</strong>.</p>
  `,
  feature4: `
<p>One product - one file. All product and geometry data is <strong>compressed and packaged</strong> into a .gldf 
container file, which can be conveniently exchanged and imported into DIALux & RELUX.</p>
  `,
};

function Heading({ text }) {
  return <h2 className="Heading">{text}</h2>;
}

function ActionButton({ href, type = "primary", target, children }) {
  return (
    <a className={`ActionButton ${type}`} href={href} target={target}>
      {children}
    </a>
  );
}

function TextColumn({ title, text, moreContent }) {
  return (
    <>
      <Heading text={title} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
      {moreContent}
    </>
  );
}

function HomeCallToAction() {
  return (
    <>
      <ActionButton
        type="primary"
        href={useBaseUrl("/getting-started/")}
        target="_self"
      >
        Get started
      </ActionButton>
      <ActionButton
        type="secondary"
        href="https://github.com/globallightingdata/gldf"
        target="_blank"
      >
        View on Github
      </ActionButton>
    </>
  );
}

function Section({
  element = "section",
  children,
  className,
  background = "light",
}) {
  const El = element;
  return <El className={`Section ${className} ${background}`}>{children}</El>;
}

function TwoColumns({ columnOne, columnTwo, reverse }) {
  return (
    <div className={`TwoColumns ${reverse ? "reverse" : ""}`}>
      <div className={`column first ${reverse ? "right" : "left"}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? "left" : "right"}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function HeaderHero() {
  return (
    <Section background="dark" className="HeaderHero">
      <>
        <h1 className="title">
          <span className="titleHighlight">G</span>
          lobal <span className="titleHighlight">L</span>
          uminaire <span className="titleHighlight">D</span>
          ata <span className="titleHighlight">F</span>ormat
        </h1>
        <p className="tagline">
          Uniform, comprehensive data format for the lighting industry.
        </p>
        <div className="buttons">
          <HomeCallToAction />
        </div>
      </>
    </Section>
  );
}

function Feature1() {
  return (
    <Section className="Feature1" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="Modular and flexible"
            text={textContent.feature1}
          />
        }
        // columnTwo={<img alt="" src={useBaseUrl('img/homepage/feature1.png')} />}
        columnTwo={<img alt="" src="/img/homepage/modular.png" />}
      />
    </Section>
  );
}

function XmlCode() {
  return (
    <Section className="XmlCode" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Written in XML, covered by XSD"
            text={textContent.xmlCodeText}
          />
        }
        columnTwo={
          <CodeBlock language="xml">{textContent.codeExample}</CodeBlock>
        }
      />
    </Section>
  );
}

function Feature2() {
  return (
    <Section className="Feature2" background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Multiple level of detail"
            text={textContent.feature2}
          />
        }
        columnTwo={
          <img
            alt=""
            // src={useBaseUrl(`img/homepage/image.png`)}
            src="/img/homepage/level-of-detail.png"
          />
        }
      />
    </Section>
  );
}

function Feature3() {
  return (
    <Section className="Feature3" background="tint">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="Extensive input options"
            text={textContent.feature3}
          />
        }
        columnTwo={<img alt="" src="/img/homepage/hierarchy.png" />}
      />
    </Section>
  );
}

function Feature4() {
  return (
    <Section className="Feature4" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="GLDF & L3D Container"
            text={textContent.feature4}
          />
        }
        // columnTwo={
        //   <video
        //     muted
        //     autoPlay
        //     loop
        //     playsInline
        //     src={useBaseUrl(`img/homepage/video.mp4`)}
        //   />
        // }
        columnTwo={<img alt="" src="/img/homepage/compress.png" />}
      />
    </Section>
  );
}

function Community() {
  return (
    <Section className="Community" background="light">
      <div className="content">
        <Heading text="Developed by DIAL & RELUX - Open for everyone" />
        <TwoColumns
          columnOne={
            <>
              <p className="firstP">
                <img src={useBaseUrl(`img/logo.png`)} alt="" />
                <span>
                  GLDF is currently under development and DIAL and RELUX will
                  take care of the format together.
                </span>
              </p>
              <p>
                We appreciate early adopters starting using it with us. And are
                welcoming contributors to collaborate on the next version.
              </p>
              <p>
                We will keep this website up-to-date and publish a collection of
                resources for individuals and companies who want to learn how to
                use and contribute to GLDF.
              </p>
              <p>Here are some few ideas how to get started:</p>
            </>
          }
          columnTwo={
            <>
              <ul>
                <li>
                  Read our Blog. Any news will be pulished there
                </li>
                <li>Have a look on the XSD reference</li>
                <li>Visit our Github repository, download the XSD schema and try it out</li>
                <li>
                  We will publish and extend the documentation in the next weeks
                  and months. Bookmark us and follow our RSS feed on this website
                </li>
                <li>
                  Go through the Getting Started guide - we will publish it soon
                </li>
              </ul>
              <p>
                Does everything work as expected? If not, we're always looking
                for improvements. Let us know by opening a discussion or issue
                on Github.
              </p>
            </>
          }
        />
      </div>
    </Section>
  );
}

const Index = () => {
  return (
    <Layout wrapperClassName="homepage">
      <Head>
        <title>GLDF | Global Luminaire Data Format</title>
      </Head>
      <HeaderHero />
      <Feature1 />
      <XmlCode />
      <Feature3 />
      <Feature2 />
      <Feature4 />
      <Community />
    </Layout>
  );
};

export default Index;
