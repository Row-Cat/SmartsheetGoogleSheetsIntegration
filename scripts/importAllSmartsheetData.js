function importAllSmartsheetData() {
  const smartsheets = [
    { id: '4307900956626820', tabName: 'Fulfillment ARCHIVE 1' },
    { id: '3498969636228996', tabName: 'Fulfillment ARCHIVE 2' },
    { id: '8557568393695108', tabName: 'Fulfillment ARCHIVE 3' },
    { id: '6015673037705092', tabName: 'Fulfillment ARCHIVE 4' },
    { id: '7695918871930756', tabName: 'Fulfillment Outbound Shipping Request Form' },
    { id: '8545988194396036', tabName: 'Disk Swaps' },
    { id: '141127332089732',  tabName: 'Disk Swaps - ARCHIVE' },
    { id: '3002886222309252', tabName: 'QNAP Swaps' },
    { id: '3670830105972612', tabName: 'QNAP Swaps - ARCHIVE' },
    { id: '6307488485140356', tabName: 'Logistics Smartsheet' },
    { id: '5111055235633028', tabName: 'Logistics Smartsheet - ARCHIVE' }
  ];
  
  const spreadsheetId = '1JE1U59-z7Kks54G5kI4YH2pT_9v7aXDURPOzf4OHCiQ';
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  
  smartsheets.forEach(smartsheet => {
    const data = getSmartsheetData(smartsheet.id);
    let sheet = spreadsheet.getSheetByName(smartsheet.tabName);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(smartsheet.tabName);
    } else {
      sheet.clear();
    }
    
    sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  });
}