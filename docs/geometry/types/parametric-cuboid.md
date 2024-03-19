---
title: Cuboid
sidebar_label: Cuboid
---

## Description

![Cuboid](/img/docs/geometry/parametric/cuboid.webp)

`Cuboid` is a cube-shaped luminaire.

- `Width`, `Length` and `Height` describe the total size of the entire luminaire.
- `LuminousWidth`, `LuminousLength` and `LuminousHeight` describe the dimensions of the luminous surfaces.
- The `LuminousHeight` describes how far the luminous part sticks out of the body.
- The luminaire can be mounted to a surface or on a pendulum (`Mounting`).

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
| Mounting       | int  | Ceiling, Wall, Floor or Pendulum |
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
    <Width>300</Width>
    <Length>300</Length>
    <Height>200</Height>
    <LuminousWidth>280</LuminousWidth>
    <LuminousLength>280</LuminousLength>
    <LuminousHeight>0</LuminousHeight>
    <TopWidth>250</TopWidth>
    <TopLength>250</TopLength>
    <Mounting>Pendulum</Mounting>
    <PendulumLength>400</PendulumLength>
  </Cuboid>
</P3D>
```