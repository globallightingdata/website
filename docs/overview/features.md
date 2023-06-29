---
title: GLDF Features
sidebar_label: Features
---
<!-- markdownlint-disable MD033 (no html im markdown) -->
### GLDF Technical Benefits

One advantage is obvious: luminaire manufacture members of RELUX and DIAL only have to create one format and one geometry. In addition, the format also offers these new technical features for everybody, even for non-members of the two software houses:

- several variants of a product with its own GTIN
- definition of lamps in absolute (LED) or relative (conventional) state
- embedding of pictures, geometries, documents etc. as a file or link
- multi languages on all text data
by using a link: dynamic assets form a central server are possible
- geometry from eulumdat, simple geometry or as a 3D model; multiple LOD
- light emission surfaces, rotating elements, suspension points and electrical connection can be defined
- luminaires with multiple light emitters and/or sensors
- emergency lighting LDCs or Emergency Ballast Lumen Factor
- constant light output CLO and international maintenance factors
- spectrum and dimming curves
- checksum for pure data validation or detection of manipulating
- optional use of all ~400 CEN/TS 17623 - ISO/TS 7127 - lighting BIM properties
- use of other BIM, IFC or even custom properties

### Lighting

GLDF comes with all the lighting specials, which are needed to calcualte and qualify the luminaire and sensors. Multiple Light Emitting Objects (LEO), Light Emitting Surfaces (LES), Joints, Lampsets, Dimmcurves, Multichannels, CLO, Spectral data, and many more lighting data are the core of the GLDF. This is the big differnece to all other complex and modern data formats.

### Properties

Today there are 110 native properties in the GLDF to describe products. Additionally, the main product structure with geometry and variants in the xml hierarchy delivers more in-formation than just plain properties.
With custom properties in the GLDF it is possible to add all kind of different properties of the product or the variant into the GLDF. This is quite efficient if the property source is official and public (e.g., an ISO standard). But it’s also possible to transport own properties just for internal usage like a PIM ID number. Custom properties could also be an application-specific property just for a certain tool or environment.

<img src="static/img/docs/overview/custom_properties.png" alt="GLDF Conzept" width="750" /><br/><br/>

In 2023 the ISO/TS 7127 is published. This ISO document is a property source for around 400 properties for lighting systems. The base is the European CEN/TS 17623 from 2021. The ISO technical specification incorporates more international properties and more properties in general.
The GLDF custom properties can be used with values or with files.

### Variants

The structure of GLDF allows a easy and effective handling of variants. Geometry, LDCs, all properties could be changed for each variant freely. There is one hierarchy level of variants. So, just one list of variants and not a matrix.

### Asset Links

Instead of physical files in the GLDF container it is possible to refer links to all kind of assets. LDC files, pictures files, geometry files or PDF documents could be stated with a URL to the file source. This allows a slim GLDF file size, a flexible asset handling and a dirct update of the product data. Please be sure to keep the URLs alive long and constantly.

GLDF allows the use of serveral pictues with several types and all kind of docuemnts.

### Open Geometry

With GLDF we also created L3D. A new and open XML based data format too. Based on the open OBJ 3D mesh format luminaire geomtery is free to be created by any tool. L3D adds in a XML all lighting specific data to the geometry. Mounting point and electrical connectors are included too.
GLDF support 3 LOD levels for geometry: low, mid and high.

### Emergency lighting

In GLDF the type of emergency features could be trnasparted with tht luminous flux for an emergency case. Even complete LDCs for emergency could be used.
