// 検索結果ツイート用シートを白紙にしたい場合、この関数を実行
function clearResult() {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName('検索結果ツイート');
  sheet.clear();
}