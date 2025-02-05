---
title: Cylinder
sidebar_label: Cylinder
---

## Description

![Cylinder](/img/docs/geometry/parametric/cylinder.webp)

`Cylinder` is a cylindrical luminaire.

- `Diameter` and `Height` describe the bounding box size of the luminaire.
- `LuminousDiameter` and either `LuminousHeight` or `ReflectorDepth` describe the dimensions of the illuminated surface.
  - `LuminousHeight` describes how far the luminous part sticks out of the body.
  - `ReflectorDepth` describes how far the luminous part is recessed into the body.
- The `TopDiameter` is, by default, 80% of the main diameter and describes the diameter of the top part of the luminaire.
- The luminaire can be mounted on ceilings, walls, floors, or suspended from a pendulum (`Mounting`).
  - If `Mounting` is set to `Pendulum`, the `PendulumLength` must be specified.
- Optionally, `HousingColor` can be provided as a 4-digit RAL color code.
- Optionally, a `FileName` can be provided. The filename should not include an extension.

## Parameters

| Parameter                              |  Type   | Explanation                                                                                   |
| -------------------------------------- | :-----: | ---------------------------------------------------------------------------------------------:|
| **Diameter**                           | int     | Value in mm.                                                                                  |
| **Height**                             | int     | Value in mm.                                                                                  |
| **TopDiameter**                        | int     | Value in mm (optional; default is 80% of `Diameter`).                                         |
| **LuminousDiameter**                   | int     | Value in mm.                                                                                  |
| **LuminousHeight** / **ReflectorDepth**| int     | Value in mm. Choose one to define how the illuminated surface interacts with the body.         |
| **Mounting**                           | string  | One of: `Ceiling`, `Wall`, `Floor`, or `Pendulum`.                                             |
| **PendulumLength**                     | int     | Value in mm (required if `Mounting` is `Pendulum`).                                           |
| **HousingColor**                       | string  | A 4-digit RAL color code matching `[1-9][0-9]{3}` (optional).                                  |
| **FileName**                           | string  | Optional file name (without an extension).                                                   |

## XSD

```xml
<xs:element name="Cylinder">
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
      <xs:element name="HousingColor" minOccurs="0">
        <xs:simpleType>
          <xs:restriction base="xs:string">
            <xs:pattern value="[1-9][0-9]{3}"/>
          </xs:restriction>
        </xs:simpleType>
      </xs:element>
      <xs:element name="FileName" type="xs:string" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML
### Example

```xml
<P3D filename="Cylinder">
  <Cylinder>
    <Diameter>100</Diameter>
    <Height>150</Height>
    <TopDiameter>100</TopDiameter>
    <LuminousDiameter>90</LuminousDiameter>
    <LuminousHeight>20</LuminousHeight>
    <Mounting>Pendulum</Mounting>
    <PendulumLength>400</PendulumLength>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </Cylinder>
</P3D>
```