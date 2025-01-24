---
title: Street Cuboid Side
sidebar_label: Street Cuboid Side
---

## Description

![Street Cuboid Side](/img/docs/geometry/parametric/street-cuboid-side.webp)

A classic street light featuring a cuboid-shaped luminous head attached to the side of a pole.

- `Width`, `Length`, and `Height`: Define the overall dimensions of the luminaire's housing.
- `LuminousWidth` and `LuminousLength` *(optional)*: Specify the size of the luminous surfaces.
- `LuminousHeight` or `ReflectorDepth` *(optional)*:
  - `LuminousHeight`: Describes how far the luminous part sticks out from the housing.
  - `ReflectorDepth`: Describes how far the luminous part is recessed into the housing.
- `TotalHeight` *(optional)*: Defines the overall height of the entire model, including the stand. If specified, the stand height is calculated as `TotalHeight` minus the luminaire `Height`.
- The pole itself is **not modeled** within this luminaire configuration.

## Parameters

| Parameter           | Type   | Explanation                                                           |
| ------------------- | :----: | :-------------------------------------------------------------------: |
| Width               | int    | Base width of the luminaire in millimeters (mm).                      |
| Length              | int    | Base length of the luminaire in millimeters (mm).                     |
| Height              | int    | Height of the luminaire head in millimeters (mm).                     |
| LuminousWidth       | int    | Width of the luminous surface in millimeters (mm) *(optional)*.        |
| LuminousLength      | int    | Length of the luminous surface in millimeters (mm) *(optional)*.       |
| LuminousHeight      | int    | Extent to which the luminous part protrudes from the housing (mm) *(optional)*. |
| ReflectorDepth      | int    | Extent to which the luminous part is recessed into the housing (mm) *(optional)*. |
| TotalHeight         | int    | Overall height of the luminaire including the stand in millimeters (mm) *(optional)*. |
| HousingColor        | string | 4 digit RAL color code                                                |

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
        <xs:complexType>
          <xs:attribute name="ral">
            <xs:simpleType>
              <xs:restriction base="xs:string">
                <xs:pattern value="[1-9][0-9]{3}"/>
              </xs:restriction>
            </xs:simpleType>
          </xs:attribute>
        </xs:complexType>
      </xs:element>
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
    <HousingColor ral="9005"/> 
  </StreetCuboidSide>
</P3D>
```