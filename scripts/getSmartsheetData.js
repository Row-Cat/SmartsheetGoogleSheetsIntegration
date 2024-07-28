function getSmartsheetData(sheetId) {
  // Replace with your Smartsheet API access token
  const apiToken = 'pvVprnMq89ruFLq3Sph2lvdBxifDbtm2o37bD';
  
  // Smartsheet API base URL
  const smartsheetApiUrl = `https://api.smartsheet.com/2.0/sheets/${sheetId}`;
  
  // Set up the API request headers
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    }
  };

  // Make the API request to get the sheet data
  const response = UrlFetchApp.fetch(smartsheetApiUrl, options);
  const sheetData = JSON.parse(response.getContentText());
  
  // Prepare the data to be returned to Google Sheets
  const data = [];
  
  // Add column headers
  const headers = sheetData.columns.map(col => col.title);
  data.push(headers);
  
  // Add rows
  sheetData.rows.forEach(row => {
    const rowData = [];
    row.cells.forEach(cell => {
      const column = sheetData.columns.find(col => col.id === cell.columnId);
      rowData.push(cell.displayValue || cell.value);
    });
    data.push(rowData);
  });
  
  return data;
}
