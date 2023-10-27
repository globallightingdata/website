---
title: Sensors
sidebar_label: Sensors
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Sensor Description

Sensors in GLDF are understood to be motion detectors for light control, optimally with a measured detection range. Please visit the page of [**sensNorm**](https://www.sensnorm.com) for further information about measurement procedures and accurate planning data.

`Sensors` is the second child-element of `GeneralDefinitions` - the part in the XML where **global and reusable** elements are defined (imagine them as the building blocks of each luminaire). The definition of sensors is **optional**.

`Sensors` are defined directly in GLDF. A single `Sensor` element references a [**File**](/docs/structure/files.md) element which describes the location of the file which describes the detection range of the sensor. Furthermore, the `Sensor` element **can** contain various additional [**metadata**](#sensor-metadata) to complement the sensor file.

## Location in XSD

<img src="/img/docs/structure/sensors-hierarchy.webp" alt="Sensors in XSD" width="550" />

## XSD description

<img src="/img/docs/structure/sensors-xsd.webp" alt="Sensors in XSD" width="760" />

## XML example

```xml {8-9,12-14,18-20} showLineNumbers
<Root xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:noNamespaceSchemaLocation="https://gldf.io/xsd/gldf/1.0.0-rc.3/gldf.xsd">
  <Header>
    <!-- Skipped for clarity -->
  </Header>
  <GeneralDefinitions>
    <Files>
        <File id="sensorFile" contentType="sensor/sensldt" 
              type="localFileName">sensor.ldt</File>
    </Files>
    <Sensors>
        <Sensor id="sensor1">
            <SensorFileReference fileId="sensorFile" />
        </Sensor>
    </Sensors>
    <Emitters>
        <Emitter id="emitter1">
            <SensorEmitter>
                <SensorReference sensorId="sensor1" />
            </SensorEmitter>
        </Emitter>
    </Emitters>
  </GeneralDefinitions>
  <ProductDefinitions>
    <!-- Skipped for clarity -->
  </ProductDefinitions>
</Root>
```

Once declared, all sensors can be referenced in subsequent XML elements via their `id` attribute **one or several** times.

## Sensor MetaData

Various **additional metadata** can be optionally specified within a `Sensor` element to **complement the sensor file** content. While this information can also be found in the measurement file, storing it here allows for **easier access**. It's important to note that this information **must be consistent with the file**.

- **DetectorCharacteristic**  
  Sensing device detection area
  - `Round`
  - `Square`
  - `Other`
- **DetectionMethod**  
  Sensing device detection method technology
  - `Passive Infrared`
  - `High Frequency`
  - `Microwave`
  - `Ultrasonic`
  - `Camera`
  - `Other`
- **DetectorType**  
  Sensing device detector type
  - `Motion Detector`
  - `Presence Detector`
  - `Daylight Detector`
  - `Other`
