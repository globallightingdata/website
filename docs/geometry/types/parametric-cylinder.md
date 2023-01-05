---
title: Cylinder
sidebar_label: Cylinder
---

## Description

![Cylinder](/img/docs/geometry/parametric/cylinder.webp)

`Diameter` and `Height` describe the bounding box size of the luminaire.

- `LuminousDiameter` and `LuminousHeight` describe the dimensions of the illuminated surface.
- `LuminousHeight` will let the luminous surface extrude out of the object.
- If the `Mounting` type is a `Pendulum`, the `PendulumLength` will set the default pendulum length.

| Parameter        | Type |          Explanation           |
| ---------------- | :--: | :----------------------------: |
| Diameter         | int  |          value in mm           |
| Height           | int  |          value in mm           |
| TopDiameter      | int  |          value in mm           |
| LuminousDiameter | int  |          value in mm           |
| LuminousHeight   | int  |          value in mm           |
| Mounting         | int  | Ceiling, Wall, Floor, Pendulum |
| PendulumLength   | int  |          value in mm           |

## XSD

```xml
<xs:element name="Cylinder">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="Diameter" type="xs:int"/>
      <xs:element name="Height" type="xs:int"/>
      <xs:element name="TopDiameter" type="xs:int" minOccurs="0"/>
      <xs:element name="LuminousDiameter" type="xs:int"/>
      <xs:element name="LuminousHeight" type="xs:int" minOccurs="0"/>
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
  <Cylinder>
    <Diameter>500</Diameter>
    <Height>900</Height>
    <LuminousDiameter>450</LuminousDiameter>
    <Mounting>Pendulum</Mounting>
    <PendulumLength>800</PendulumLength>
  </Cylinder>
</P3D>
```
