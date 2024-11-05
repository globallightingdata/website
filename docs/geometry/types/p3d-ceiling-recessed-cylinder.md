---
title: Ceiling Recessed Cylinder
sidebar_label: Ceiling Recessed Cylinder
---

## Description

![Ceiling Recessed Cylinder](/img/docs/geometry/parametric/recessed-round.webp)

Ceiling-mounted recessed cylindrical luminaire.

- The `Diameter` indicates the widest part of the luminaire.
- The `TopDiameter` describes the diameter of the top part of the luminaire. By default, it is equal to the `Diameter` if not specified.
- The `Height` describes the total height of the luminaire.
- `LuminousDiameter` specifies the diameter of the illuminated surface.
- `LuminousHeight` indicates how far the luminaire protrudes from the ceiling.
- `ReflectorDepth` describes the depth of the reflector within the luminaire. This parameter is optional and can be used instead of `LuminousHeight`.

**Note:** Either `LuminousHeight` or `ReflectorDepth` can be specified, but not both simultaneously.

## Parameters

| Parameter        | Type |       Explanation        |
| ---------------- | :--: | :----------------------: |
| Diameter         | int  |       value in mm        |
| TopDiameter      | int  |       value in mm        |
| Height           | int  |       value in mm        |
| LuminousDiameter | int  |       value in mm        |
| LuminousHeight   | int  |       value in mm        |
| ReflectorDepth   | int  |       value in mm        |

## XSD

```xml
<xs:element name="CeilingRecessedCylinder" type="Cylinder"/>
...
<xs:complexType name="Cylinder">
  <xs:sequence>
    <xs:element name="Diameter" type="xs:int"/>
    <xs:element name="TopDiameter" type="xs:int" minOccurs="0"/>
    <xs:element name="Height" type="xs:int"/>
    <xs:element name="LuminousDiameter" type="xs:int"/>
    <xs:choice minOccurs="0">
      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="ReflectorDepth" type="xs:int" minOccurs="0"/>
    </xs:choice>
  </xs:sequence>
</xs:complexType>
```

## XML Sample

```xml
<P3D>
  <CeilingRecessedCylinder>
    <Diameter>60</Diameter>
    <TopDiameter>60</TopDiameter>
    <Height>55</Height>
    <LuminousDiameter>50</LuminousDiameter>
    <LuminousHeight>15</LuminousHeight>
    <Mounting>Ceiling</Mounting>
  </CeilingRecessedCylinder>
</P3D>
```

## Example with ReflectorDepth

```xml
<P3D>
  <CeilingRecessedCylinder>
    <Diameter>60</Diameter>
    <TopDiameter>60</TopDiameter>
    <Height>55</Height>
    <LuminousDiameter>50</LuminousDiameter>
    <ReflectorDepth>20</ReflectorDepth>
    <Mounting>Ceiling</Mounting>
  </CeilingRecessedCylinder>
</P3D>
```
