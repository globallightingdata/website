---
title: Stand Cylinder
sidebar_label: Stand Cylinder
---

## Description

![Stand Cylinder Luminaire](/img/docs/geometry/parametric/stand-cylinder.webp)

`Stand Cylinder` is a cylinder-shaped standing luminaire. This parametric model allows you to define the `TotalHeight` and the `Height` of the luminaire (not including the stand).

- The full default height is 1.8 meters.
- The stand height is calculated as `TotalHeight` minus the luminaire `Height`.
- The stand is always centered within the luminaire.
- The default diameter of the foot is the same as the main `Diameter`.
- The default height of the foot is 2 cm and the diameter of the stand is 5 cm.
- Luminous dimensions must be smaller than the main dimensions.
- Either `LuminousHeight` or `ReflectorDepth` can be specified to describe how the luminaire interacts with the stand:
  - `LuminousHeight`: Describes how far the luminous part sticks out of the body.
  - `ReflectorDepth`: Describes how far the luminous part is recessed into the body.
- Optionally, `HousingColor` can be provided as a 4-digit RAL color code.
- Optionally, `FileName` can be provided (without an extension).

## Parameters

| Parameter         | Type   | Explanation                                                           |
| ----------------- | :----: | ---------------------------------------------------------------------:|
| Diameter          | int    | Value in mm                                                           |
| Height            | int    | Value in mm                                                           |
| TopDiameter       | int    | Value in mm *(optional; default is 80% of `Diameter`)*                |
| LuminousDiameter  | int    | Value in mm                                                           |
| LuminousHeight    | int    | Value in mm *(optional)*; describes how far the luminous part protrudes|
| ReflectorDepth    | int    | Value in mm *(optional)*; describes how far the luminous part is recessed|
| TotalHeight       | int    | Value in mm                                                           |
| HousingColor      | string | 4 digit RAL color code *(optional)*                                   |
| FileName          | string | Optional file name (without an extension) *(optional)*                |

## XSD

```xml
<xs:element name="StandCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="TopDiameter" type="xs:int" minOccurs="0"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:choice minOccurs="0">
        <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
        <xs:element name="ReflectorDepth" type="xs:int" minOccurs="0"/>
      </xs:choice>
      <xs:element name="TotalHeight" type="xs:int"/>
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
<P3D filename="StandCylinder">
  <StandCylinder>
    <Diameter>300</Diameter>
    <Height>80</Height>
    <LuminousDiameter>290</LuminousDiameter>
    <LuminousHeight>40</LuminousHeight>
    <TotalHeight>500</TotalHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </StandCylinder>
</P3D>
```