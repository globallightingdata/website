---
title: Cuboid
sidebar_label: Cuboid
---

## Description

![Cuboid](/img/docs/geometry/parametric/cuboid.webp)

`Cuboid` is a cube-shaped luminaire.

- `Width`, `Length`, and `Height` describe the total size of the entire luminaire.
- `LuminousWidth`, `LuminousLength`, and either `LuminousHeight` or `ReflectorDepth` describe the dimensions of the luminous surfaces.
- The `LuminousHeight` describes how far the luminous part sticks out of the body.
- The `ReflectorDepth` describes how far the luminous part is recessed into the body.
- Top dimensions are by default 80% of the lower dimensions.
- The luminaire can be mounted to a surface or on a pendulum (`Mounting`).

| Parameter        | Type    | Explanation                       |
| ---------------- | :-----: | :-------------------------------: |
| Width            | int     | Value in mm                       |
| Length           | int     | Value in mm                       |
| Height           | int     | Value in mm                       |
| LuminousWidth    | int     | Value in mm                       |
| LuminousLength   | int     | Value in mm                       |
| LuminousHeight   | int     | Value in mm                       |
| ReflectorDepth   | int     | Value in mm                       |
| TopWidth         | int     | Value in mm                       |
| TopLength        | int     | Value in mm                       |
| Mounting         | string  | Ceiling, Wall, Floor or Pendulum   |
| PendulumLength   | int     | Value in mm (required if `Mounting` is `Pendulum`) |

## XSD

```xml
<xs:element name="Cuboid">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Width" type="xs:int"/>
      <xs:element name="Length" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousWidth" type="xs:int"/>
      <xs:element name="LuminousLength" type="xs:int"/>
      <xs:choice>
        <xs:element name="LuminousHeight" type="xs:int"/>
        <xs:element name="ReflectorDepth" type="xs:int"/>
      </xs:choice>
      <xs:element name="TopWidth" type="xs:int" minOccurs="0"/>
      <xs:element name="TopLength" type="xs:int" minOccurs="0"/>
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
  <Cuboid>
    <Width>40</Width>
    <Length>600</Length>
    <Height>50</Height>
    <LuminousWidth>34</LuminousWidth>
    <LuminousLength>596</LuminousLength>
    <LuminousHeight>20</LuminousHeight>
    <Mounting>Pendulum</Mounting>
    <PendulumLength>500</PendulumLength>
  </Cuboid>
</P3D>
```