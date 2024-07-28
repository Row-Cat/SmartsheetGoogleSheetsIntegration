# Smartsheet Google Sheets Integration

This repository contains Google Apps Script files for integrating Smartsheet data into Google Sheets. The scripts handle importing data from specified Smartsheets and updating the corresponding tabs in a Google Sheets spreadsheet.

## Files

- `main.js`: Main entry point that includes and initializes all individual scripts.
- `scripts/getSmartsheetData.js`: Retrieves data from Smartsheet and prepares it for Google Sheets.
- `scripts/importAllSmartsheetData.js`: Imports data from all specified Smartsheets and updates the corresponding Google Sheets tabs.
- `scripts/onOpen.js`: Adds a custom menu to the Google Sheets UI for importing Smartsheet data.

## Usage

1. Clone the repository.
2. Open Google Apps Script Editor and create a new project.
3. Copy the content from each file into the corresponding script file in the Apps Script Editor.
4. Save and run the necessary functions.
