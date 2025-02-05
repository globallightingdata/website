---
title: Parabolic
sidebar_label: Parabolic
---

## Description

![Parabolic Luminaire](/img/docs/geometry/parametric/parabolic.webp)

`Parabolic` is a parabolic-shaped luminaire.

- `Diameter`: Indicates the widest part of the luminaire.
- `Height`: Describes the total height of the luminaire.
- `LuminousDiameter`: Describes the diameter of the illuminated surface *(optional)*.
- `BaseDiameter`: Has a default value of 50% of the main diameter *(optional)*.
- `BaseHeight`: Has a default value of 50% of the main height *(optional)*.
- `Luminous Features`: Specify either `LuminousHeight` or `ReflectorDepth`:
  - `LuminousHeight`: Describes how far the luminous part sticks out of the body.
  - `ReflectorDepth`: Describes how far the luminaire is recessed into the body.
- `Mounting`: The luminaire can be mounted on ceilings, walls, floors, or suspended from a pendulum.
  - If `Mounting` is set to `Pendulum`, the `PendulumLength` must be specified.
- Optionally, `HousingColor` can be provided as a 4-digit RAL color code.
- Optionally, `FileName` can be provided (without an extension).

## Parameters

| Parameter                              |  Type   | Explanation                                                                                   |
| -------------------------------------- | :-----: | ---------------------------------------------------------------------------------------------:|
| **Diameter**                           | int     | Value in mm. Indicates the widest part of the luminaire.                                       |
| **Height**                             | int     | Value in mm. Total height of the luminaire.                                                    |
| **LuminousDiameter**                   | int     | Value in mm. Diameter of the illuminated surface *(optional)*.                                 |
| **LuminousHeight** / **ReflectorDepth**| int     | Value in mm. Choose one to define how the luminous part interacts with the body.                |
| **BaseDiameter**                       | int     | Value in mm. Base diameter *(default is 50% of `Diameter`)* *(optional)*.                       |
| **BaseHeight**                         | int     | Value in mm. Base height *(default is 50% of `Height`)* *(optional)*.                           |
| **Mounting**                           | string  | One of: `Ceiling`, `Wall`, `Floor`, or `Pendulum`.                                             |
| **PendulumLength**                     | int     | Value in mm. Required if `Mounting` is `Pendulum`.                                             |
| **HousingColor**                       | string  | A 4-digit RAL color code matching `[1-9][0-9]{3}` (optional).                                  |
| **FileName**                           | string  | Optional file name (without an extension).                                                    |

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
<P3D filename="Parabolic">
  <Parabolic>
    <Diameter>200</Diameter>
    <Height>150</Height>
    <LuminousDiameter>180</LuminousDiameter>
    <LuminousHeight>50</LuminousHeight>
    <BaseDiameter>100</BaseDiameter>
    <BaseHeight>75</BaseHeight>
    <Mounting>Ceiling</Mounting>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </Parabolic>
</P3D>
```