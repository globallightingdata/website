---
title: Street Cylinder Side
sidebar_label: Street Cylinder Side
---

## Description

![Street Cylinder Side](/img/docs/geometry/parametric/street-cylinder-side.webp)

`Street Cylinder Side` is a classic street light featuring a cylinder-shaped luminous head attached to the side of a pole.

- `Diameter` and `Height`: Define the overall dimensions of the luminaire's housing.
- `TopDiameter` *(optional)*: Allows for skewing the cylinder by adjusting the diameter at the top.
- `LuminousDiameter`: Sets the size of the main luminous surface.
- `TopLuminousDiameter` *(optional)*: Defines the size of the luminous surface at the top for additional design flexibility.
- Either `LuminousHeight` or `ReflectorDepth` *(optional)*:
  - `LuminousHeight`: Describes how far the luminous part protrudes from the housing.
  - `ReflectorDepth`: Describes how far the luminous part is recessed into the housing.
- `Height` *(optional)*: Sets the height of the luminaire head separately from the overall model.
- `TotalHeight` *(optional)*: Defines the overall height of the entire model, including the stand. If specified, the stand height is calculated as `TotalHeight` minus the luminaire `Height`.

**Note**: The pole itself is not modeled within this luminaire configuration.

## Parameters

| **Parameter**           | Type   | Explanation                                                                         |
| ----------------------- | :----: | -----------------------------------------------------------------------------------:|
| **Diameter**            | int    | Base diameter of the luminaire in millimeters (mm).                                  |
| **LuminousDiameter**    | int    | Diameter of the main luminous surface in millimeters (mm).                           |
| **TopDiameter**         | int    | Diameter at the top of the luminaire, allowing for skewing *(optional)*.            |
| **TopLuminousDiameter** | int    | Diameter of the luminous surface at the top *(optional)*.                           |
| **LuminousHeight**      | int    | Extent to which the luminous part protrudes from the housing in mm *(optional)*.     |
| **ReflectorDepth**      | int    | Extent to which the luminous part is recessed into the housing in mm *(optional)*.   |
| **Height**              | int    | Height of the luminaire head in millimeters (mm) *(optional)*.                       |
| **TotalHeight**         | int    | Overall height of the luminaire including the stand in millimeters (mm) *(optional)*.  |
| **HousingColor**        | string | 4 digit RAL color code *(optional)*.                                                |
| **FileName**            | string | Optional file name (without an extension) *(optional)*.                             |

## XSD

```xml
<xs:element name="StreetCylinderSide">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="TopDiameter" type="xs:int" minOccurs="0"/>
      <xs:element name="TopLuminousDiameter" type="xs:int" minOccurs="0"/>
      <xs:choice minOccurs="0">
        <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
        <xs:element name="ReflectorDepth" type="xs:int" minOccurs="0"/>
      </xs:choice>
      <xs:element name="Height" type="xs:int" minOccurs="0"/>
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
<P3D filename="StreetCylinderSide">
  <StreetCylinderSide>
    <Diameter>500</Diameter>
    <LuminousDiameter>460</LuminousDiameter>
    <TopLuminousDiameter>350</TopLuminousDiameter>
    <LuminousHeight>100</LuminousHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </StreetCylinderSide>
</P3D>
```