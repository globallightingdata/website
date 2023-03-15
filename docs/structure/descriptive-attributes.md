---
title: Descriptive Attributes
sidebar_label: Descriptive Attributes
---

## Introduction

GLDF covers a lot of native data fields to carry information that is not only relevant for lighting and light planning purposes. We also included elements that enable you to describe your product for use cases other than light planning. These fields include but are not limited to information for electrical planning, logistics, warehouses, or sales purposes.

Even if you need to transport information that does not fit into a native field within GLDF, we've got you covered. For that purpose, we invented custom attributes. Custom attributes allow you to put virtually any information you can come up with into the GLDF and use it in your application or use case.

You can use Descriptive Properties in the meta section of the product or on a variant basis. Properties set in the meta section will apply to all variants. 

We split descriptive attributes into the following categories.

| Category | Description |
|----|----|
| Mechanical  | Describes the physical appearance and weight of a product |
| Electrical  |  Electrical properties of the product  |
| Emergency   |  Emergency characteristics of a product.  |
|  Marketing  |  Properties you would typically used for marketing purposes.  |
|  Operations and Maintenance  |  Properties affecting the operation and maintenance of the product, such as useful lifetime, etc.  |
|  Custom Properties  |  Any property you can describe that is not covered above.  |

<img src="/img/docs/structure/desciptiveattributes.webp" alt="Descriptive Attributes" width="561" />

## Mechanical

This XML schema describes the Mechanical element, which provides information about the mechanical attributes of a luminaire.

### Structure

<img src="/img/docs/structure/mechanical.webp" alt="Mechanical Attributes" width="435" />

```xml showLineNumbers
<Mechanical>
  <ProductSize>
    <Length>...</Length>
    <Width>...</Width>
    <Height>...</Height>
  </ProductSize>
  <ProductForm>...</ProductForm>
  <SealingMaterial>...</SealingMaterial>
  <Adjustabilities>
    <Adjustability>...</Adjustability>
    ...
  </Adjustabilities>
  <IKRating>...</IKRating>
  <ProtectiveAreas>
    <Area>...</Area>
    ...
  </ProtectiveAreas>
  <Weight>...</Weight>
</Mechanical>
```

### ProductSize

The ProductSize element contains the dimensions of the luminaire in millimeters. It includes the following child elements:

- Length (type: xs:int): The length of the product along the C90/C270 axis.
- Width (type: xs:int): The width of the product along the C0/C180 axis.
- Height (type: xs:int): The height of the product.

### ProductForm

The ProductForm element describes the geometrical form of the luminaire. It has a string value, which can be one of the following enumeration values:

- Round
- Rounded
- Square
- Linear
- Areal
- Sphere
- Cuboid
- Cylinder
- Cone
- Special

### SealingMaterial

The SealingMaterial element represents the material of the luminaire's sealing (type: Locale).

### Adjustabilities

The Adjustabilities element contains a sequence of Adjustability elements, describing the possible adjustabilities of the luminaire's parts. The Adjustability element has a string value and can be one of the following enumeration values:

- Fixed
- Orientation
- Turn
- Tilt
- Cardanic
- Height adjustable
- User defined

### IKRating

The IKRating element describes the degree of protection provided by enclosures for electrical equipment against external mechanical impacts, according to IEC 62262:2002 and IEC 60068-2-75:1997. It has a string value and can be one of the following enumeration values:

- IK00
- IK01
- IK02
- IK03
- IK04
- IK05
- IK06
- IK07
- IK08
- IK09
- IK10
- IK10+

### ProtectiveAreas

The ProtectiveAreas element contains a sequence of Area elements, representing the possible usage of the luminaire in protection-relevant areas. The Area element has a string value and can be one of the following enumeration values:

- Cleanroom suitable
- Ball-impact proof
- Drive/Roll-over proof

### Weight

The Weight element describes the weight of the luminaire in kilograms, including the ballast but excluding the packaging (type: xs:double).


## Electrical 

<img src="/img/docs/structure/electrical.webp" alt="Electrical Attributes" width="433" />

## Emergency  

<img src="/img/docs/structure/emergency.webp" alt="Emergency Attributes" width="433" />

## Marketing 

<img src="/img/docs/structure/marketing.webp" alt="Marketing Attributes" width="407" />

## Operations and Maintenance 

<img src="/img/docs/structure/operationsandmaint.webp" alt="Operatoins and Maintenance Attributes" width="536" />

## Custom Properties

<img src="/img/docs/structure/customproperties.webp" alt="Custom Properties Attributes" width="536" />

