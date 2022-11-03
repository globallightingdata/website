---
title: Emitters
sidebar_label: Emitters
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Emitter Description

`Emitters` is the eighth child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire).

Emitters define the **radiation emitting parts** of the luminaire. Be it in form of **visible light** of lamps or **infrared** EMR in case of motion detection sensors. However, they **define not** the lamps or sensors themselves. Emitters is the XML block, where many of these parts before come together. They are the parts of the luminaire description, where the measured photometry is finally placed. And get combined later in [Variants](/docs/structure/variant.md) with the geometrical definition of the luminaire:

<img src="/img/docs/structure/emitters-context.webp" alt="Emitter" width="450" /><br /><br />

---

### `Emitter` root element

First of all you have to decide which **type of emitter** is required for a your **radiation emitting part**. Each luminaire can contain multiple Emitter with different types. The following three types are available:

- Emitter for a **lamp** that can be **replaced** in the luminaire ➜ choose `ChangeableLightEmitter`  
- Emitter for a **lamp permanently installed** in the luminaire ➜ choose `FixedLightEmitter`
- Emitter for a **sensor** ➜ choose `SensorEmitter`

<img src="/img/docs/structure/emitters-xsd.webp" alt="Equipment in XSD" width="460" />

:::important

One <span class="blue-text">remarkable</span> part of the XSD definition above is the fact, that GLDF accepts **one or more** `ChangeableLightEmitter` for **each** single Emitter. Or one or more `FixedLightEmitter` or `Sensor` vice versa.

This does **not** mean that these emitters are **all active at the same time**. But that they are **interchangeable**. The luminaire can only operate in one of this definitions. And lighting calculation software like DIALux or RELUX will be able to switch between this modes, as users need it.

<details>
<summary>Examples</summary>

*Example #1*: Imagine a luminaire with **emergency mode** on one light source. In GLDF you can describe this with **one emitter** which contains **two** `ChangeableLightEmitter` child elements. One for normal mode and e.g. 500 lumen and another `ChangeableLightEmitter` for the same light output, but with emergency mode and 50 lumen. **Both are not active at the same time** but can operate in one mode or another.

*Example #2*: Imagine a luminaire measured/sold with two different lamps (and therefore probably different lighting, spectrum and electric characteristics). Again, you can describe this use case with **multiple [Equipments](/docs/structure/equipments.md)** referenced inside **one Emitter**. This way they are meant to be interchangeable, rather than both active at same time on multiple light outputs.
</details>
:::

Let assume we would like to define a luminaire with a changeable light output. So for the moment a first `Emitter` XML example could look as follows:

```xml {6-12} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Header/>
  <GeneralDefinitions>
    <!-- Content skipped for clarity -->
    <Emitters>
      <Emitter id="emitter1">
        <ChangeableLightEmitter>
          <!-- Changeable Emitter content skipped for now -->
        </ChangeableLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

---

### `ChangeableLightEmitter`

An Emitter with child element(s) of type `ChangeableLightEmitter` is intended for light outputs with **changeable lamps**, as the name already says. Another functionality is to map multiple **emergency modes** or **different control gears** for one light output. All this variability can be achieved with this type. Choose the `ChangeableLightEmitter` as well, if you have defined [Equipments](/docs/structure/equipments.md) previously (a combination of [ChangeableLightSource](/docs/structure/light-sources.md) with optional [ControlGear](/docs/structure/control-gears.md)). And you would like to reference them now.

#### XSD description

<img src="/img/docs/structure/emitters-xsd-changeable.webp" alt="Emitter" width="670" />

The only **required** element of a `ChangeableLightEmitter` is a `PhotometryReference` to define the **light distribution curve** of this light emitter. Let's expand the example to it in line 16:

```xml {6,9-10,14-17} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="eulumdatNarrow" contentType="ldc/eulumdat" type="localFileName">50W_Narrow.ldt</File>
    </Files>
    <Photometries>
      <Photometry id="photometryNarrow">
        <PhotometryFileReference fileId="eulumdatNarrow"/>
      </Photometry>
    </Photometries>
    <Emitters>
      <Emitter id="emitterNarrow">
        <ChangeableLightEmitter>
          <PhotometryReference photometryId="photometryNarrow" />
        </ChangeableLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

At this point the example is already complete. The specification of a [light source](/docs/structure/light-sources.md) and an [equipment](/docs/structure/equipments.md) are both optional. To create a valid `ChangeableLightEmitter`, it is sufficient to specify its **light distribution curve** only. In the form of a reference to an eulumdat or IES file to photometrically describe its light output characteristics.

But let's go one step further and describe a `ChangeableLightEmitter` with all available data:

```xml {6,9-10,14,19,24-27,31-40} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="eulumdatNarrow" contentType="ldc/eulumdat" type="localFileName">MyNarrowLvk.ldt</File>
    </Files>
    <Photometries>
      <Photometry id="photometryNarrow">
        <PhotometryFileReference fileId="eulumdatNarrow"/>
      </Photometry>
    </Photometries>
    <LightSources>
      <ChangeableLightSource id="metalHalideLamp_1500lumen">
        <!-- Content skipped for clarity -->
      </ChangeableLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="electronicControlGear">
        <!-- Content skipped for clarity -->
      </ControlGear>
    </ControlGears>
    <Equipments>
      <Equipment id="equipmentWithBallast_210w">
        <LightSourceReference changeableLightSourceId="metalHalideLamp_1500lumen"/>
        <ControlGearReference controlGearId="electronicControlGear"/>
        <RatedInputPower>210</RatedInputPower>
      </Equipment>
    </Equipments>
    <Emitters>
      <Emitter id="emitter1_Narrow">
        <ChangeableLightEmitter emergencyBehaviour="Combined">
          <Name>
            <Locale language="en">Spot narrow, round</Locale>
            <Locale language="de">Spot engstrahlend, rund</Locale>
          </Name>
          <PhotometryReference photometryId="photometryNarrow"/>
          <EquipmentReference equipmentId="equipmentWithBallast_210w" />          
        </ChangeableLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

We've defined

- Line 6: A [`File`](/docs/structure/files.md) reference to an [Eulumdat photometry file](https://de.wikipedia.org/wiki/EULUMDAT) named *MyNarrowLvk.ldt* (located inside the [GLDF Container](/docs/container/about-container.md))
- Line 9: A [`Photometry`](/docs/structure/photometries.md) element referencing this Eulumdat file
- Line 14: A [`ChangeableLightSource`](/docs/structure/light-sources.md) - let's assume this luminaire is sold with a metal halide lamp 200W
- Line 19: A [`ControlGear`](/docs/structure/control-gears.md). Let's further assume this metal halide lamp requires a ballast
- Line 24: We combine the metal halide lamp with the ballast to an [`Equipment`](/docs/structure/equipments.md) and say, it requires 210W in total
- Line 31: The final part inside the general definition block: We reference the [`Equipment`](/docs/structure/equipments.md) above together with the [`Photometry`](/docs/structure/photometries.md) into a `ChangeableLightEmitter`. The part of the luminaire description, where the measured photometry is finally placed
- Line 32: An `emergencyBehaviour` attribute to define, how **this specific** light output of the luminaire behaves in emergency lighting scenarios. Possible values are 
  - `None` ➜ This Emitter is intended for normal lighting only (which is also the default, if the attribute is missing)
  - `EmergencyOnly` ➜ This Emitter is active during emergency lighting and inactive during normal lighting
  - `Combined` ➜ This Emitter is intended for both, normal and emergency lighting scenarios
- Line 33: A `Name` element, with `Locale`s in English and German, to define, that this Emitter is named "Spot narrow, round". So users can work with this product in their preferred language and identify parts through a meaningful name

Later on in one last step inside the [`Variant`](/docs/structure/variant.md) element, we can bring this Emitter and a [`Geometry`](/docs/structure/geometries.md) element together into a final product definition.

---

### `FixedLightEmitter`

The difference between a `FixedLightEmitter` and a `ChangeableLightEmitter` is already in the name: It is intended for [fixed light sources](/docs/structure/light-sources.md). Unlike classical lamps with sockets, a [`FixedLightSource`](/docs/structure/light-sources.md) is **not intended to be replaced**. Soldered LED modules are the usual use case. Therefore, the data model for a `FixedLightEmitter` is similar, but not the same.

<img src="/img/docs/structure/emitters-xsd-fixed.webp" alt="FixedLightEmitter" width="620" />

The main differences are:

- There is no [`Equipment`](/docs/structure/equipments.md) reference anymore, since equipments represent a changeable construct of a lighting part in a luminaire. And therefore there is no possibility to reference a `ChangeableLightSource` anymore
- Instead you have to define a [`FixedLightSource`](/docs/structure/light-sources.md) first. And reference it inside the `FixedLightEmitter` through a `LightSourceReference` element and the `fixedLightSourceId` attribute:

<img src="/img/docs/structure/emitters-xsd-fixed-reference.webp" alt="FixedLightEmitter FixedLightSource reference" width="870" />

- Since the usual way of defining a ballast via [`Equipment`](/docs/structure/equipments.md) is no longer possible, it can now also be referenced directly at the `FixedLightEmitter` ➜ see `ControlGearReference` element
- The luminous flux of fixed lamps is logically no longer variable and must therefore also be specified directly on the `FixedLightEmitter` element ➜ see `RatedLuminousFlux` and `RatedLuminousFluxRBG` elements
- This also applies to any impact of the ballast on the luminous flux ➜ see `EmergencyBallastLumenFactor` and `EmergencyRatedLuminousFlux`  elements

---

#### Mandatory data example

Now let's define some `FixedLightEmitter`. Again, the simplest one first, with only mandatory data:

```xml {6,9-10,14,24-28} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="ldcFile" contentType="ldc/eulumdat" type="localFileName">MyNarrowLvk.ldt</File>
    </Files>
    <Photometries>
      <Photometry id="photometryNarrow">
        <PhotometryFileReference fileId="ldcFile"/>
      </Photometry>
    </Photometries>
    <LightSources>
      <FixedLightSource id="ledModule_RGB">
        <Name>
          <Locale language="en">RGB dimmable</Locale>
          <Locale language="de">RGB dimmbar</Locale>
        </Name>
        <RatedInputPower>50</RatedInputPower>
      </FixedLightSource>
    </LightSources>
    <Emitters>
      <Emitter id="emitterNarrow">
        <FixedLightEmitter>
          <PhotometryReference photometryId="photometryNarrow"/>
          <LightSourceReference fixedLightSourceId="ledModule_RGB"/>
          <RatedLuminousFlux>450</RatedLuminousFlux>
        </FixedLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

Particularly noteworthy are

- Line 6: A [`File`](/docs/structure/files.md) reference to an [Eulumdat photometry file](https://de.wikipedia.org/wiki/EULUMDAT) named *MyNarrowLvk.ldt* (located inside the [GLDF Container](/docs/container/about-container.md))
- Line 9: A [`Photometry`](/docs/structure/photometries.md) element referencing the photometry file through the `fileId` attribute
- Line 14: A [`FixedLightSource`](/docs/structure/light-sources.md) with an input power of 50 W
- Line 24: The final `FixedLightEmitter` with
  - Line 25: A reference to the [`Photometry`](/docs/structure/photometries.md) through the `photometryId` attribute
  - Line 26: A reference to the [`FixedLightSource`](/docs/structure/light-sources.md) through the `fixedLightSourceId` attribute
  - Line 27: A `RatedLuminousFlux` element saying, this combination emits 450 lumen

---

#### Complete data example

A complete `FixedLightEmitter` example adds an additional ballast, which shouldn't be required in most cases. And some data for emergency lighting scenarios, should the luminaire support them:

```xml {23,32,34-35} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="ldcFile" contentType="ldc/eulumdat" type="localFileName">MyNarrowLvk.ldt</File>
    </Files>
    <Photometries>
      <Photometry id="photometryNarrow">
        <PhotometryFileReference fileId="ldcFile"/>
      </Photometry>
    </Photometries>
    <LightSources>
      <FixedLightSource id="ledModule_RGB">
        <Name>
          <Locale language="en">RGB dimmable</Locale>
          <Locale language="de">RGB dimmbar</Locale>
        </Name>
        <RatedInputPower>50</RatedInputPower>
      </FixedLightSource>
    </LightSources>
    <ControlGears>
      <ControlGear id="electronicControlGear">
        <!-- Content skipped for clarity -->
      </ControlGear>
    </ControlGears>
    <Emitters>
      <Emitter id="emitterNarrow">
        <FixedLightEmitter>
          <PhotometryReference photometryId="photometryNarrow"/>
          <LightSourceReference fixedLightSourceId="ledModule_RGB"/>
          <ControlGearReference controlGearId="electronicControlGear" />
          <RatedLuminousFlux>400</RatedLuminousFlux>
          <RatedLuminousFluxRGB>200</RatedLuminousFluxRGB>
          <EmergencyBallastLumenFactor>0.1</EmergencyBallastLumenFactor>
        </FixedLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

Compared to the first example, the following optional elements have been added:

- Line 23/32: A [`ControlGear`](/docs/structure/control-gears.md) and a `ControlGearReference` with the corresponding `controlGearId` attribute
- Line 34: An `RatedLuminousFluxRGB` element to declare the flux of the coloured light only (the RGB module part)
- Line 35: An additional `EmergencyBallastLumenFactor`. Its the ratio of the emergency luminous flux to the total luminous flux specified by `RatedLuminousFlux`. You can replace it with an `EmergencyRatedLuminousFlux` element instead, if an absolute flux value in emergency mode suits more.

Add these additional elements as applicable.

---

### `SensorEmitter`

The `SensorEmitter` is the simplest form of an Emitter. And as the name suggests, it is not intended for light sources, but for the definition of radiation-emitting parts in form of a [`Sensor`](/docs/structure/sensors.md):

<img src="/img/docs/structure/emitters-xsd-sensor.webp" alt="Emitter" width="460" />

The XML example is correspondingly simple:

```xml {6-7,10-12,16-18} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="sensorFile" contentType="sensor/sensldt" 
            type="localFileName">ir_sensor.txt</File>
    </Files>
    <Sensors>
      <Sensor id="sensor1">
        <SensorFileReference fileId="sensorFile"/>
      </Sensor>
    </Sensors>
    <Emitters>
      <Emitter id="sensorEmitter">
        <SensorEmitter>
          <SensorReference sensorId="sensor1"/>
        </SensorEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```

- Line 6: A [`File`](/docs/structure/files.md) reference to a sensor file named *ir_sensor.txt* (located inside the [GLDF Container](/docs/container/about-container.md))
- Line 10: A [`Sensor`](/docs/structure/sensors.md) definition referencing the sensor file through the `fileId` attribute
- Line 16: A `SensorEmitter` definition referencing the sensor through the `sensorId` attribute

---

## Emitter Rotation

One element we haven't covered yet is the `Rotation` on each of the Emitter types. However, this is only needed for **edge cases**. The two most common are

- IES 90° rotation around G0 for **street luminaires**
  <img src="/img/docs/structure/emitters-rotation-street.webp" alt="Emitter street rotation" width="700" />

- **Wall luminaires** not measured in their **position of usage**
  <img src="/img/docs/structure/emitters-rotation-wall.webp" alt="Emitter street rotation" width="700" />

### Rotation XML Example

```xml {16-21} showLineNumbers
<?xml version="1.0" encoding="UTF-8"?>
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Header/>
  <GeneralDefinitions>
    <Files>
      <File id="streetLdcFile" contentType="ldc/ies" type="localFileName">street.ies</File>
    </Files>
    <Photometries>
      <Photometry id="streetPhotometry">
        <PhotometryFileReference fileId="streetLdcFile"/>
      </Photometry>
    </Photometries>
    <Emitters>
      <Emitter id="emitterWithRotation">
        <ChangeableLightEmitter>
          <Rotation>
            <X>0</X>
            <Y>0</Y>
            <Z>0</Z>
            <G0>90</G0>
          </Rotation>
          <PhotometryReference photometryId="streetPhotometry"/>
        </ChangeableLightEmitter>
      </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions/>
</Root>
```
