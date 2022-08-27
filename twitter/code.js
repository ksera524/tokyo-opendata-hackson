function main() {
  const searchQuery = makeSearchQuery();
  console.log(searchQuery);
  writeResult({'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd'})
}

function writeResult(searchResults) {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName('検索結果ツイート');
  const lastRow = sheet.getLastRow();
  const keys = Object.keys(searchResults);
  const values = Object.values(searchResults);
  for (let i = 0; i < keys.length; i++) {
    sheet.getRange(lastRow + (i + 1), 1).setValue(keys[i]);
    sheet.getRange(lastRow + (i + 1), 2).setValue(values[i]);
  }
}

// 検索結果ツイート用シートを白紙にしたい場合、この関数を実行
function clearResult() {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName('検索結果ツイート');
  sheet.clear();
}

function makeSearchQuery() {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName('検索ワード');
  const words = sheet.getDataRange().getValues();
  words.shift();

  const searchQueries = [];
  for (const word of words) {
    searchQueries.push(concatOrOperator(word));
  }

  return searchQueries.join(' ');
}

function concatOrOperator(word) {
  const words = String(word).split(' ');
  return words.join(' OR ');
}
