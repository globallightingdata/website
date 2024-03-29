---
title: Floodlight Cuboid
sidebar_label: Floodlight Cuboid
---

## Description

![Floodlight Cuboid](/img/docs/geometry/parametric/flood-light-cuboid.webp)

A Spotlight in cube shape mounted on a bracket attached to a cubic plate.

- You can adjust the dimensions of the light by setting the `Length`, `Width` and `Height`.
- Setting the `TotalHeight` parameter will affect the size of the bracket.
- The plate size can be changed using the base dimensions.

| Parameter      | Type | Explanation |
| -------------- | :--: | :---------: |
| Width          | int  | value in mm |
| Length         | int  | value in mm |
| Height         | int  | value in mm |
| LuminousWidth  | int  | value in mm |
| LuminousLength | int  | value in mm |
| LuminousHeight | int  | value in mm |
| TotalHeight    | int  | value in mm |

## XSD

```xml
<xs:element name="FloodLightCuboid">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:element name="LuminousHeight" type="xs:int"/>
      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <FloodLightCuboid>
    <Width>400</Width>
    <Length>400</Length>
    <Height>100</Height>
    <LuminousWidth>380</LuminousWidth>
    <LuminousLength>380</LuminousLength>
    <LuminousHeight>10</LuminousHeight>
    <TotalHeight>250</TotalHeight>
  </FloodLightCuboid>
</P3D>
```