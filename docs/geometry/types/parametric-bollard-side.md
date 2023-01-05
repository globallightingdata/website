---
title: Bollard Side
sidebar_label: Bollard Side
---

## Description

![Bollard Side](/img/docs/geometry/parametric/bollard-side.webp)

`BollardSide` is a Cube-shaped bollard with a square-shaped luminous surface aligned to C0 direction.

- The parameter `Height` will set the height of the head, whereas the `TotalHeight` will affect the size of the entire model.
- The default setting is one luminous surface aligned to C0.
- The default distance of the luminous surface is 2% of the height measured from the upper edge.
- There is only one luminous surface.

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
<xs:element name="BollardSide">
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
  <BollardSide>
    <Width>400</Width>
    <Length>400</Length>
    <Height>1300</Height>
    <LuminousWidth>300</LuminousWidth>
    <LuminousLength>100</LuminousLength>
    <LuminousHeight>100</LuminousHeight>
  </BollardSide>
</P3D>
```
