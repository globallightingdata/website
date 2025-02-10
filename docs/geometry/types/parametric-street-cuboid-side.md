---
title: Street Cuboid Side
sidebar_label: Street Cuboid Side
---

## Description

![Street Cuboid Side](/img/docs/geometry/parametric/street-cuboid-side.webp)

`Street Cuboid Side` is a classic street light featuring a cuboid-shaped luminous head attached to the side of a pole. This parametric model allows you to define the `TotalHeight` and the `Height` of the luminaire's housing (not including the stand).

- `Width`, `Length`, and `Height` define the overall dimensions of the luminaire's housing.
- `LuminousWidth` and `LuminousLength` *(optional)* specify the size of the luminous surfaces.
- Either `LuminousHeight` or `ReflectorDepth` *(optional)* can be specified:
  - `LuminousHeight`: Describes how far the luminous part sticks out from the housing.
  - `ReflectorDepth`: Describes how far the luminous part is recessed into the housing.
- `TotalHeight` *(optional)* defines the overall height of the entire model, including the stand. If specified, the stand height is calculated as `TotalHeight` minus the luminaire `Height`.
- The pole itself is not modeled within this luminaire configuration.

## Parameters

| Parameter         | Type   | Explanation                                                                                  |
| ----------------- | :----: | --------------------------------------------------------------------------------------------:|
| Width             | int    | Base width of the luminaire in millimeters (mm).                                             |
| Length            | int    | Base length of the luminaire in millimeters (mm).                                            |
| Height            | int    | Height of the luminaire head in millimeters (mm).                                            |
| LuminousWidth     | int    | Width of the luminous surface in millimeters (mm) *(optional)*.                              |
| LuminousLength    | int    | Length of the luminous surface in millimeters (mm) *(optional)*.                             |
| LuminousHeight    | int    | Extent to which the luminous part protrudes from the housing in mm *(optional)*.             |
| ReflectorDepth    | int    | Extent to which the luminous part is recessed into the housing in mm *(optional)*.           |
| TotalHeight       | int    | Overall height of the luminaire including the stand in millimeters (mm) *(optional)*.          |
| HousingColor      | string | 4 digit RAL color code *(optional)*.                                                         |
| FileName          | string | Optional file name (without an extension) *(optional)*.                                      |

## XSD

```xml
<xs:element name="StreetCuboidSide">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int" minOccurs="0"/>
      <xs:element name="LuminousLength" type="xs:int" minOccurs="0"/>
      <xs:choice minOccurs="0">
        <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
        <xs:element name="ReflectorDepth" type="xs:int" minOccurs="0"/>
      </xs:choice>
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
<P3D filename="StreetCuboidSide">
  <StreetCuboidSide>
    <Width>300</Width>
    <Length>190</Length>
    <Height>80</Height>
    <LuminousWidth>280</LuminousWidth>
    <LuminousLength>170</LuminousLength>
    <LuminousHeight>40</LuminousHeight>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </StreetCuboidSide>
</P3D>
```
