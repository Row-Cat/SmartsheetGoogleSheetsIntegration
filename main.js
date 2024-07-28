// main.js

// Include other scripts
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

eval(include('scripts/getSmartsheetData'));
eval(include('scripts/importAllSmartsheetData'));
eval(include('scripts/onOpen'));
