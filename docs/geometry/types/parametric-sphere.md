---
title: Sphere
sidebar_label: Sphere
---

## Description

![Sphere Luminaire](/img/docs/geometry/parametric/sphere.webp)

This model consists of a sphere on a base if the base height is greater than 0.
Diameter describes the Diameter of the sphere. Base height and Diameter represent the size of the base. If you set the mounting type to a pendulum, the value pendulum will specify the length of the pendulum.

The default base diameter will be 60% of the diameter of the sphere.
The height of the base will be 2 times the distance between the edge of the sphere and the interesction with the sphere.

| Parameter      | Type |          Explanation           |
| -------------- | :--: | :----------------------------: |
| Diameter       | int  |          value in mm           |
| BaseHeight     | int  |          value in mm           |
| BaseDiameter   | int  |          value in mm           |
| Mounting       | int  | Ceiling, Wall, Floor, Pendulum |
| PendulumLength | int  |          value in mm           |

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
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

## XML

```xml
<P3D>
  <Sphere>
    <Diameter>300</Diameter>
    <BaseHeight>50</BaseHeight>
    <BaseDiameter>200</BaseDiameter>
    <Mounting>Pendulum</Mounting>
    <PendulumLength>800</PendulumLength>
  </Sphere>
</P3D>
```
