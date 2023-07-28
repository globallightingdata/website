---
title: Example Zumtobel P-EVO R100L
sidebar_label: Zumtobel P-EVO R100L
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

### Introduction

Zumtobel P-EVO R100L ist a simple recessed luminaire using an L3D model.

<img src="/img/docs/getting-started/product_zumtobel.webp" alt="SLV NEW TRIA 2"/>

<img src="/img/docs/getting-started/product_zumtobel_3d.webp" alt="SLV NEW TRIA 2"/>

### product.xml

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.1/gldf.xsd">
  <Header>
    <Manufacturer>Zumtobel</Manufacturer>
    <CreationTimeCode>2021-01-25T09:30:47Z</CreationTimeCode>
    <CreatedWithApplication>n/a</CreatedWithApplication>
    <FormatVersion>1.0.0-rc.1</FormatVersion>
  </Header>
  <GeneralDefinitions>
    <Files>
      <File id="imageFile" contentType="image/jpg" type="localFileName">ZS_PAI_F_R100_LG_Rahmen.jpg</File>
      <File id="ldtFile" contentType="ldc/eulumdat" type="localFileName">60819021_(STD_LEO).LDT</File>
      <File id="geoFile" contentType="geo/l3d" type="localFileName">P-EVO_R100L_LED2500-830_BC_AL_WH.l3d</File>
    </Files>
    <Photometries>
      <Photometry id="Photometry01">
        <PhotometryFileReference fileId="ldtFile"/>
      </Photometry>
    </Photometries>
    <LightSources>
      <FixedLightSource id="lightSource">
        <Name>
          <Locale language="de">LED</Locale>
        </Name>
        <Description>
          <Locale language="de">LED Beschreibung</Locale>
        </Description>
        <RatedInputPower>18</RatedInputPower>
      </FixedLightSource>
    </LightSources>
    <Emitters>
      <Emitter id="Emitter01">
        <FixedLightEmitter>
          <PhotometryReference photometryId="Photometry01"/>
          <LightSourceReference fixedLightSourceId="lightSource"/>
          <RatedLuminousFlux>2400</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
    </Emitters>
    <Geometries>
      <ModelGeometry id="Geometry01">
        <GeometryFileReference fileId="geoFile"/>
      </ModelGeometry>
    </Geometries>
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <ProductNumber>
        <Locale language="de">60819021</Locale>
      </ProductNumber>
      <Name>
        <Locale language="de">P-EVO R100L LED2500-830 BC AL WH [STD]</Locale>
      </Name>
      <Description>
        <Locale language="de">LED-Decken-Einbauleuchte (Komplettleuchte), "Stable White"; Abblendwinkel 60°; Bestückung: LED2500-830; 50 °; Farbwiedergabe Ra &gt; 80, Farbtemperatur 3000 K (warm weiß); Farborttoleranz (initial MacAdam): 2; Leuchten Lichtstrom: 2400 lm, Leuchten Lichtausbeute: 126 lm/W; Lebensdauer: 50000h bei 85% Lichtstrom; mit Vorschaltgeräte-Einheit, Drahtlose Verbindung via App mit Bluetooth® 4.x - basicDim Wireless; modulare, hochwertige optische Einheit aus Reflektor und LED-Lichtkammer, intergriert im optimierten Wärmemanagement aus Aluminiumdruckguss; glatter Reflektor aluminiumbesputtert, hochglänzend, irisierungsfrei; Reflektor/Abdeckring aus hochwertigem, UV-beständigem Polycarbonat (PC); Abdeckring weiß; Einbauring aus Polycarbonat glasfaserverstärkt (PC), grau; werkzeuglose Schnellmontage der Leuchteneinheit mittels Bajonettverschluss; IP44_IP20; Leuchte halogenfrei verdrahtet; Anschluss: 2-polige Klemme; Netzspannung: 220-240V / 50-60Hz; Montage: werkzeuglose Schnellmontage mittels Anti-Rutsch-Haltefedern für Deckenstärken von 1-40mm; Deckenausschnitt: 100mm, Einbautiefe: 110mm (Deckenstärken 1-15mm); Gewicht: 0,43 kg;
Hinweis: UGR&lt;19 für Office Anwendungen gemäß EN12464 (abhängig von der Leuchtentype); 
Hinweis Bluetooth®: Funk Definition:  basicDIM Wireless - Bluetooth® 4.x, Funk Frequenz:  2,4...2,483 GHz, Funk Sendeleistung:  +4dBm; Einbau in Metall-/ und Betondecken nicht erlaubt; Leuchtenanordnung: Mobile-Steuerung zu Leuchte max. 6m, von Leuchte zu Leuchte max. 4m!</Locale>
      </Description>
      <ProductSeries>
        <ProductSerie>
          <Name>
            <Locale language="de">Deckeneinbau</Locale>
          </Name>
        </ProductSerie>
      </ProductSeries>
      <Pictures>
        <Image imageType="Product Picture" fileId="imageFile" />
      </Pictures>
      <DescriptiveAttributes>
        <Electrical>
          <PowerFactor>1</PowerFactor>
        </Electrical>
      </DescriptiveAttributes>
    </ProductMetaData>
    <Variants>
      <Variant id="variant1">
        <Name>
          <Locale language="de">P-EVO R100L LED2500-830 BC AL WH [STD]</Locale>
        </Name>
        <Mountings>
          <Ceiling>
            <Recessed recessedDepth="90"></Recessed>
          </Ceiling>
        </Mountings>
        <Geometry>
          <ModelGeometryReference geometryId="Geometry01">
            <EmitterReference emitterId="Emitter01">
              <EmitterObjectExternalName>LEO</EmitterObjectExternalName>
            </EmitterReference>
          </ModelGeometryReference>
        </Geometry>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

### Download

<a href="https://github.com/globallightingdata/examples/tree/master/Zumtobel%20P-EVO%20R100L" target="_blank">Zumtobel P-EVO R100L</a>
