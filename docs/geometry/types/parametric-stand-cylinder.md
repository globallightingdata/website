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
- The default diameter of the foot will be the same as the main `Diameter`.
- The default height of the foot is 2 cm.
- The diameter of the stand is 5 cm.
- Luminous dimensions must be smaller than the main dimensions.
- Either `LuminousHeight` or `ReflectorDepth` can be specified to describe how the luminaire interacts with the stand:
  - The `LuminousHeight` describes how far the luminous part sticks out of the body.
  - The `ReflectorDepth` describes how far the luminous part is recessed into the body.

| Parameter        | Type    | Explanation                                           |
| ---------------- | :-----: | :---------------------------------------------------: |
| Diameter         | int     | Value in mm                                           |
| Height           | int     | Value in mm                                           |
| TopDiameter      | int     | Value in mm (default is 80% of `Diameter`)            |
| LuminousDiameter | int     | Value in mm                                           |
| LuminousHeight   | int     | Value in mm                                           |
| ReflectorDepth   | int     | Value in mm                                           |
| TotalHeight      | int     | Value in mm                                           |

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
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example with LuminousHeight

```xml
<P3D>
  <StandCylinder>
    <Diameter>390</Diameter>
    <Height>80</Height>
    <TopDiameter>390</TopDiameter>
    <LuminousDiameter>370</LuminousDiameter>
    <LuminousHeight>50</LuminousHeight>
    <TotalHeight>1800</TotalHeight>
  </StandCylinder>
</P3D>
```

### Example with ReflectorDepth

```xml
<P3D>
  <StandCylinder>
    <Diameter>390</Diameter>
    <Height>80</Height>
    <TopDiameter>390</TopDiameter>
    <LuminousDiameter>370</LuminousDiameter>
    <ReflectorDepth>30</ReflectorDepth>
    <TotalHeight>1800</TotalHeight>
  </StandCylinder>
</P3D>
```