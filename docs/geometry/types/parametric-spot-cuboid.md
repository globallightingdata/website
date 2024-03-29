---
title: Sport Cuboid
sidebar_label: Spot Cuboid
---

## Description

![Spot Cuboid](/img/docs/geometry/parametric/spot-cuboid.webp)

A Spotlight in cube shape mounted on a bracket attached to a cubic plate.

- You can adjust the dimensions of the light by setting the `Length`, `Width` and `Height`.
- Setting the `TotalHeight` parameter will affect the size of the bracket.
- The plate size can be changed using the base dimensions.
- The distance of the connector of the bracket to the luminaire is the same as the `Height`.
- The length of the connection from the base surface to the bracket is 10% of the `Height`.

| Parameter      | Type | Explanation |
| -------------- | :--: | :---------: |
| Width          | int  | value in mm |
| Length         | int  | value in mm |
| Height         | int  | value in mm |
| LuminousWidth  | int  | value in mm |
| LuminousLength | int  | value in mm |
| LuminousHeight | int  | value in mm |
| BaseWidth      | int  | value in mm |
| BaseLength     | int  | value in mm |
| BaseHeight     | int  | value in mm |

## XSD

```xml
<xs:element name="SpotCuboid">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:element name="LuminousHeight" type="xs:int"/>
      <xs:element name="BaseWidth" type="xs:int" minOccurs="0"/>
      <xs:element name="BaseLength" type="xs:int" minOccurs="0"/>
      <xs:element name="BaseHeight" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <SpotCuboid>
    <Width>100</Width>
    <Length>100</Length>
    <Height>30</Height>
    <LuminousWidth>90</LuminousWidth>
    <LuminousLength>90</LuminousLength>
    <LuminousHeight>10</LuminousHeight>
    <BaseWidth>30</BaseWidth>
    <BaseLength>30</BaseLength>
    <BaseHeight>10</BaseHeight>
  </SpotCuboid>
</P3D>
```