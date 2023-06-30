---
title: GLDF Editor
sidebar_label: GLDF Editor
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## Introducing

GLDF Editor is a web application to create and modify GLDF files. It runs in browsers and handles files from the local hard drive. GLDF Editor can be used to view existing GLDF files as well as to change them. To create a new GLDF file a template from a set of different complexity levels can be selected on startup. The GLDFs can be enriched with assets like images, photometric files, PDF documents or 3D geometries in the open L3D format. The assets can be uploaded from the local file system or just linked with an URL. It is possible to view and edit almost all the native properties of GLDF. The GLDF Editor is just to be used with one file at once.

[GLDF Editor](https://gldf-editor.gldf.io/)

<img src="static/img/docs/overview/GLDF_Editor_Main.png" alt="GLDF Conzept" width="750" /><br/><br/>

## View an GLDF

Existing GLDF could be uploaded and displayed in the GLDF Editor.
Select the Upload GLDF Section of the Start page. Then drag and drop a GLDF file in the box or use the file dialog with a click in the box.
This works also with more than one file.
Click Open and the GLDF is loading into the GDLF Editor.

<img src="static/img/docs/overview/GLDF_Editor_Upload_GLDF.png" alt="GLDF Conzept" width="750" /><br/><br/>

## Create an GLDF

Creation of new GLDF files works with generic templates. Choose the closed template to your new product and click on it.
The GLDF Editor will be load with the template which then could be edited to the new product.

<img src="static/img/docs/overview/GLDF_Editor_Templates.png" alt="GLDF Conzept" width="750" /><br/><br/>

## User Interface

On the top right of the user interface are the basic GLDF file functions. On the right side is a yellow button for the download of the GLDF. Beside the download a Save button is located. Just after a Save the GLDF is updated and not instantly with a change. The home button brings the user back to the Start page of the GLDF Editor.

<img src="static/img/docs/overview/GLDF_Editor_UI_Top.png" alt="GLDF Conzept" width="750" /><br/><br/>

On the top left of the user interface the controls of the variants are located. All variants of the GLDF are listed on the very left side from top to down. One variant is always active and displayed on the top of the main information field. A click at another variant of the list brings this up to the main field.

<img src="static/img/docs/overview/GLDF_Editor_UI_Variant.png" alt="GLDF Conzept" width="750" /><br/><br/>

The blue Edit Variant button allows a editing of the major variant properties in a new pop up frame. Here the name, text, numbers, geometry, emitters / LEO could be set in different languages. The Edit frame has on top buttons to the 6 groups of Descriptive Attributes of the variant. The close of the Edit frame is at the top.

<img src="static/img/docs/overview/GLDF_Editor_UI_Edit_Variant.png" alt="GLDF Conzept" width="750" /><br/><br/>

The centre of the GLDF Editor is the main information frame. Here all the information of the current variant is shown. This are the pictures, main properties, the 3D view of the geometry, and all photometrics. A small yellow icon on the asset fields (pictures, geometry, photometrics) leads to an detailed view.

<img src="static/img/docs/overview/GLDF_Editor_UI_Info.png" alt="GLDF Conzept" width="750" /><br/><br/>

In the lower left side, the general product level with file assets, general definitions, and the Product Metadata is placed. The Metadata is the level for all variants of the product. The Descriptive Attributes here are also related to the product meta level.

<img src="static/img/docs/overview/GLDF_Editor_UI_Properties.png" alt="GLDF Conzept" width="750" /><br/><br/>

## File assets

GLDF can contain a lot of different file assets. This could be pictures, LCDs, geometry, PDFs, and others. All file assets could be local / uploaded file or URLs / linked files. All file assets need to be classified with an type and needs to get an fileID (started with an letter, e.g. G1 or LDC5).

<img src="static/img/docs/overview/GLDF_Editor_Files_Upload.png" alt="GLDF Conzept" width="750" /><br/><br/>

## Properties

Properties could be entered on variant level or product level. The most are existing on both levels. The product level is valid for all variants. But the same property on a variant superseded the one on product level for this specific property.
Variants and Product have some general properties, like name, number, text, and picture. Beside this a wide range of descriptive properties are optional usable on variant and product.

<img src="static/img/docs/overview/GLDF_Editor_Properties.png" alt="GLDF Conzept" width="750" /><br/><br/>

## Geometry LDC connection

One of the most important points of the GLDF creating is the connection of geometry and photometry. The L3D (r3d, m3d) geometry object contain Light Emitting Objects (LEO) which needs to be connected to an LDC (e.g., Eulumdat file).
This happens only on variant level. With Edit Variant at the top a edit frame is opened. Here down below the ModelGeometryReference is set with a Geometry (an ID from a former geometry file upload). Below this geometry ID link all Emitters / LEOs of the geometry needs to be allocated to LDC via a emitter ID (from a former LDC upload and the emitter setting in the general definitions).

<img src="static/img/docs/overview/GLDF_Editor_Geometry-LDC.png" alt="GLDF Conzept" width="750" /><br/><br/>

At the Emitter section of the lower left "General Definitions" product settings it is needed to define Emitters with an LDC file (via a Photometry ID) and optional with Light Source(s) and Control Gear(s).

<img src="static/img/docs/overview/GLDF_Editor_Emitter.png" alt="GLDF Conzept" width="750" /><br/><br/>

## Known issues

- GLDF format higher than 1.0.0.0 RC1 are not supported
- it is not possible to work with changeable lamps
- variants could not be created
- deletion of properties is not always possible
- saving GLDF often just don't work
- custom properties are not available
- spectrums are not supported
- dimming curves are not supported
- IES upload is not supported
