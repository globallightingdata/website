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

This XML schema describes the `Mechanical` element, which provides information about the mechanical attributes of a luminaire.

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

The `ProductSize` element contains the dimensions of the luminaire in millimeters. It includes the following child elements:

- `Length` (type: `xs:int`): The length of the product along the C90/C270 axis.
- `Width` (type: `xs:int`): The width of the product along the C0/C180 axis.
- `Height` (type: `xs:int`): The height of the product.

### ProductForm

The `ProductForm` element describes the geometrical form of the luminaire. It has a string value, which can be one of the following enumeration values:

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

The `SealingMaterial` element represents the material of the luminaire's sealing (type: `Locale`).

### Adjustabilities

The `Adjustabilities` element contains a sequence of Adjustability elements, describing the possible `adjustabilities` of the luminaire's parts. The Adjustability element has a string value and can be one of the following enumeration values:

- Fixed
- Orientation
- Turn
- Tilt
- Cardanic
- Height adjustable
- User defined

### IKRating

The `IKRating` element describes the degree of protection provided by enclosures for electrical equipment against external mechanical impacts, according to IEC 62262:2002 and IEC 60068-2-75:1997. It has a string value and can be one of the following enumeration values:

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

The `ProtectiveAreas` element contains a sequence of Area elements, representing the possible usage of the luminaire in protection-relevant areas. The Area element has a string value and can be one of the following enumeration values:

- Cleanroom suitable
- Ball-impact proof
- Drive/Roll-over proof

### Weight

The `Weight` element describes the weight of the luminaire in kilograms, including the ballast but excluding the packaging (type: `xs:double`).

## Electrical 

The `Electrical` element, which provides information about the electrical attributes of a luminaire.

<img src="/img/docs/structure/electrical.webp" alt="Electrical Attributes" width="433" />

```xml showLineNumbers
<Electrical>
  <ClampingRange>
    <Lower>...</Lower>
    <Upper>...</Upper>
  </ClampingRange>
  <SwitchingCapacity>...</SwitchingCapacity>
  <ElectricalSafetyClass>...</ElectricalSafetyClass>
  <IngressProtectionIPCode>...</IngressProtectionIPCode>
  <PowerFactor>...</PowerFactor>
  <ConstantLightOutput>...</ConstantLightOutput>
  <LightDistribution>...</LightDistribution>
</Electrical>
```

### ClampingRange

The `ClampingRange` element contains the lower and upper limits of the clamping range in millimeters. It includes the following child elements:

- `Lower` (type: `xs:double`): The lower limit of the clamping range.
- `Upper` (type: `xs:double`): The upper limit of the clamping range.

### SwitchingCapacity

The `SwitchingCapacity` element describes the switching capacity of the sensor in terms of power and cos phi. It has a string value, for example: "1E-1, W 1E0, unitless" (type: xs:string).

### ElectricalSafetyClass

The `ElectricalSafetyClass` element indicates whether the electrical device has a protective earth connection or not. It has a string value, which can be one of the following enumeration values:

- 0
- I
- 0I
- II
- III

### IngressProtectionIPCode

The `IngressProtectionIPCode` element describes the degree of protection provided against intrusion, dust, accidental contact, and water by mechanical casings and electrical enclosures, according to IEC 60529:2014. It has a string value, which can be one of the following enumeration values:

- IP20
- IP21
- ...
- IP69
- IP69K

### PowerFactor

The `PowerFactor` element represents the ratio of the amount of active power to the apparent power at 100% load, according to IEC 80000-6:2008. It has a double value ranging from 0 to 1 (type: xs:double).

### ConstantLightOutput

The `ConstantLightOutpu` element determines whether the luminous flux stays constant over the declared lifetime. It has a boolean value (type: xs:boolean).

### LightDistribution

The `LightDistribution` element describes the projected pattern of the emitted light of the luminaire. It has a string value, which can be one of the following enumeration values:

- Laterally symmetrical narrow
- Laterally symmetrical medium
- Laterally symmetrical wide
- Symmetrical in each quadrant
- Symmetric about 0-180 plane
- Symmetric about 90-270 plane
- Asymmetrical
- Asymmetrical flood
- Asymmetrical wide flood
- Diffuse half spherical
- Diffuse full spherical
- Direct
- Indirect
- Direct indirect
- Other

## Emergency  

The `Emergency` element, which provides information about the emergency lighting attributes of a luminaire.

<img src="/img/docs/structure/emergency.webp" alt="Emergency Attributes" width="433" />

```xml showLineNumbers
<Emergency>
  <DurationTimeAndFlux>
    <Flux hours="...">...</Flux>
  </DurationTimeAndFlux>
  <DedicatedEmergencyLightingType>...</DedicatedEmergencyLightingType>
</Emergency>
```

### DurationTimeAndFlux

The `DurationTimeAndFlux` element represents the variation of emergency lighting output during usage time. It is presented as a table of emitted luminous flux during corresponding hours. This element contains the following child element:

- `Flux` (type: `xs:int`): The emitted luminous flux in lumens. This element can appear multiple times (maxOccurs="unbounded") and has an attribute hours (type: xs:int), which represents the duration time in hours.

### DedicatedEmergencyLightingType

The `DedicatedEmergencyLightingType` element describes the dedicated application field of the emergency lighting, which is meaningful for emergency luminaires only. It has a string value, which can be one of the following enumeration values:

- Exit Light
- Guide Light
- Evacuation Light
- Reference Light
- For Signage
- For Lighting

## Marketing 

The `Marketing` element contains descriptive attributes for marketing purposes.

<img src="/img/docs/structure/marketing.webp" alt="Marketing Attributes" width="407" />

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Marketing>
    <ListPrices>
        <ListPrice currency="USD">99.99</ListPrice>
        <ListPrice currency="EUR">89.99</ListPrice>
    </ListPrices>
    <HousingColors>
        <HousingColor ral="3016" lang="en">Coral Red</HousingColor>
        <HousingColor ral="1016" lang="en">Sulfur Yellow</HousingColor>
    </HousingColors>
    <Markets>
        <Region lang="en">North America</Region>
        <Region lang="en">Europe</Region>
    </Markets>
    <Hyperlinks>
        <Hyperlink lang="en" type="URL">https://www.example.com/product-info</Hyperlink>
    </Hyperlinks>
    <Designer>Jane Doe</Designer>
    <ApprovalMarks>
        <ApprovalMark>CE</ApprovalMark>
        <ApprovalMark>ENEC</ApprovalMark>
    </ApprovalMarks>
    <DesignAwards>
        <DesignAward>Red Dot Award</DesignAward>
        <DesignAward>iF Design Award</DesignAward>
    </DesignAwards>
    <Labels>
        <Label>CE</Label>
        <Label>GS</Label>
    </Labels>
    <Applications>
        <Application>Interior: Office</Application>
        <Application>Interior: Office: Group Offices</Application>
    </Applications>
</Marketing>
```

This XML example demonstrates the structure and various elements specified in the XSD, including list prices in different currencies, housing colors with RAL codes, target markets, hyperlinks, designer name, approval marks, design awards, labels, and fields of application.

### ListPrices

The `ListPrices` element is a container for a list of prices per unit.

- `ListPrice` (0 or more occurrences, `double`): List price with a maximum of 2 decimal places in a given currency.
  - currency (required, `xs:string`): Currency code according to ISO 4217, consisting of 3 characters (e.g., "USD").

### HousingColors

The `HousingColors` element contains housing colors of the luminaire.

- `HousingColor` (0 or more occurrences): The translatable name of the color of the housing and/or RAL number. Inherits from `Locale` for localized names.
    - `ral` (optional, int): RAL Classic color space system code, e.g., "RAL 3016" (coral-red). Must be a 4-digit number.

### Markets

The `Markets` element contains target markets.

 - `Region` (0 or more occurrences): The region can be defined by the user and should be translated to the applicable languages in the Locale element.
   - Inherits from `Locale` for localized names.

### Hyperlinks

The `Hyperlinks` element contains additional information online. Inherits from `Hyperlinks` type.

### Designer

`Designer` (optional, `xs:string`): Name of the designer of the luminaire.

### ApprovalMarks

The `ApprovalMarks` element contains approval marks of the product.

`ApprovalMark` (0 or more occurrences, `xs:string`): Approval marks of the product.

### DesignAwards

The `DesignAwards` element contains design awards of the product.

DesignAward (0 or more occurrences, `xs:string`): Luminaire design award, e.g., "Red Dot Award".

### Labels

The `Labels` element contains labels of the product.

`Label` (0 to 14 occurrences, `xs:string`): Label of the product. Must be one of the predefined enumeration values: 

- CE
- GS
- ENEC
- CCC
- VDE
- EAC
- D
- M
- MM
- F
- FF
- UL
- Handwarm
- IFS Food

### Applications

The `Applications` element contains fields of application for the luminaire.

`Application` (0 or more occurrences, `xs:string`): Field of application for the luminaire. Must be one of the predefined enumeration values.


## Operations and Maintenance 

This XML schema describes the `OperationsAndMaintenance` element, which provides information about the Operations and Maintenance attributes of a luminaire.

### UsefulLifeTimes
Useful lifetimes of the luminaire with declaration of Lx, By and ambient temperature. E.g. L80B50 50000h 25°C

UsefulLife (0 or more occurrences): Single useful lifetime of the luminaire with declaration of Lx, By and ambient temperature. E.g. L80B50 50000h 25°C

### Structure

<img src="/img/docs/structure/operationsandmaint.webp" alt="Operatoins and Maintenance Attributes" width="536" />

## Custom Properties

<img src="/img/docs/structure/customproperties.webp" alt="Custom Properties Attributes" width="536" />

