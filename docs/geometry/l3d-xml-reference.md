---
title: L3D XML Reference
sidebar_label: XML Reference
---

## XML-Elements

### `Luminaire`

The Root-Element in the xml file. Must appear exactly once.

#### Luminaire child elements

- [`Header`](#header) (mandatory)
- [`GeometryDefinitions`](#geometrydefinitions) (mandatory)
- [`Structure`](#structure) (mandatory)

### `Header`

Contains some meta-information about the model and how it has been created.

#### Header child elements

- `CreatedWithApplication` (mandatory)  
  The tool/software which was used to create this xml file. Must appear once.
- `CreationTimeCode` (mandatory)
  The date of the creation in format YYYY-MM-DDThh:mm:ss. Must appear once.
- `Name`
  If there is a distinct name for this model, this can be mentioned here. May appear once.
- `Description`
  Some text as model description. May appear once.
- `FormatVersion`
  The format version consists of the following attributes:
  - major (required) = Major version >= 0
  - minor (required) = Minor version >= 0
  - pre-release (optional) = Prerelease version >= 0

### `GeometryDefinitions`

References all model files which are used in this luminaire geometry.

#### GeometryDefinitions child elements

- [`GeometryFileDefinition`](#geometryfiledefinition) (mandatory)
  Must appear at least once.

### `GeometryFileDefinition`

References a model file in the models directory.

#### GeometryFileDefinition attributes

- `id` (mandatory)
  A unique id, which must start with a letter and contain only letters and digits.
- `filename` (mandatory)  
  The name of a file in the models directory.
- `unit` (mandatory)  
  The units used in the referenced model file.

### `Structure`

Contains the fixed geometries of the luminaire.

#### Structure child elements

- [`Geometry`](#geometry) (mandatory)  
  Must appear at least once.

### `Geometry`

A single geometry part of the luminaire.

#### Geometry attributes

- `partName` (mandatory)  
  A user defined name of the part. Must be unique throughout all [`Geometry`](#geometry), [`Joint`](#joint) and [`LightEmittingObject`](#lightemittingobject) elements and must start with a letter.

#### Geometry child elements

- [`Position`](#position) (mandatory)  
  Position of the geometry relative to the parent joint or the insert point of the luminaire. Must appear exactly once.
- [`Rotation`](#rotation) (mandatory)  
  Rotation of the geometry around the local axes. Must appear axactly once.
- [`GeometryReference`](#geometryreference) (mandatory)  
  A reference to the above defined GeometryFileDefinition, which defines the geometry ot this part. Must appear exactly once.
- `Joints`  
  Contains all joint in the current geometry part. May appear exactly once. Each joint is represented by a child [`Joint`](#joint) element.
- `LightEmittingObjects`  
  Contains all light emitting object of the current geometry part. Has to appear exactly once. Each light emitting object is represented by a [`LightEmittingObject`](#lightemittingobject) element.
- `LightEmittingFaceAssignments`
  Contains assignments to triangles of the referenced .obj-File which should be displayed as light emitting surfaces. The assignments can be done via the [`Assignment`](#assignment) or the [`RangeAssignment`](#rangeassignment) elements.

### `GeometryReference`

References a geometry from the [`GeometryFileDefinitions`](#geometryfiledefinition) section.

#### GeometryReference attributes

- `geometryId` (mandatory)  
- The `id` defined in one of the [`GeometryFileDefinition`](#geometryfiledefinition) elements.

### `Joint`

Describes a joint between two different geometry parts.

#### Joint attributes

- `partName` (mandatory)  
  A user defined name of the part. Must be unique throughout all [`Geometry`](#geometry), [`Joint`](#joint) and [`LightEmittingObject`](#lightemittingobject) elements and must start with a letter.

#### Joint child elements

- [`Position`](#position) (mandatory)  
  Position of the joint relative to the parent geometry part. Must appear exctly once.
- [`Rotation`](#rotation) (mandatory)  
  Rotation around the local part axes. Must appear exactly once.
- [`XAxis`](#xaxis-yaxis-zaxis)  
  Describes the degrees of freedom on the x axis if set.
- [`YAxis`](#xaxis-yaxis-zaxis)  
  Describes the degrees of freedom on the y axis if set.
- [`ZAxis`](#xaxis-yaxis-zaxis)  
  Describes the degrees of freedom on the z axis if set.
- [`DefaultRotation`](#defaultrotation)  
  Values to pre set the joint angle in the target software.
- `Geometries` (mandatory)  
  Contains all child geometries which are attached through this joint. Must contain at least one [`Geometry`](#geometry) element.

### `LightEmittingObject`

Describes a light emitting object which can be referenced in the [GLDF](https://github.com/globallightingdata/gldf/)-File.

#### LightEmittingObject attributes

- `partName` (mandatory)  
  A user defined name of the part. Must be unique throughout all [`Geometry`](#geometry), [`Joint`](#joint) and [`LightEmittingObject`](#lightemittingobject) elements and must start with a letter. This name can be referenced in the [GLDF](https://github.com/globallightingdata/gldf/)-File.

#### LightEmittingObject child elements

- `Position` (mandatory)  
  Position of the light emitting object relative to the parent geometry part. Must appear exactly once.
- `Rotation` (mandatory)  
  Rotation of the light emitting object around the local axes.
- One of the following shaping elements:
  - [`Rectangle`](#rectangle)
  - [`Circle`](#circle)

### `XAxis`, `YAxis`, `ZAxis`

Enables and describes the degrees of freedom for the corresponding axis. The resulting rotation axis is affected by the [`Position`](#position) and [`Rotation`](#rotation) properties of the current part.

#### Axis attributes

- `Min` (mandatory)  
The minimal angle for the joint in degrees.
- `Max` (mandatory)  
  The maximal angle for the joint in degrees.
- `Step` (mandatory)  
The angle step (in degrees) in which the joint can be articulated.

### `DefaultRotation`

Default values to pre set the joint angle values in the target software.

#### DefaultRotation attributes

- `x` (mandatory)
  Default value for the angle of the x axis in degrees.
- `y` (mandatory)  
  Default value for the angle of the y axis in degrees.
- `z` (mandatory)  
  Default value for the angle of the z axis in degrees.

### `Position`

Position of the current part relative to the parent part or the insert point in case of a fixed root part.

#### Position attributes

- `x` (mandatory)  
  x translation in meters.
- `y` (mandatory)  
  y translation in meters.
- `z` (mandatory)  
  z translation in meters.

### `Rotation`

Rotation of the current part around the local axes. The rotation order is fixed to ZXY.

#### Rotation attributes

- `x` (mandatory)  
  Rotation around the local x axis in degrees.
- `y` (mandatory)  
  Rotation around the local y axis in degrees.
- `z` (mandatory)  
  Rotation around the local z axis in degrees.

### `Rectangle`

Describes a rectangular shape.

#### Rectangle attributes

- `sizeX` (mandatory)  
  Size of the rectangle in x direction in meters.
- `sizeY` (mandatory)  
  Size of the rectangle in y direction in meters.

### `Circle`

Describes a circular shape.

#### Circle attributes

- `diameter` (mandatory)  
  The diameter of the circle in meters.

### `Assignment`

Assigns a surface/triangle in the model to act as a light emitting surface.

#### Assignment attributes

- `faceIndex` (mandatory)  
  The zero based index of the surface/triangle in the model.
- `lightEmittingPartName` (mandatory)  
  The `partName` of the `LightEmittingObject` the surface/triangle should be related to.
- `partIndex`  
  If the model contains more than one part, this attribute can be used to indicate which part the surface/triangle index belongs to.

### `RangeAssignment`

Assigns multiple surfaces/triangles in the model to act as light emitting surfaces. The indices of the surfaces/triangles must be successive in order to use `RangeAssignment`.

#### RangeAssignment attributes

- `faceIndexBegin` (mandatory)  
The starting index which should be assigned. Must be lower than `faceIndexEnd`.
- `faceIndexEnd` (mandatory)
The last index which should be assigned. Must be greater than `faceIndexBegin`.
- `lightEmittingPartName` (mandatory)  
The `partName` of the `LightEmittingObject` the surface/triangle should be related to.
- `partIndex`  
If the model contains more than one part, this attribute can be used to indicate which part the surface/triangle index belongs to.
