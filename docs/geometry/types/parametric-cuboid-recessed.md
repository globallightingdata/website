---
title: Recessed Cuboid
sidebar_label: Recessed Cuboid
---

## Description

![Recessed Cuboid](/img/docs/geometry/parametric/recessed-cuboid.webp)

The `RecessedCuboid` is a cube-shaped recessed luminaire.

- `Width`, `Length`, and `Height` describe the total size of the entire luminaire.
- `LuminousWidth`, `LuminousLength`, and either `LuminousHeight` or `ReflectorDepth` describe the dimensions of the luminous surfaces.
- The `LuminousHeight` describes how far the luminous part sticks out of the housing.
- The `ReflectorDepth` describes how far the luminous part is recessed into the housing.
- Top dimensions are by default 80% of the lower dimensions.
- The luminaire can be mounted on ceilings, walls, or floors (`Mounting`).

| Parameter        | Type    | Explanation                  |
| ---------------- | :-----: | :--------------------------: |
| Width            | int     | Value in mm                  |
| Length           | int     | Value in mm                  |
| Height           | int     | Value in mm                  |
| LuminousWidth    | int     | Value in mm                  |
| LuminousLength   | int     | Value in mm                  |
| LuminousHeight   | int     | Value in mm                  |
| ReflectorDepth   | int     | Value in mm                  |
| TopWidth         | int     | Value in mm                  |
| TopLength        | int     | Value in mm                  |
| Mounting         | string  | Ceiling, Wall or Floor       |

## XSD

```xml
<xs:element name="RecessedCuboid">
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
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example with LuminousHeight

```xml
<P3D>
  <RecessedCuboid>
    <Width>80</Width>
    <Length>80</Length>
    <Height>80</Height>
    <LuminousWidth>70</LuminousWidth>
    <LuminousLength>70</LuminousLength>
    <LuminousHeight>10</LuminousHeight>
    <TopWidth>64</TopWidth>
    <TopLength>64</TopLength>
    <Mounting>Ceiling</Mounting>
  </RecessedCuboid>
</P3D>
```
### Example with ReflectorDepth

```xml
<P3D>
  <RecessedCuboid>
    <Width>80</Width>
    <Length>80</Length>
    <Height>80</Height>
    <LuminousWidth>70</LuminousWidth>
    <LuminousLength>70</LuminousLength>
    <ReflectorDepth>5</ReflectorDepth>
    <TopWidth>64</TopWidth>
    <TopLength>64</TopLength>
    <Mounting>Wall</Mounting>
  </RecessedCuboid>
</P3D>
```