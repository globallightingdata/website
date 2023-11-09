---
title: Parametric Geometry Introduction
sidebar_label: Introduction
---
<!-- markdownlint-disable MD033 (no html im markdown) -->

## The Concept

Parametric Geometry is a concept that allows you to create basic, rudimentary 3D models of generic luminaires without having to model them. You can create models based on a few product dimensional parameters.

Our Parametric 3D Model web service allows you to upload an input XML file and provides the download link after generating the new L3D file. You can then use the file within your GLDF file.

## Step-by-Step Guide

This guide will walk you through the steps to create a sample parametric L3D model and help you understand how the web service works. The outline of the process is as follows:

- Create an input XML file according to our <a href="/xsd/p3d/p3d.xsd" target="_blank">XSD</a> file specification.
- Send the input XML file to our web service.
- The web service will respond with a URL where you can download the generated L3D file.

The following is an example based on the Windows platform. We will create a Windows batchfile (.bat) and a sample source XML file to demonstrate and test the web service.

:::warning Important
Before you start, you will need to obtain authentication information from Relux or DIAL.

Replace then the part *[REPLACE WITH CODE PROVIDED BY RELUX OR DIALUX]* with the provided code.
:::

### Step 1

Open the windows text editor of your choice, enter the following code and save the file as *example.bat*

```bash
@echo off
setlocal

:: Define the authentication credentials only once here
set "auth=[REPLACE WITH CODE PROVIDED BY RELUX OR DIALUX]"

:: Use PowerShell to show a file selection dialog
echo Showing file selection dialog...
for /f "delims=" %%I in ('powershell -command "[System.Reflection.Assembly]::LoadWithPartialName('System.windows.forms') | Out-Null; $OpenFileDialog = New-Object System.Windows.Forms.OpenFileDialog; $OpenFileDialog.ShowDialog() | Out-Null; $OpenFileDialog.FileName"') do set "xmlFile=%%I"

:: Check if the user canceled the file selection dialog
if "%xmlFile%"==" " (
    echo No file selected. Exiting...
    exit /b 1
)
echo Selected file: %xmlFile%

:: Ensure curl is installed and available
echo Checking if curl is installed...
where /q curl
if errorlevel 1 (
    echo curl is not installed or not in the PATH. Please install curl or add it to your PATH.
    exit /b 1
)

:: Make the PUT request and save the output to temp file
echo Making PUT request to server...
curl --location --request PUT "https://p3d.relux.com/l3d/" ^
--header "Authorization: Basic %auth%" ^
--header "Content-Type: application/xml" ^
--data "@%xmlFile%" > temp.xml
echo PUT request completed.

:: Extract URL from XML response using PowerShell
echo Extracting URL from server response...
for /f "delims=" %%I in ('powershell -command "$xml=[xml](Get-Content -Path temp.xml); $xml.root"') do set "downloadURL=%%I"
echo Extracted URL: %downloadURL%

:: Check if the URL is valid
if not defined downloadURL (
    echo Error: The server did not return a valid URL. Exiting...
    exit /b 1
)

:: Extract the filename from the URL using PowerShell
echo Extracting filename from URL...
for /f "delims=" %%I in ('powershell -command "$url = '%downloadURL%'; $url.Split('/')[-1]"') do set "fileName=%%I"
echo Extracted filename: %fileName%

:: Download the file from the extracted URL and save it with the extracted filename, with authorization header
echo Downloading file from server...
curl --location --output "%fileName%" "%downloadURL%" ^
--header "Authorization: Basic %auth%"
echo File download completed.

:: Check if the file was successfully downloaded
if exist "%fileName%" (
    echo The file was successfully downloaded and saved as %fileName%.
) else (
    echo Error: The file could not be downloaded.
)

pause
```

### Step 2

Open another instance of your text editor, paste the following code and save the file as *example.xml*:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<P3D>
    <StandCuboidSide>
     <Width>30</Width>
     <Length>60</Length>
     <Height>15</Height>
     <LuminousWidth>20</LuminousWidth>
     <LuminousLength>20</LuminousLength>
     <TotalHeight>120</TotalHeight>
    </StandCuboidSide>
</P3D>
```

### Step 3

Double-click the example.bat batchfile created in step 1. Then a file selection dialog will appear. You can then select the example.xml file created in the step above and the script will download the result L3D file to your current directory. The result filename should start with *StandCuboidSide...* and end with *.l3d*. Your directory should look as in the image below.

![Result directory](/img/docs/geometry/screenshots/result.webp)

### Step 4

Open the [L3D Editor](https://l3d-editor.gldf.io) and load your new L3D file to see the result.

![Parametric geometry in the L3D Editor](/img/docs/geometry/screenshots/resulteditor.webp)
