---
title: Open Luminaire
sidebar_label: Open Luminaire
---

## Description

![Open Luminaire](/img/docs/geometry/parametric/open-luminaire.webp)

The `Open Luminaire` features a base with an openly accessible luminous object, designed for versatile mounting options.

- `Dimensions`:
  - `Width`, `Length`, and `Height` define the total size of the luminaire's housing as a bounding box.
  - `LuminousDiameter` and `LuminousLength` describe the dimensions of the luminous elements.
- `Mounting`:
  - The luminaire is designed to be mounted on either a ceiling or a wall, as specified by the `Mounting` parameter.
- `NumberOfTubes`:
  - Determines the number of luminous tubes or elements within the luminaire.
- Optionally, you can specify a `HousingColor` as a 4-digit RAL color code and a `FileName` (without an extension).

## Parameters

| Parameter        |  Type  | Explanation                                                                                |
| ---------------- | :----: | ------------------------------------------------------------------------------------------:|
| **Width**        | int    | Base width of the luminaire in millimeters (mm).                                            |
| **Length**       | int    | Base length of the luminaire in millimeters (mm).                                           |
| **Height**       | int    | Height of the luminaire's housing in millimeters (mm).                                      |
| **LuminousDiameter** | int | Diameter of the main luminous object in millimeters (mm).                                   |
| **LuminousLength**   | int | Length of the luminous elements in millimeters (mm).                                        |
| **Mounting**     | enum   | Mounting type of the luminaire. Possible values: `Ceiling`, `Wall`.                         |
| **NumberOfTubes**| int    | Number of luminous tubes or elements within the luminaire.                                  |
| **HousingColor** | string | A 4-digit RAL color code matching `[1-9][0-9]{3}` (optional).                               |
| **FileName**     | string | Optional file name (without an extension).                                                 |

## XSD

```xml
<xs:element name="OpenLuminaire">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="Mounting">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:enumeration value="Ceiling"/>
            <xs:enumeration value="Wall"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="NumberOfTubes" type="xs:int"/>
      <xs:element name="HousingColor" minOccurs="0">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:pattern value="[1-9][0-9]{3}"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="FileName" type="xs:string" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

### Example

```xml
<P3D filename="OpenLuminaire">
  <OpenLuminaire>
    <Width>20</Width>
    <Length>500</Length>
    <Height>20</Height>
    <LuminousLength>490</LuminousLength>
    <LuminousDiameter>16</LuminousDiameter>
    <Mounting>Ceiling</Mounting>
    <NumberOfTubes>1</NumberOfTubes>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </OpenLuminaire>
</P3D>
```
