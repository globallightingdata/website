---
title: Bollard Cuboid
sidebar_label: Bollard Cuboid
---

## Description

![Bollard Cuboid](/img/docs/geometry/parametric/bollard-cuboid.webp)

`BollardCuboid` is a Cube-shaped bollard with a square-shaped luminous surface.

- The parameter `Height` will set the height of the head, whereas the `TotalHeight` will affect the size of the entire model.
- The default setting is one luminous surface aligned to C0.
- The default distance of the luminous surface is 2% of the height measured from the upper edge.
- There is only one size for luminous surfaces.
- Any Value in `C0`, `C90`, `C180` and `C270` greater than zero means there will be a luminuous surface as defined in the luminous dimensions.

| Parameter      | Type | Explanation |
| -------------- | :--: | :---------: |
| Width          | int  | value in mm |
| Length         | int  | value in mm |
| Height         | int  | value in mm |
| LuminousWidth  | int  | value in mm |
| LuminousLength | int  | value in mm |
| LuminousHeight | int  | value in mm |
| TotalHeight    | int  | value in mm |
| C0             | int  | value in mm |
| C90            | int  | value in mm |
| C180           | int  | value in mm |
| C270           | int  | value in mm |

## XSD

```xml
<xs:element name="BollardCuboid">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:element name="LuminousHeight" type="xs:int"/>
      <xs:element name="TotalHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="C0" type="xs:int" minOccurs="0"/>
      <xs:element name="C90" type="xs:int" minOccurs="0"/>
      <xs:element name="C180" type="xs:int" minOccurs="0"/>
      <xs:element name="C270" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <BollardCuboid>
    <Width>110</Width>
    <Length>110</Length>
    <Height>650</Height>
    <LuminousWidth>100</LuminousWidth>
    <LuminousLength>0</LuminousLength>
    <LuminousHeight>100</LuminousHeight>
    <TotalHeight>650</TotalHeight>
  </BollardCuboid>
</P3D>
```