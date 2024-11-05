---
title: Recessed Round
sidebar_label: Recessed Round
---

## Description

![Recessed Round](/img/docs/geometry/parametric/recessed-round.webp)

Round recessed luminaire.

- The `Diameter` indicates the widest part of the luminaire.
- The `Height` describes the total height, including the recessed and protruding parts of the luminaire.
- `LuminousDiameter` describes the diameter of the illuminated surface.
- The `TopDiameter` is, by default, 80% of the total diameter and describes the diameter of the recessed part.
- Either `LuminousHeight` or `ReflectorDepth` can be specified to describe how far the luminaire protrudes from the mounting surface or the depth of the reflector, respectively.
- The luminaire can be mounted on ceilings, walls, or floors (`Mounting`).

| Parameter        | Type   | Explanation              |
| ---------------- | :----: | :----------------------: |
| Diameter         | int    | Value in mm              |
| Height           | int    | Value in mm              |
| LuminousDiameter | int    | Value in mm              |
| TopDiameter      | int    | Value in mm              |
| LuminousHeight   | int    | Value in mm              |
| ReflectorDepth   | int    | Value in mm              |
| Mounting         | string | Ceiling, Wall or Floor   |

## XSD

```xml
<xs:element name="RecessedRound">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="TopDiameter" type="xs:int" minOccurs="0"/>
      <xs:choice minOccurs="0">
        <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
        <xs:element name="ReflectorDepth" type="xs:int" minOccurs="0"/>
      </xs:choice>
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

# XML
## Example with LuminousHeight

```xml
<P3D>
  <RecessedRound>
    <Diameter>50</Diameter>
    <Height>50</Height>
    <LuminousDiameter>40</LuminousDiameter>
    <TopDiameter>40</TopDiameter>
    <LuminousHeight>10</LuminousHeight>
    <Mounting>Ceiling</Mounting>
  </RecessedRound>
</P3D>
```

## Example with ReflectorDepth

```xml
<P3D>
  <RecessedRound>
    <Diameter>50</Diameter>
    <Height>50</Height>
    <LuminousDiameter>40</LuminousDiameter>
    <TopDiameter>40</TopDiameter>
    <ReflectorDepth>5</ReflectorDepth>
    <Mounting>Wall</Mounting>
  </RecessedRound>
</P3D>
```