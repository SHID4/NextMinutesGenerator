//次回議事録の作成
//次の日程を入力してメニューから「議事録→次の議事録作成」で次の議事録を作成する
function GenerateNextMinutes() {
  var document = DocumentApp.getActiveDocument();//今開いているドキュメントを取得
  var body = document.getBody();//本文取得
  var nextMeeting = body.getText().match(/次回.*\n.*日/).toString();//次回のミーティング以降から何時までの部分の文字列をを取得
  var month = nextMeeting.match(/.*月/).toString();
      month =  month.replace(/[^0-9]/g,"").toString();
  if(month.length == 1)　 month = '0' + month;
  var date = nextMeeting.match(/月.*日/).toString();
      date = date.replace(/[^0-9]/g,"").toString();
  if(date.length == 1) date = '0' + date;
  
  var nextDay = month + date;//数字だけ抽出
  Logger.log(nextDay);
  
  //自分のファイル名を取得
  var DocId = document.getId()
  
  var DocFile = DriveApp.getFileById(DocId);
  DocFile.makeCopy(nextDay);
   Logger.log(DocFile);

}

//起動した時に呼び出される関数
  function onOpen(){
    //まだUIについて良くわかってないけど以下の記述でメニューを追加できるみたい
    var ui = DocumentApp.getUi();
    var menu = ui.createMenu('議事録');
    menu.addItem('次回の議事録を作成', 'GenerateNextMinutes');
    menu.addToUi();
    
  }

