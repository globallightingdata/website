---
title: Cuboid
sidebar_label: Cuboid
---

## Description

![Cuboid](/img/docs/geometry/parametric/cuboid.webp)

`Cuboid` is a cube-shaped luminaire.

- `Width`, `Length`, and `Height` describe the total size of the entire luminaire.
- `LuminousWidth`, `LuminousLength`, and either `LuminousHeight` or `ReflectorDepth` describe the dimensions of the luminous surfaces.
  - `LuminousHeight` describes how far the luminous part sticks out of the body.
  - `ReflectorDepth` describes how far the luminous part is recessed into the body.
- Top dimensions (`TopWidth` and `TopLength`) are by default 80% of the lower dimensions.
- The luminaire can be mounted to a surface or on a pendulum (`Mounting`).
  - Possible values for `Mounting` are `Ceiling`, `Wall`, `Floor`, or `Pendulum`.
  - If `Mounting` is set to `Pendulum`, then `PendulumLength` (value in mm) is required.
- Optionally, `HousingColor` can be provided as a 4-digit RAL color code.
- Optionally, `FileName` can be provided. The filename should not include an extension.

## Parameters

| Parameter                              |  Type   | Explanation                                                                                           |
| -------------------------------------- | :-----: | -----------------------------------------------------------------------------------------------------:|
| **Width**                              | int     | Value in mm.                                                                                          |
| **Length**                             | int     | Value in mm.                                                                                          |
| **Height**                             | int     | Value in mm.                                                                                          |
| **LuminousWidth**                      | int     | Value in mm.                                                                                          |
| **LuminousLength**                     | int     | Value in mm.                                                                                          |
| **LuminousHeight** / **ReflectorDepth**| int     | Value in mm. Choose one to define how the luminous part interacts with the body.                      |
| **TopWidth**                           | int     | Value in mm (optional).                                                                               |
| **TopLength**                          | int     | Value in mm (optional).                                                                               |
| **Mounting**                           | string  | One of: `Ceiling`, `Wall`, `Floor`, `Pendulum`.                                                       |
| **PendulumLength**                     | int     | Value in mm (required if `Mounting` is `Pendulum`).                                                   |
| **HousingColor**                       | string  | A 4-digit RAL color code matching `[1-9][0-9]{3}` (optional).                                          |
| **FileName**                           | string  | Optional file name (without an extension).                                                          |

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
<P3D filename="Cuboid">
  <Cuboid>
    <Width>40</Width>
    <Length>600</Length>
    <Height>50</Height>
    <LuminousWidth>34</LuminousWidth>
    <LuminousLength>596</LuminousLength>
    <LuminousHeight>20</LuminousHeight>
    <Mounting>Pendulum</Mounting>
    <PendulumLength>500</PendulumLength>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </Cuboid>
</P3D>
```
