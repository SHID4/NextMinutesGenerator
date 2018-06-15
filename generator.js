function myFunction() {
  Logger.log("fugafuga");
  var document = DocumentApp.getActiveDocument();//今開いているドキュメントを取得
  var body = document.getBody;//本文取得
  var nextMeeting = body.match(/次回のミーティング:.*時/);//次回のミーティング以降から何時までの部分の文字列をを取得
  var nextDay = nextMeeting.match(/[^0-9^\.]/g);//数字だけ抽出

  var newDoc = DocumentApp.create(nextDay);

  



//TO DO 上のミーティング部分から数字のものだけを取得して0101のような数値を取得
  //それを次回の議事録のタイトルとして生成
  //本文はそれをコピーしたもので
  //上のメニューから議事録→次回議事録作成で次が作れるようにする
}
