function main() {
  const searchQuery = `${makeSearchQuery()} -filter:retweets -filter:replies`;
  console.log(searchQuery);
  console.log(getReplyComment());
  const searchResults = searchTweet(searchQuery);
  writeResult(searchResults);
}

function searchTweet(queryStr) {
  var twitterService = getService();
  if (!twitterService.hasAccess()) {
    console.log(twitterService.getLastError());
    return;
  }
  const query = `q=${encodeURIComponent(queryStr)}&count=100&result_type=recent`;
  const json = twitterService.fetch(`https://api.twitter.com/1.1/search/tweets.json?${query}`, { method:"GET" });
  const searchResultTweets = JSON.parse(json);
  
  const searchResults = {};
  for (const tweet of searchResultTweets['statuses']) {
    searchResults[tweet.id_str] = tweet.text;
  }

  return searchResults;
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

function getReplyComment() {
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName('返信内容');
  const reply = sheet.getDataRange().getValues();
  reply.shift();

  return reply[0][0];
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

function getService() {
  return OAuth1.createService('Twitter')
      .setAccessTokenUrl('https://api.twitter.com/oauth/access_token')
      .setRequestTokenUrl('https://api.twitter.com/oauth/request_token')
      .setAuthorizationUrl('https://api.twitter.com/oauth/authorize')
      // 設定した認証情報をセット
      .setConsumerKey(PropertiesService.getScriptProperties().getProperty("CONSUMER_API_KEY"))
      .setConsumerSecret(PropertiesService.getScriptProperties().getProperty("CONSUMER_API_SECRET"))
      .setCallbackFunction('authCallback')
      // 認証情報をプロパティストアにセット（これにより認証解除するまで再認証が不要になる）
      .setPropertyStore(PropertiesService.getUserProperties());
}