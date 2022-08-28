// スクリプト実行前に認証が必要なため、一度この関数を実行
function getOAuthURL() {
  Logger.log(getService().authorize());
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

function authCallback(request) {
  var service = getService();
  var authorized = service.handleCallback(request);
  if (authorized) {
    return HtmlService.createHtmlOutput('success!!');
  } else {
    return HtmlService.createHtmlOutput('failed');
  }    
}