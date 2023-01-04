---
title: Cuboid
sidebar_label: Cuboid
---

## Description

![Open Luminaire ](/img/docs/geometry/parametric/cuboid.webp)

Cuboid is a cube-shaped luminaire.
Width, length, and height describe the total size of the entire luminaire.
Luminous width, length, and height describe the dimensions of the luminous surfaces. The height describes how far the luminous part sticks out of the body. The luminaire can be mounted to a surface or on a pendulum.

| Parameter      | Type |      Explanation       |
| -------------- | :--: | :--------------------: |
| Width          | int  |      value in mm       |
| Length         | int  |      value in mm       |
| Height         | int  |      value in mm       |
| LuminousWidth  | int  |      value in mm       |
| LuminousLength | int  |      value in mm       |
| LuminousHeight | int  |      value in mm       |
| TopWidth       | int  |      value in mm       |
| TopLength      | int  |      value in mm       |
| Mounting       | int  | Ceiling, Wall or Floor |
| PendulumLength | int  |      value in mm       |

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
      <xs:element name="LuminousHeight" type="xs:int"/>
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

```xml
<P3D>
  <Cuboid>
    <Width>400</Width>
    <Length>400</Length>
    <Height>200</Height>
    <LuminousWidth>300</LuminousWidth>
    <LuminousLength>300</LuminousLength>
    <LuminousHeight>10</LuminousHeight>
    <Mounting>Pendulum</Mounting>
    <PendulumLength>600</PendulumLength>
  </Cuboid>
</P3D>
```
