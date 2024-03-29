---
title: Street Cuboid Side
sidebar_label: Street Cuboid Side
---

## Description

![Street Cuboid Side](/img/docs/geometry/parametric/street-cuboid-side.webp)

Classic street light with the luminous head cube-shaped attached to the pole on its edge.

- The pole will not be modeled.
- You can adjust the dimensions of the head by setting the `LuminousLength`, `LuminousWidth`, and `LuminousHeight`.
- The luminous center is located at 0,0,0.
- There is an offset aligned to C0.

| Parameter      | Type | Explanation |
| -------------- | :--: | :---------: |
| Width          | int  | value in mm |
| Length         | int  | value in mm |
| Height         | int  | value in mm |
| LuminousWidth  | int  | value in mm |
| LuminousLength | int  | value in mm |
| LuminousHeight | int  | value in mm |

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
      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <StreetCuboidSide>
    <Width>300</Width>
    <Length>190</Length>
    <Height>80</Height>
    <LuminousWidth>280</LuminousWidth>
    <LuminousLength>120</LuminousLength>
    <LuminousHeight>0</LuminousHeight>
  </StreetCuboidSide>
</P3D>
```