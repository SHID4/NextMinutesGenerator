function myFunction() {
  Logger.log("fugafuga");
  var document = DocumentApp.getActiveDocument();//今開いているドキュメントを取得
  var body = document.getBody;//本文取得
  body.match(/次回のミーティング:.*¥n/);//次回のミーティング部分を取得
//TO DO 上のミーティング部分から数字のものだけを取得して0101のような数値を取得
  //それを次回の議事録のタイトルとして生成
  //本文はそれをコピーしたもので
  //上のメニューから議事録→次回議事録作成で次が作れるようにする
}
