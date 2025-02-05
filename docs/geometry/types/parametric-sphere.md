---
title: Sphere
sidebar_label: Sphere
---

## Description

![Sphere Luminaire](/img/docs/geometry/parametric/sphere.webp)

This model consists of a sphere on a base if the base height is greater than 0.

- `Diameter` describes the diameter of the sphere.
- `BaseHeight` and `BaseDiameter` represent the size of the base *(optional)*.
- If you set the mounting type to `Pendulum`, the value `PendulumLength` will specify the length of the pendulum *(optional; required if `Mounting` is `Pendulum`)*.
- The default base diameter will be 60% of the diameter of the sphere.
- The height of the base will be 2 times the distance between the edge of the sphere and the intersection with the sphere.

## Parameters

| Parameter      | Type   | Explanation                                                   |
| -------------- | :----: | ------------------------------------------------------------- |
| Diameter       | int    | Value in mm                                                   |
| BaseHeight     | int    | Value in mm *(optional)*                                      |
| BaseDiameter   | int    | Value in mm *(optional)*                                      |
| Mounting       | string | Ceiling, Wall, Floor, Pendulum                                |
| PendulumLength | int    | Value in mm *(optional; required if `Mounting` is `Pendulum`)*  |
| HousingColor   | string | 4 digit RAL color code *(optional)*                           |
| FileName       | string | Optional file name (without an extension) *(optional)*        |

## XSD

```xml
<xs:element name="Sphere">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="BaseHeight" type="xs:int" minOccurs="0"/>
      <xs:element name="BaseDiameter" type="xs:int" minOccurs="0"/>
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
<P3D filename="Sphere">
  <Sphere>
    <Diameter>200</Diameter>
    <BaseHeight>100</BaseHeight>
    <BaseDiameter>120</BaseDiameter>
    <Mounting>Ceiling</Mounting>
    <PendulumLength>500</PendulumLength>
    <HousingColor>9005</HousingColor>
    <FileName>example_filename</FileName>
  </Sphere>
</P3D>
```