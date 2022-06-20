---
title: Files
sidebar_label: Files
---

## Description

`Files` is the first child element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). Probably most GLDF will contain one or more files.

A single `File` element contains various **metadata** about a concrete file. What **content** it has, where it can be found and even in which language it is available, if multiple languages shopuld be provided.

## Location in XSD

![Files in XSD](/img/docs/structure/files-hierarchy.webp)

## XSD description

![Files in XSD](/img/docs/structure/files-xsd.webp)

## XML example

```xml {5-7}
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="productImage1" contentType="image/jpg" type="localFileName">Luminaire.jpg</File>
    </Files>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

The `File` Element above describes a file with all mandatory attributes. It can...

- be **referenced** in subsquent elements via *productImage1* (`id` attribute)
- is an image of the **type** *JPG* (`contentType` attribute)
- is stored **locally**. **Inside** the GLDF container (`type` attribute, see below for details) and with the **filename** `Luminaire.jpg`

## Referencing a file

Once declared, all files can be referenced in subsequent XML elements via their `id` attribute **one or several** times.

```xml showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/
  <GeneralDefinitions>
    <Files>
      // highlight-next-line
      <File id="lightSourceImage" contentType="image/jpg" type="localFileName">LED_10W.jpg</File>
    </Files>
    <LightSources>
      <ChangeableLightSource id="lightSource1">
        <LightSourceImages>
          // highlight-next-line
          <Image fileId="lightSourceImage" imageType="Product Picture"/>
        </LightSourceImages>
      </ChangeableLightSource>
      <ChangeableLightSource id="lightSource2">
        <LightSourceImages>
          // highlight-next-line
          <Image fileId="lightSourceImage" imageType="Product Picture"/>
        </LightSourceImages>
      </ChangeableLightSource>
    </LightSources>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

This `File` with `id` *lightSourceImage* (line 6) is referenced multiple times inside subsequent `ChangeableLightSource` elements and defines their *Product Picture* (line 11 and 16)

## Available content types

Currently, GLDF supports the following file content types. It is specified by the `Files`'s attribute `contentType`

- **Photometry types**
  - Eulumdat
  - IES
  - IES XML (possible but not recommended. Very limited support only)
- **Image types**
  - JPG
  - PNG
  - SVG
- **Symbol image types**
  - SVG
  - DXF
- **3D Geometry model types**
  - L3D (recommended)
  - M3D (DIAL specific only)
  - R3D (Relux specific only)
- **Document types**
  - PDF
- **Spectrum types**
  - TXT
- **Sensor types**
  - Sens LDT
  - Sens XML

There is also the `other` file type you can use for your `Files`. It can be particularly useful to provide **further data types** within [`CustomProperties`](/docs/structure/descriptive-attributes).

## File location

The **binary content** of a `File` element can be provided in two different ways:

- Either **"locally"** inside the GLDF container zip archive => `type="localFileName"`
- Or **online** for http retrieval => `type="url"`

Both types has their own advantages and disadvantages

|                  | Local                                                                                                                                                       | Online                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Advantage**    | - File is always/offline available <br />- File can't be deleted accidentally<br />- Faster file loading speed | - Smaller GLDF container size <br />- Reusable across multiple GLDF <br />- Can be updated anytime for already distributed GLDFs |
| **Disadvantage** | - Larger container size <br />- Duplicated across multiple GLDF                                                                                           | - Application using GLDF must be online to retrieve the file <br />- Usually slower loading speed                                |

### type="localFileName"

The example below shows a `File` element with a **reference** to a binary file **within the GLDF** container

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
      // highlight-next-line
      <File id="productImage1" contentType="image/jpg" type="localFileName">Luminaire.jpg</File>
    </Files>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

:::caution
There are **two conventions** you have to remember:

1. The **text content** of the element **must correspond exactly** to the **file name** within the container
2. The actual file must be in a **subfolder** that **corresponds** to the **first part** of the `contentType`. In this case, *image*

Both conventions are **case-sensitive**
:::

So in this example *Luminaire.jpg* is expected to be in a subfolder *image* like this:

![Files in XSD](/img/docs/structure/files-folderexample.webp)

Further examples of the 2. convention:

| contentType    | Folder inside GLDF |
|----------------|--------------------|
| image/png      | image              |
| ldc/eulum      | ldc                |
| geo/l3d        | geo                |
| document/pdf   | document           |
| symbol/dxf     | symbol             |
| sensor/sensxml | sensor             |
| spectrum/text  | spectrum           |
| other          | other              |

### type="url"

The other way to reference a file is to store it online and specify the URI in the GLDF

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
      // highlight-next-line
      <File id="lightSourceImage" contentType="image/jpg" type="url">https://example.org/luminaire.jpg</File>
    </Files>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

:::important
Make sure that the file **can be accessed** and that the address **does not change** after publishing your GLDF file.
:::

## Language dependent files

With the optional attribute `language` it is possible to specify in which language a file is available

```xml {6,7}
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="gldf.xsd">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="image_en" contentType="image/jpg" type="localFileName" language="en">Luminaire_en.jpg</File>
      <File id="image_de" contentType="image/jpg" type="localFileName" language="de">Luminaire_de.jpg</File>
    </Files>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

For a list of possible two-letter language entries see [Wikipedia list of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
