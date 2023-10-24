---
title: Global Product Data
sidebar_label: Global Product Data
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## ProductDefinitions

After the [`Header`](/docs/structure/header.md) (1) and [`GeneralDefinitions`](/docs/structure/files.md) (2) elements have beed defined, the **actual product description** in form of a third `Root` child element named `ProductDefinitions` (3) element can follow now:

<img src="/img/docs/structure/product-xsd.webp" alt="ProductDefinitions in XSD" width="540" />

It consists of **two child elements**

- Exactly 1 `ProductMetaData` XML element, discussed in this chapter
- 1-n [`Variant`](/docs/structure/variant.md) XML elements, discussed in the next chapter

For a valid luminaire description, one `ProductMetaData` and at least one [`Variant`](/docs/structure/variant.md) element are **mandatory**. But what is the difference?

### `ProductMetaData` ⇄ `Variants`

Both elements holds **marketing information** about the luminaire on the one hand. Like product name and number, description texts in multiple languages, product images or the categorisation of the lumianire in product series. As well as a lot of further [descriptive attributes](/docs/structure/descriptive-attributes.md) like housing colors, [ik rating](https://en.wikipedia.org/wiki/EN_62262) or the [ATEX](https://en.wikipedia.org/wiki/ATEX_directive) directive where applicable.

And **technical information** such as the mounting point of the luminaire, maintenance recommendations or the most important: a reference to the previously defined [`Geometries`](/docs/geometry/introduction.md) and [`Emitters`](/docs/structure/emitters.md).

The differences between `ProductMetaData` and `Variant` are as follows

- A GLDF can only contain one `ProductMetaData` but multiple [`Variant`](/docs/structure/variant.md)
- The child elements of `ProductMetaData` define **global** properties of the luminaire
- The child elements of [`Variant`](/docs/structure/variant.md) define **specific** properties of the **variants** of a luminaire
- Some properties are childs of only one of the elements. The maintenance recommendations can only be found on `ProductMetaData` for example. The GTIN on the other hand has to be defined for each [`Variant`](/docs/structure/variant.md)
- For child elements with the **same name** on both, `ProductMetaData` and `Variant`, applies: if both are defined, `Variant` overwrites `ProductMetaData`. **This is important to understand** and therefore explained in detail [below](/docs/structure/product#variant-overwrites-productmetadata).

:::tip
Most **marketing information** are **optional**. However, the more are specified, the better users can work with the GLDF.
:::

### `ProductMetaData` XSD description

<img src="/img/docs/structure/product-xsd-metadata.webp" alt="ProductDefinitions in XSD" width="400" />

### XML example

`ProductMetaData` is a relatively straightforward element and in its simplest form only requires three mandatory fields: An **unique product id**, the **product number** and the **product name** in one language (preferably English):

```xml {11-19} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!--Skipped for clarity-->
  </Header>
  <GeneralDefinitions>
    <!--Skipped for clarity-->
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>
      <ProductNumber>
        <Locale language="en">1234-AB</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">My luminaire</Locale>
      </Name>
    </ProductMetaData>
    <Variants>
      <!--Skipped for clarity-->
    </Variants>
  </ProductDefinitions>
</Root>
```

:::tip Unique Product Id
The element `UniqueProductId` is particularly important, as it makes it possible to recognise the same (updated) product across multiple GLDF files. You could use the product's article number, GTIN or EAN for it, but we **recommend UUIDs (GUIDs)** related only for this use case, since all other values could change over time.

**See also [Unique IDs](/getting-started#unique-ids)**
:::

---

A complete example, on the other hand, could look as follows. In general, it is recommended to provide as much information about the product as possible:

```xml {11-59} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!--Skipped for clarity-->
  </Header>
  <GeneralDefinitions>
    <!--Skipped for clarity-->
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>
      <ProductNumber>
        <Locale language="en">1234-AB</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">My luminaire</Locale>
        <Locale language="de">Meine Leuchte</Locale>
      </Name>
      <Description>
        <Locale language="en">Wall-mounted, dimmable luminaire with rotatable joints</Locale>
        <Locale language="de">Dimmbare Leuchte mit drehbaren Gelenken in Wandmontage</Locale>
      </Description>
      <TenderText>
        <Locale language="en">Our bestseller, winner of the Red Dot Award</Locale>
        <Locale language="de">Unser Verkaufsschlager, Gewinner des Red Dot Awards</Locale>
      </TenderText>
      <ProductSeries>
        <ProductSerie id="familyXY">
          <Name>
            <Locale language="en">Product family XY</Locale>
            <Locale language="de">Produktfamilie XY</Locale>
          </Name>
        </ProductSerie>
        <ProductSerie id="familyYZ">
          <Name>
            <Locale language="en">Our series YZ</Locale>
            <Locale language="de">Unsere Serie YZ</Locale>
          </Name>
        </ProductSerie>
      </ProductSeries>
      <Pictures>
        <Image fileId="pictureFile1" imageType="Product Picture" />
        <Image fileId="pictureFile2" imageType="Application Picture" />
        <Image fileId="pictureFile3" imageType="Technical Sketch" />
        <Image fileId="pictureFile4" imageType="Other" />
      </Pictures>
      <LuminaireMaintenance>
        <Cie97LuminaireType>Dust Proof IP5X</Cie97LuminaireType>
        <CieLuminaireMaintenanceFactors>
          <LuminaireMaintenanceFactor years="1" roomCondition="Normal">0.9</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="2" roomCondition="Normal">0.8</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="3" roomCondition="Normal">0.6</LuminaireMaintenanceFactor>
        </CieLuminaireMaintenanceFactors>
      </LuminaireMaintenance>
      <DescriptiveAttributes>
        <!-- see documentation for DescriptiveAttributes-->
      </DescriptiveAttributes>
    </ProductMetaData>
    <Variants>
      <!--Skipped for clarity-->
    </Variants>
  </ProductDefinitions>
</Root>
```

An introduction to `DescriptiveAttributes` can be found [here](/docs/structure/descriptive-attributes.md).

### Luminaire maintenance

There are several options for specifying the **maintenance properties** of a luminaire:

- `Cie97LuminaireType` acording to the **CIE 97** standard
- `CieLuminaireMaintenanceFactors` acording to CIE Luminaire Maintenance Factor standard (**LMF**)
- `IesLuminaireLightLossFactors` according to IES Light Loss Factor standard (**LLF**)
- `JiegMaintenanceFactors` according to the Japanese maintenance factor method **JIEG-001**

It is possible to define **one or several** types.

#### `Cie97LuminaireType`

The luminaire maintenance according to **CIE 97** is indicated by **specifying a luminaire type**. For each type a **cleaning schedule/interval presets** is specified in this standard. Possible types are:

- `Bare Batten`
- `Open Top Housing (Natural Ventilated)`
- `Closed Top Housing (Unventilated)`
- `Enclosed IP2X`
- `Dust Proof IP5X`
- `Enclosed Indirect (Uplight)`
- `Airhandling, Forced Ventilated`

```xml {20} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!--Skipped for clarity-->
  </Header>
  <GeneralDefinitions>
    <!--Skipped for clarity-->
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>
      <ProductNumber>
        <Locale language="en">42</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">My luminaire</Locale>
      </Name>
      <LuminaireMaintenance>
        <Cie97LuminaireType>Dust Proof IP5X</Cie97LuminaireType>
      </LuminaireMaintenance>
    </ProductMetaData>
    <Variants>
      <!--Skipped for clarity-->
    </Variants>
  </ProductDefinitions>
</Root>
```

#### `CieLuminaireMaintenanceFactors`

Luminaire maintenance acording to **CIE LMF** allows the specification of a **maintenance factor** (lumen **degradation** due to pollution) for different room **conditions and years**, that have past

```xml {20-29} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!--Skipped for clarity-->
  </Header>
  <GeneralDefinitions>
    <!--Skipped for clarity-->
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>
      <ProductNumber>
        <Locale language="en">42</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">My luminaire</Locale>
      </Name>
      <LuminaireMaintenance>
        <CieLuminaireMaintenanceFactors>
          <LuminaireMaintenanceFactor years="1" roomCondition="Very Clean">0.99</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="1" roomCondition="Clean">0.95</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="1" roomCondition="Normal">0.91</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="1" roomCondition="Dirty">0.82</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="2" roomCondition="Very Clean">0.96</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="2" roomCondition="Clean">0.92</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="2" roomCondition="Normal">0.85</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="2" roomCondition="Dirty">0.74</LuminaireMaintenanceFactor>
        </CieLuminaireMaintenanceFactors>
      </LuminaireMaintenance>
    </ProductMetaData>
    <Variants>
      <!--Skipped for clarity-->
    </Variants>
  </ProductDefinitions>
</Root>
```

#### `IesLuminaireLightLossFactors`

Luminaire maintenance acording to **IES LLF** is similar to CIE LMF. Its again the **ratio of illuminance** for a given area to the value that would occur if lamps operated at their **initial rated lumens**. In comparison, the element is only named differently and now called `LuminaireDirtDepreciation`. As well as the description of the room characteristic is minimally different: The specification `Normal` in the CIE standard is now called `Moderate`. And an additional room condition `Very Dirty` is possible.

```xml {20-31} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!--Skipped for clarity-->
  </Header>
  <GeneralDefinitions>
    <!--Skipped for clarity-->
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>
      <ProductNumber>
        <Locale language="en">42</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">My luminaire</Locale>
      </Name>
      <LuminaireMaintenance>
        <IesLuminaireLightLossFactors>
          <LuminaireDirtDepreciation years="1" roomCondition="Very Clean">0.99</LuminaireDirtDepreciation>
          <LuminaireDirtDepreciation years="1" roomCondition="Clean">0.98</LuminaireDirtDepreciation>
          <LuminaireDirtDepreciation years="1" roomCondition="Moderate">0.95</LuminaireDirtDepreciation>
          <LuminaireDirtDepreciation years="1" roomCondition="Dirty">0.91</LuminaireDirtDepreciation>
          <LuminaireDirtDepreciation years="1" roomCondition="Very Dirty">0.85</LuminaireDirtDepreciation>
          <LuminaireDirtDepreciation years="2" roomCondition="Very Clean">0.96</LuminaireDirtDepreciation>
          <LuminaireDirtDepreciation years="2" roomCondition="Clean">0.94</LuminaireDirtDepreciation>
          <LuminaireDirtDepreciation years="2" roomCondition="Moderate">0.91</LuminaireDirtDepreciation>
          <LuminaireDirtDepreciation years="2" roomCondition="Dirty">0.82</LuminaireDirtDepreciation>
          <LuminaireDirtDepreciation years="2" roomCondition="Very Dirty">0.77</LuminaireDirtDepreciation>
        </IesLuminaireLightLossFactors>
      </LuminaireMaintenance>
    </ProductMetaData>
    <Variants>
      <!--Skipped for clarity-->
    </Variants>
  </ProductDefinitions>
</Root>
```

#### `JiegMaintenanceFactors`

The Japanese standard **Jieg-001** does not differ greatly from CIE and IES. Once again, maintenance factors can be specified depending on the room condition and duration in years. The room conditions are limited to three types, with the possible values `Clean`, `Normal` and `Dirty`

```xml {20-27} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!--Skipped for clarity-->
  </Header>
  <GeneralDefinitions>
    <!--Skipped for clarity-->
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>
      <ProductNumber>
        <Locale language="en">42</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">My luminaire</Locale>
      </Name>
      <LuminaireMaintenance>
        <JiegMaintenanceFactors>
          <LuminaireMaintenanceFactor years="1" roomCondition="Clean">0.99</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="1" roomCondition="Normal">0.95</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="1" roomCondition="Dirty">0.85</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="2" roomCondition="Clean">0.96</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="2" roomCondition="Normal">0.90</LuminaireMaintenanceFactor>
          <LuminaireMaintenanceFactor years="2" roomCondition="Dirty">0.77</LuminaireMaintenanceFactor>
        </JiegMaintenanceFactors>
      </LuminaireMaintenance>
    </ProductMetaData>
    <Variants>
      <!--Skipped for clarity-->
    </Variants>
  </ProductDefinitions>
</Root>
```

### `Variant` overwrites `ProductMetaData`

Some of the child properties can be defined at the level of `ProductMetaData` as well as at `Variant`. This affects the following elements:

- ProductNumber
- Name
- Description
- TenderText
- ProductSeries
- Pictures
- [DescriptiveAttributes](/docs/structure/descriptive-attributes.md)

The **recommended** procedure is to first define all relevant properties on `ProductMetaData`. And **if these change** for individual variants of the luminaire, only then **overwrite** them. An example:

```xml {13-21,25-27,30-38} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!--Skipped for clarity-->
  </Header>
  <GeneralDefinitions>
    <!--Skipped for clarity-->
  </GeneralDefinitions>
  <ProductDefinitions>
    <ProductMetaData>
      <UniqueProductId>e1da63af-6e41-45ff-927b-d66f91d6b447</UniqueProductId>
      <ProductNumber>
        <Locale language="en">42</Locale>
      </ProductNumber>
      <Name>
        <Locale language="en">My luminaire</Locale>
      </Name>
      <Description>
        <Locale language="en">Our bestseller</Locale>
      </Description>
    </ProductMetaData>
    <Variants>
      <Variant id="simple-variant">
        <Name>
          <Locale language="en">My luminaire variant A</Locale>
        </Name>
      </Variant>
      <Variant id="rgb-variant">
        <ProductNumber>
          <Locale language="en">42-rgb</Locale>
        </ProductNumber>
        <Name>
          <Locale language="en">My luminaire variant B</Locale>
        </Name>
        <Description>
          <Locale language="en">Our bestseller with rgb module</Locale>
        </Description>
      </Variant>
    </Variants>
  </ProductDefinitions>
</Root>
```

In this example we have a `ProductMetaData` element, which defines the following **global** properties

- Line 12: The `ProductNumber` of this luminaire is **globally** defined as *42*
- Line 15: The `Name` of this luminaire is **globally** defnied as *My luminaire*
- Line 18: The `Description` of this luminaire is **globally** defined as *Our bestseller*

And **two** `Variant` of this lumianire, of which the first with `id` *simple-variant* (Line 22-26) defines the following **variant-specific** properties

- No `ProductNumber` defined: So **nothing overwrites** the globally defined `ProductNumber` *42* in `ProductMetaData`. Which means that this variant of the luminaire is probably still sold under the product number defined above.
- Line 24: The `Name` is **specifically defined** as *My luminaire variant A* for this `Variant` - So it **overwrites** the `Name` *My luminaire* defined in `ProductMetaData`. Which means that this variant of the luminaire can e.g. be recognized in lighting calculation software like DIALux oder RELUX under this new name (and not *My luminaire* defined in `ProductMetaData`)
- No `Description` defined: So **nothing overwrites** the globally defined `Description` *Our bestseller* in `ProductMetaData`.  
  Which means that this variant of the luminaire is e.g. still described with the text defined above in documentation generated by lighting calculation software.

And a second Variant with `id` *rgb-variant* with

- Line 29: The `ProductNumber` is **specifically defined** as *42-rgb* for this `Variant` - So it **overwrites** the `ProductNumber` *42* defined in `ProductMetaData`. Which means that this variant of the luminaire is e.g. sold under a new product number and not the one defined above in `ProductMetaData`.
- Line 32: The `Name` is specifically defined as *My luminaire variant B* for this `Variant` - So it **overwrites** the `Name` *My luminaire* defined in `ProductMetaData`. Which means that this variant of the luminaire can be e.g. recognized in lighting calculation software like DIALux oder RELUX under this new name (and not *My luminaire* defined in `ProductMetaData`). And **distinguished** from the other variant with id *simple-variant*
- Line 34: The `Description` is **specifically defined** as *Our bestseller with rgb module* for this `Variant` - So it **overwrites** the `Description` *Our bestseller* defined in `ProductMetaData`. Which means that this variant of the luminaire has a specific description which usually should state the **differences or special characteristics** of a variant.
