---
title: Stand Cylinder
sidebar_label: Stand Cylinder
---

## Description

![Stand Cylinder Luminaire](/img/docs/geometry/parametric/stand-cylinder.webp)

A cylinder-shaped standing luminaire. This parametric model allows you to define the `TotalHeight` and the `Height` of the luminaire, not including the stand.

- The full default height will be 1.8 meters.
- The stand height is the `TotalHeight` minus the luminaire `Height`.
- The stand is always in the middle of the luminaire.
- Default diameter of the foot will be the same as the main `Diameter`.
- Default height of the foot is 2 cm.
- Diameter of the stand is 5 cm.
- Luminous dimensions must be smaller than the main dimensions.
- `Type` ➜ `Direct`: LEO and LES placed at the bottom center of the luminaire. Grows upwards with `LumimousHeight`.
- `Type` ➜ `Indirect`: LEO and LES placed at the top center of the luminaire. Grows downwards with `LumimousHeight`.
- `Type` ➜ `DirectIndirect`: LEO placed in the center of the luminaire. LES on top and bottom surfaces centered.

| Parameter        | Type | Explanation |
| ---------------- | :--: | :---------: |
| Diameter         | int  | value in mm |
| Height           | int  | value in mm |
| TopDiameter      | int  | value in mm |
| LuminousDiameter | int  | value in mm |
| LuminousHeight   | int  | value in mm |
| TotalHeight      | int  | value in mm |

## XSD

```xml
<xs:element name="StandCylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="TopDiameter" type="xs:int" minOccurs="0"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="TotalHeight">
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <StandCylinder>
    <Diameter>310</Diameter>
    <Height>310</Height>
    <LuminousDiameter>300</LuminousDiameter>
    <TotalHeight>1800</TotalHeight>
  </StandCylinder>
</P3D>
```
