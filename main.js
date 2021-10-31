

  {/* //ここに処理を追加

  let  win = 0;//勝ちを０から


  let game_count = 0;//ゲームカウントを０から
  let winning_count = 0;//勝ちカウントを０から
  let drow_count = 0;//あいこカウントを０から
  let losing_count = 0;//負けたカウントを０から
  let money_count = 3000;//”select”でチャージしたお金がベース　→1000円単位で選べるようにする！0より小さくなったら終了！ */}
  
  
  $("#gu_btn").on("click", function(){//グーを押したら
   
  const min = 0;//0から
  const max = 2;//２までのゲームの種類の数をつける
  
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;//０から２までを小数点なしでrandamnumberに入れる
  
  game_count = game_count +1;//ゲームカウント
  
  
  if(randomNumber === 0)  {//グーの時
    $("#result").text("勝ち！無料券ゲット");//勝ち表示
    
    win = win +1;//勝率
    winning_count = winning_count +1;//勝ちカウントに＋１していく
    $("#com_hand").text("パー");//com表示
    $("#money_count").text("money_count");//お金計算
    
  
  }else if (randomNumber === 1) {//チョキの時
    $("#result").text("あいこ！−500円！普通に500円で買ってください");//−５００円
    
    drow_count = drow_count +1;//あいこカウントに＋１していく
    money_count = money_count -500;//残金に＋５００していく
    $("#com_hand").text("グー");//com表示
    $("money_count").text("money_count");//お金計算
  
  }else if (randomNumber === 2) {//パーの時
    $("#result").text("負け！−1000円！500円とG'sに500円寄付！");//−１０００円
    
    losing_count = losing_count +1;//負けカウントに＋１していく
    money_count = money_count -1000;//残金に−１０００していく
    $("#com_hand").text("チョキ");//com表示
    $("money_count").text("money_count");//お金計算
  
  
  }else{
    alert("エラー");
  }
  
  // 表示物をimput代入したい
  
  
  // 表示物 //
  $("#winning_per").text(Math.floor(win / game_count*100)+"%"); //勝率を小数点なしで表示
  
  
  $("#game_count").text((game_count)+"回");    // ゲーム回数を表示
  $("#game").val((game_count)+"回");    // ゲーム回数を表示
  $("#winning").val((winning_count)+"回");    // ゲーム回数を表示
  $("#money").val((money_count)+"円");    // ゲーム回数を表示
  
  
  $("#winning_count").text((winning_count)+"回");    // 勝った回数を表示
  $("#drow_count").text((drow_count)+"回");    // あいこ回数を表示
  $("#losing_count").text((losing_count)+"回");    // 負けた回数を表示
  $("#money_count").text((money_count)+"円");    // 合計金額を表示
  
  
  //勝ちが10回以上でアラートを出す
  if (winning_count >= 10){
    alert("飲み過ぎです");
    
  // 合計金額が０以下になったらアラートを出す
  if (money_count < 0){
    alert("残金不足です");
    console.log(alert);
    }
  
  
  }
  });
  
  $("#save").on("click",function() {//saveをクリックしたら保存
    // const game = $(game_count).val();//#game_count数をgame(作った)に入れる
    // console.log(game);
    const data = {
      count : game_count,
      win : winning_count,
      money : money_count,
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem("memo", jsonData);//ローカルストレージのメモgame_countに内容を登録更新する
    console.log(jsonData);//エラー発見する
    
  });
  
  // $("#save").on("click",function() {//saveをクリックしたら保存
  //   const game = game_count;//#game_count数をgame(作った)に入れる
  //   console.log(game);
  //   localStorage.setItem("memo", game);//ローカルストレージのメモgame_countに内容を登録更新する
  //   console.log("memo",game);//エラー発見する
  // });
  
  // データ削除
  $("#clear").on("click", function(){
    // memoの内容を削除する
      localStorage.removeItem("memo");
    // game_countに””として表示
      // game_count.val("");
     
  game_count = 0;
  winning_count = 0;
  money_count = 3000;  
  
  $("#game_count").text((game_count)+"回");
  $("#winning_count").text((winning_count)+"回");
  $("#money_count").text((money_count)+"円");
  
  $("#game").val((game_count)+"回");    // ゲーム回数を表示
  $("#winning").val((winning_count)+"回");    // ゲーム回数を表示
  $("#money").val((money_count)+"円");    // ゲーム回数を表示
    });
  
  
  // 読み込み時にデータの取得
  //   ローカルストレージのメモからデータ取得
  if(localStorage.getItem("memo")) {
    // ローカルストレージのmemoから内容取得
      const jsonData = localStorage.getItem("memo");
    // テキストをテキストエリアに表示
      const data = JSON.parse(jsonData);
   //出力したい！！！  
  $("#game").val(data.count+"回");    // dataに入っているゲーム回数を表示
  console.log
  $("#winning").val((data.win)+"回");    // ゲーム回数を表示
  $("#money").val((data.money)+"円");    // ゲーム回数を表示
  
      // console.log(game_count); 
  }
  
  
  
  // お金チャージする表示
      const start = 1000;//1000から
      const end = 10000;//10000まで
  
      let option = "";
      
      for (let i = start; i <= end; i = i + 1000) {//1000円ずつ表示
        option += "<option>" + i + "</option>";
      }
      
      console.log(option);
      
      $("#select").html(option);//”select”idタグにoptionを表示
      
      let select = document.getElementById("select");//”select"の中からID（）内容拾ってlet selectに代入
      console.log(select.option);
      select.options[2].selected = true;//"select"のoptionの3番目を選択
  
  // 飲み物選択表示
      let select_dr = document.getElementById("select_dr");//"select_dr"idの０番目を選択
     select_dr.options[2].selected = true;
  
    
  

  