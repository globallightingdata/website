---
title: Parabolic
sidebar_label: Parabolic
---

## Description

![Parabolic Luminaire](/img/docs/geometry/parametric/parabolic.webp)

Parabolic shaped luminaire.

- The `Diameter` indicates the widest part of the luminaire.
- The `Height` describes the total height of the luminaire.
- The `LuminousDiameter` describes the diameter of the illuminated surface.
- The `BaseDiameter` has a default value of 50% of the main diameter.
- The `BaseHeight` has a default value of 50% of the main height.
- Either `LuminousHeight` or `ReflectorDepth` can be specified to describe how the luminous part extrudes or introdudes into the body:
  - The `LuminousHeight` describes how far the luminous part sticks out of the body.
  - The `ReflectorDepth` describes how far the luminaire is recessed into the body.
- The luminaire can be mounted on ceilings, walls, floors, or suspended from a pendulum (`Mounting`).
- If `Mounting` is set to `Pendulum`, the `PendulumLength` must be specified.

| Parameter        | Type    | Explanation                                           |
| ---------------- | :-----: | :---------------------------------------------------: |
| Diameter         | int     | Value in mm                                           |
| Height           | int     | Value in mm                                           |
| LuminousDiameter | int     | Value in mm                                           |
| LuminousHeight   | int     | Value in mm                                           |
| ReflectorDepth   | int     | Value in mm                                           |
| BaseDiameter     | int     | Value in mm (default is 50% of `Diameter`)            |
| BaseHeight       | int     | Value in mm (default is 50% of `Height`)              |
| Mounting         | string  | Ceiling, Wall, Floor or Pendulum                      |
| PendulumLength   | int     | Value in mm (required if `Mounting` is `Pendulum`)    |

## XSD

```xml
<xs:element name="Parabolic">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int" minOccurs="0"/>
      <xs:choice minOccurs="0">
        <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
        <xs:element name="ReflectorDepth" type="xs:int" minOccurs="0"/>
      </xs:choice>
      <xs:element name="BaseDiameter" type="xs:int" minOccurs="0"/>
      <xs:element name="BaseHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="Mounting">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:enumeration value="Ceiling"/>
            <xs:enumeration value="Wall"/>
            <xs:enumeration value="Floor"/>
            <xs:enumeration value="Pendulum"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="PendulumLength" type="xs:int" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example

```xml
<P3D>
  <Parabolic>
    <Diameter>200</Diameter>
    <Height>150</Height>
    <LuminousDiameter>180</LuminousDiameter>
    <LuminousHeight>50</LuminousHeight>
    <BaseDiameter>80</BaseDiameter>
    <BaseHeight>80</BaseHeight>
    <Mounting>Ceiling</Mounting>
  </Parabolic>
</P3D>
```