const scriptName = "빙그레 바나나맛 우유";

// 계산퀴즈 변수
var msgSenderForCalcQuiz = null; // 이용자
var getCalcQuizOn = null; // 계산퀴즈 작동
var answerForCalcQuiz = null; // 문제의 답

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  /*
   *(string) room
   *(string) sender
   *(boolean) isGroupChat
   *(function) replier.reply(message)
   *(function) replier.reply(room, message, hideErrorToast = false)
   *(function) imageDB.getProfileBase64()
   *(string) packageName
   */

  /* 원격 컴파일
  
  if((sender == "김한주") && (msg == "리로드")){
    try{
      Api.off(operationJS);
      Api.reload(operationJS);
      Api.on(operationJS);
      replier.reply("리로드 성공");
    } catch(error){
      replier.reply("Error");
    }
  }
  
  if((sender == "김한주") && (msg == "동기화")){
    replier.reply(Api.getScriptNames());
  }
  
  if((sender == "김한주") && (msg == "파일변경") !== -1){
    operationJS = msg.split(" ")[1];
    replier.reply(OperationJS + "로 변경완료");
  }
  */

  // 기능 알림
  if ((msg == "?바나나") || (msg == "?명령어")) {
    replier.reply("※명령어 목록 " + "\u200b".repeat(501) + "\
    \n\n.(대화) 바나나봇과 대화합니다.\
  \n\n?롤 <소환사명>\n롤 전적검색 op.gg 링크\
  \n\n?롤충 <소환사명>\n롤 전적검색 텍스트\
  \n\n?네이버 <검색대상>\n네이버에서 검색합니다.\
  \n\n?구글 <검색대상>\n구글에서 검색합니다.\
  \n\n?나무위키 <검색대상>\n나무위키에서 검색합니다.\
  \n\n?위키 <검색대상>\n구글 검색을 통해 나무위키에서 검색한 내용의 첫 문단을 그대로 출력합니다.\
  \n\n?유튜브 <검색대상>\n유튜브에서 검색합니다.\
  \n\n?트위터 <검색대상>\n구글 검색을 통해 트위터에서 검색합니다.\
  \n\n?인스타 <검색대상>\n구글 검색을 통해 인스타그램에서 검색합니다.\
  \n\n?인별 <검색대상>\n인스타 게시물 중 최근 게시물을 가져옵니다.\
  \n\n?랜덤인별 <검색대상>\n인스타 게시물 중 랜덤 게시물을 가져옵니다.\
  \n\n#인별 <검색대상>\n인스타그램에서 해당 해시태그의 게시물 중 최근 게시물을 가져옵니다.\
  \n\n#랜덤인별 <검색대상>\n인스타그램에서 해당 해시태그의 게시물 중 랜덤 게시물을 가져옵니다.\
  \n\n?계산퀴즈\n덧셈 및 곱셈 퀴즈를 냅니다. 바로 맞춰주세요.\
  \n\n?실검\n현재 네이버 실시간 급상승 검색어를 20위까지 알려드립니다.\
  \n\n?<디씨갤러리>갤\n해당 갤러리 개념글 중 랜덤 게시물을 가져옵니다.\n구글 검색을 통해 갤러리 약자도 검색 가능합니다.\n이전 갤러리, 마이너 갤러리까지 구현되어 있습니다.\
  \nex)\n?옃갤 - 걸그룹 여자친구 갤러리\n?닌텐도 스위치 갤 - 닌텐도 스위치 마이너 갤러리\
  \n\n?미세먼지/미먼 <검색지역>\n현재 미세먼지 상태를 알려드립니다.\
  \n\n?한강\n현재 한강 수온을 알려드립니다.\
  \n\n?올려 (횟수) \n⬆ 채팅창을 올려드립니다. (최대 15회)\
  \n\n?한국시간\n한국의 현재 시각을 알려드립니다.\
  \n\n?이현시간\n이현의 현재 시각을 알려드립니다.\
  \n\n?푸키먼 <검색대상>\n해당 포켓몬의 타입과 방어상성을 알려드립니다.\
  \n\n?ㅗㅜㅑ\n🔞 ㅗ..ㅗㅜㅑ..");
  }

  // 한국 시간
  if (msg == "?한국시간") {
    var d = new Date();

    // 오전 오후 표시
    var ampm = "오후 ";
    var hour = d.getHours();
    if (hour < 12) {
      ampm = "오전 ";
    }
    else if (hour > 12) {
      hour -= 12;
    }

    replier.reply("🇰🇷 " + d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + ampm + hour + "시 " + d.getMinutes() + "분");
  }

  // 이현 시간
  if (msg == "?이현시간") {
    var d = new Date();
    var hyunTime = d.getTime() - 50400000;
    d.setTime(hyunTime);

    // 오전 오후 표시
    var ampm = "오후 ";
    var hour = d.getHours();
    if (hour < 12) {
      ampm = "오전 ";
    }
    else if (hour > 12) {
      hour -= 12;
    }

    replier.reply("🇺🇸 " + d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + ampm + hour + "시 " + d.getMinutes() + "분");
  }

  // ㅗㅜㅑ
  if (msg == "?ㅗㅜㅑ") {
    var pageNum = Math.floor(Math.random() * 1420 + 1);

    var ggoorrHtml = org.jsoup.Jsoup.connect("http://ggoorr.net/index.php?mid=ao&page=" + pageNum).get().html();
    var ggoorrData = ggoorrHtml.match(/"\/index.php\?mid=ao&amp;page=\d+&amp;document_srl=\d+"/g);

    //data2 = data.split("리스트 상단 광고 끝")[1].split("BEST 게시물")[0].replace(/<[^>]+>/g,"").trim();

    var postNum = Math.floor(Math.random() * ggoorrData.length);
    var ggoorrNum = ggoorrData[postNum].replace(/"\/index.php\?mid=ao&amp;page=\d+&amp;document_srl=/, "").replace(/"/, "");

    replier.reply("🔞 ㅗ..ㅗㅜㅑ..\n\nhttps://ggoorr.net/ao/" + ggoorrNum);
  }

  // 롤 전적검색
  if (msg.indexOf("?롤 ") == 0) {
    var summonerName = msg.replace(/\?롤 /, "").replace(/ /g, "%20");
    replier.reply("op.gg/summoner/userName=" + summonerName);
  }

  // 롤 챔피언 전적 검색
  if (msg.indexOf("?롤충 ") == 0) {
    var toSearch = msg.replace(/\?롤충 /, "").replace(/ /g, "%20");
    var toSearchUrl = "http://fow.kr/find/" + toSearch;
    var fowHtml = org.jsoup.Jsoup.connect(toSearchUrl).get().html();

    var summonerNameData = fowHtml.match(/28px; font-weight:bold;">.+</);
    var summonerName = String(summonerNameData).replace(/28px; font-weight:bold;">/, "").replace(/</, "");

    var levelData = fowHtml.match(/레벨: \d+</);
    var level = String(levelData).replace(/레벨: /, "").replace(/</, "");

    var soloRankInfo = null;
    var mostPickInfo = null;

    try {
      var soloRankData = fowHtml.split("솔로랭크 5x5")[1].split("자유랭크 5x5")[0].replace(/<[^>]+>/g, "");
      var soloRankTier = soloRankData.split("등급:")[1].split("리그")[0].trim();
      var soloRankPoint = soloRankData.split("포인트:")[1].split("승급전")[0].trim();
      soloRankInfo = soloRankTier + " " + soloRankPoint + "점\n";
    } catch (error) {
      soloRankInfo = "정보없음\n";
    }

    try {
      var mostPickHtml = fowHtml.split("펜타+")[1].split("챔피언")[0];
      var mostPickData = mostPickHtml.match(/18"> .+ </);
      var mostPick = String(mostPickData).replace(/18"> /, "").replace(/ </, "");
      var mostPickNumData = mostPickHtml.match(/<td>\d+<\/td>/);
      var mostPickNum = String(mostPickNumData).replace(/<td>/, "").replace(/<\/td>/, "");
      mostPickInfo = "\n☝🏻 이 분은 " + Josa(mostPick, "을") + " " + mostPickNum + "번 플레이한 " + mostPick.replace(/ /g, "") + "충입니다.";
    } catch (error) {
      mostPickInfo = "☝🏻 이 분은 아직 랭크 게임을 플레이 하시지 않았네요!";
    }

    replier.reply("소환사명: " + summonerName + "\n레벨: " + level + "\n솔랭: " + soloRankInfo + mostPickInfo);
  }

  // 네이버 검색
  if (msg.indexOf("?네이버 ") == 0) {
    var toSearch = msg.replace(/\?네이버 /, "");
    var toSearchUrl = toSearch.replace(/ /g, "%20");
    replier.reply("🔍 네이버 '" + toSearch + "' 검색결과입니다.\nsearch.naver.com/search.naver?query=" + toSearchUrl);
  }

  // 구글 검색
  if (msg.indexOf("?구글 ") == 0) {
    var toSearch = msg.replace(/\?구글 /, "");
    var toSearchUrl = toSearch.replace(/ /g, "%20");
    replier.reply("🔍 구글 '" + toSearch + "' 검색결과입니다.\ngoogle.com/search?q=" + toSearchUrl);
  }

  // 한강 수온
  if (msg == "?한강") {
    var data = Utils.getWebText("https://wpws.kr/hangang/");
    data2 = data.split("현재 한강물의 온도는")[1].split("도")[0].replace(/<[^>]+>/g, "").trim();

    replier.reply("🌡 지금 한강은 " + data2 + "도 입니다.");
  }

  // 나무위키
  if (msg.indexOf("?나무위키 ") == 0) {
    var toSearch = msg.replace(/\?나무위키 /, "").replace(/ /g, "%20");
    replier.reply("https://namu.wiki/go/" + toSearch);
  }

  // 유튜브
  if (msg.indexOf("?유튜브 ") == 0) {
    var toSearch = msg.replace(/\?유튜브 /, "");
    var toSearchUrl = toSearch.replace(/ /g, "%20");
    replier.reply("▶ 유튜브 '" + toSearch + "' 검색결과입니다.\nyoutube.com/results?search_query=" + toSearchUrl);
  }

  // 트위터
  if (msg.indexOf("?트위터 ") == 0) {
    try {
      var toSearch = msg.replace(/\?트위터 /, "");
      var toSearchUrl = toSearch.replace(/ /g, "%20");
      var searchLink = "https://www.google.com/search?q=" + "twitter%20" + toSearchUrl;

      var data = Utils.getWebText(searchLink);
      data2 = data.match(/twitter.com\/\w+"/);
      data2 = String(data2).replace(/"/, "");

      replier.reply("🔍 트위터 '" + toSearch + "' 검색 결과입니다.\n" + data2);
    } catch (error) {
      replier.reply("검색하지 못했습니다.");
    }

  }

  // 인스타
  if (msg.indexOf("?인스타 ") == 0) {
    try {
      var toSearch = msg.replace(/\?인스타 /, "");
      var toSearchUrl = toSearch.replace(/ /g, "%20");
      var searchLink = "https://www.google.com/search?q=" + "instagram%20" + toSearchUrl + " -hashtag";

      var data = Utils.getWebText(searchLink);
      data2 = data.match(/instagram.com\/\w+\//);

      replier.reply("🔍 인스타 '" + toSearch + "' 검색 결과입니다.\n" + data2);
    } catch (error) {
      replier.reply("검색하지 못했습니다.");
    }
  }

  // 인스타 최근 게시물
  if (msg.indexOf("?인별 ") == 0) {
    try {
      var toSearch = msg.replace(/\?인별 /, "");
      var toSearchUrl = toSearch.replace(/ /g, "%20");
      var searchLink = "https://www.google.com/search?q=" + "instagram%20" + toSearchUrl + " -hashtag";

      var data = Utils.getWebText(searchLink);
      data2 = data.match(/instagram.com\/\w+\//);

      var data3 = Utils.getWebText("https://www." + data2); //?hl=ko);
      data4 = data3.match(/shortcode":"\w+"/);
      data5 = "instagram.com/p/" + String(data4).replace(/shortcode":"/, "").replace(/"/, "");

      replier.reply("🔍 인스타 '" + toSearch + "' 최근 게시물입니다.\n" + data5);
    } catch (error) {
      replier.reply("검색하지 못했습니다.");
    }
  }

  // 인스타 랜덤 게시물
  if (msg.indexOf("?랜덤인별 ") == 0) {
    try {
      var toSearch = msg.replace(/\?랜덤인별 /, "");
      var toSearchUrl = toSearch.replace(/ /g, "%20");
      var searchLink = "https://www.google.com/search?q=" + "instagram%20" + toSearchUrl + " -hashtag";

      var data = Utils.getWebText(searchLink);
      data2 = data.match(/instagram.com\/\w+\//);

      var data3 = Utils.getWebText("https://www." + data2);
      data4 = data3.match(/shortcode":"\w+"/g);

      var postNum = Math.floor(Math.random() * data4.length);
      data5 = "instagram.com/p/" + String(data4[postNum]).replace(/shortcode":"/, "").replace(/"/, "");

      replier.reply("🎲 인스타 '" + toSearch + "' 랜덤 게시물입니다.\n" + data5);
    } catch (error) {
      replier.reply("검색하지 못했습니다.");
    }
  }

  // 인스타 해시태그 최근 게시물
  if (msg.indexOf("#인별 ") == 0) {
    try {
      var toSearch = msg.replace(/\#인별 /, "");
      var toSearchUrl = toSearch.replace(/ /g, "%20");
      var searchLink = "https://www.instagram.com/explore/tags/" + toSearchUrl;

      var data = Utils.getWebText(searchLink);
      data2 = data.match(/shortcode":"\w+"/);

      data3 = "instagram.com/p/" + String(data2).replace(/shortcode":"/, "").replace(/"/, "");

      replier.reply("🔍 인스타 '#" + toSearch + "' 최근 게시물입니다.\n" + data3);
    } catch (error) {
      replier.reply("검색하지 못했습니다.");
    }
  }

  // 인스타 해시태그 랜덤 게시물
  if (msg.indexOf("#랜덤인별 ") == 0) {
    try {
      var toSearch = msg.replace(/\#랜덤인별 /, "");
      var toSearchUrl = toSearch.replace(/ /g, "%20");
      var searchLink = "https://www.instagram.com/explore/tags/" + toSearchUrl;

      var data = Utils.getWebText(searchLink);
      data2 = data.match(/shortcode":"\w+"/g);

      var postNum = Math.floor(Math.random() * data2.length);
      data3 = "instagram.com/p/" + String(data2[postNum]).replace(/shortcode":"/, "").replace(/"/, "");

      replier.reply("🎲 인스타 '#" + toSearch + "' 랜덤 게시물입니다.\n" + data3);
    } catch (error) {
      replier.reply("검색하지 못했습니다.");
    }

  }

  // 올려
  if (msg == "?올려") {
    for (i = 0; i < 15; i++) {
      replier.reply("☝🏻 올려! ☝🏻");
    }
  }

  // 올려 개수
  if (msg.indexOf("?올려 ") == 0) {
    var howMany = msg.replace(/\?올려 /, "").replace(/ /g, "")
    if (howMany > 30) {
      replier.reply("시발럼아 나 고장나");
    }
    else if (howMany > 15) {
      replier.reply("싫어");
    }
    else {
      for (i = 0; i < howMany; i++) {
        replier.reply("☝🏻 올려! ☝🏻");
      }
    }
  }

  // 계산퀴즈
  if (msg == "?계산퀴즈") {
    if (msgSenderForCalcQuiz == null) {
      msgSenderForCalcQuiz = sender;

      var Num1 = Math.floor(Math.random() * 100 + 1);
      var Num2 = Math.floor(Math.random() * 100 + 1);
      var calcItem = ["+", "+", "+", "+", "×"]
      var calcItemRandom = Math.floor(Math.random() * 5);
      var calcItemToUse = calcItem[calcItemRandom];
      if (calcItemRandom == 4) {
        answerForCalcQuiz = Num1 * Num2;
      }
      else {
        answerForCalcQuiz = Num1 + Num2;
      }

      replier.reply(sender + "님 문제 드리겠습니다.\
    \n\n문제 : " + Num1 + " " + calcItemToUse + " " + Num2 + " = ?");
      getCalcQuizOn = 1;
    }
    else {
      replier.reply(sender + "님 순서를 지켜주세요.");
    }
  }

  if ((sender == msgSenderForCalcQuiz) && (getCalcQuizOn == 1) && (msg != "?계산퀴즈")) {
    msgSenderForCalcQuiz = null;
    if (msg == answerForCalcQuiz) {
      replier.reply(sender + "님 정답입니다!");
    }
    else {
      replier.reply(sender + " 이새끼 이것도 계산못함 ㅂㅅ");
    }
    answerForCalcQuiz = null;
    getCalcQuizOn = null;
  }

  // 계산퀴즈 초기화
  if (msg == "?계산퀴즈초기화") {
    msgSenderForCalcQuiz = null;
    replier.reply("정상적으로 초기화되었습니다.");
  }

  // 네이버 실시간 검색순위
  if (msg == "?실검") {
    var rankHtml = org.jsoup.Jsoup.connect("https://datalab.naver.com/keyword/realtimeList.naver?age=all&groupingLevel=0&marketing=-2&where=main").get().html();
    rankData = rankHtml.split("조회하기")[1].split("이용약관")[0].replace(/\d\d\d\d.\d\d\.\d\d/g, "").replace(/ . ~ . . ~ . /, "");

    var searchRank = new Array();
    var rankListData = rankData.match(/item_title">.+?<\/span>/g);
    var result = "";
    for (i = 0; i < 20; i++) {
      searchRank.push(String(rankListData[i]).replace("item_title\">", "").replace("</span>", ""));
      result = result + "\n" + String(i + 1) + " " + searchRank[i];
    }

    replier.reply("🔍 네이버 실시간 급상승 검색어\n" + nowTime() + "\n" + result);
  }

  // 옃갤 랜덤개념글
  /*
  if(msg == "?옃갤"){
    var pageNum = Math.floor(Math.random() * 1176 + 1);
    var data =org.jsoup.Jsoup.connect("https://gall.dcinside.com/board/lists/?id=gf&page=" + pageNum + "&exception_mode=recommend").get().html();
    data2 = data.match(/"gall_num">\d{1,7}/g);
  
    var postNum = Math.floor(Math.random() * data2.length);
    data3 = "gall.dcinside.com/board/view/?id=gf&no=" + String(data2[postNum]).replace(/"gall_num">/,"");
  
    var data4 =org.jsoup.Jsoup.connect("https://" + data3).get().html();
    data5 = data4.match(/"og:updated_time" content="\d+-\d+-\d+ \d+:\d+:\d+/);
    uploadDate = String(data5).replace(/"og:updated_time" content="/,"");
  
    replier.reply("걸그룹 여자친구 갤러리 랜덤글\n날짜 : " + uploadDate + "\n\n" + data3);
  }
  */

  // 모든갤 랜덤개념글
  if ((msg.indexOf("?") == 0) && msg.indexOf("갤") == msg.length - 1) {
    try {
      // 명령어를 구글에 검색
      var toSearch = msg.replace(/\?/, "").replace(/ /g, "%20");
      var searchLink = "https://www.google.com/search?q=" + toSearch;

      // 검색 결과 중 디씨 홈페이지를 탐색
      var googleHtml = org.jsoup.Jsoup.connect(searchLink).get().html();
      var dcLink = googleHtml.match(/gall.dcinside.com\/\/*\w*\/*board\/lists\?*id=\w+"/); // 보통 갤러리
      var dcId = String(dcLink).replace(/gall.dcinside.com\/\/*\w*\/*board\/lists\?id=/, "").replace(/"/, "");
      if (dcId == "null") {
        dcLink = googleHtml.match(/gall.dcinside.com\/\/*\w*\/*board\/lists\/\?id=\w+&/); // url 끝에 페이지 수가 달려있는 경우
        dcId = String(dcLink).replace(/gall.dcinside.com\/\/*\w*\/*board\/lists\/\?id=/, "").replace(/&/, "");
        if (dcId == "null") {
          dcLink = googleHtml.match(/m.dcinside.com\/\/*\w*\/*board\/\w+\/\d+/); // 갤러리 id를 게시물에서 가져올 경우
          dcId = String(dcLink).replace(/m.dcinside.com\/\/*\w*\/*board\//, "").replace(/\/\d+/, "");
          var googleHtml = org.jsoup.Jsoup.connect("https://" + dcLink).get().html();
          if (googleHtml.match(/마이너/) == "마이너") {
            dcLink = "mgallery";
          }
        }
      }

      var isMgallery = String(dcLink).match(/mgallery/); // 마갤인가?

      // 해당 갤러리의 개념글 끝 페이지를 탐색
      recommendedLink = "https://gall.dcinside.com/board/lists?id=" + dcId + "&exception_mode=recommend";
      if (isMgallery == "mgallery") {
        recommendedLink = "https://gall.dcinside.com/mgallery/board/lists?id=" + dcId + "&exception_mode=recommend";
      }
      var recommendedLinkHtml = org.jsoup.Jsoup.connect(recommendedLink).get().html();
      pgEndLink = recommendedLinkHtml.match(/page=\d+&\D*exception_mode=recommend" class="page_end/);
      pgEnd = String(pgEndLink).replace(/page=/, "").replace(/&\D*exception_mode=recommend" class="page_end/, "");

      // 페이지 랜덤
      var pageNum = Math.floor(Math.random() * pgEnd + 1);

      if (isMgallery == "mgallery") {
        data = org.jsoup.Jsoup.connect("https://gall.dcinside.com/mgallery/board/lists/?id=" + dcId + "&page=" + pageNum + "&exception_mode=recommend").get().html();
      }
      else {
        data = org.jsoup.Jsoup.connect("https://gall.dcinside.com/board/lists/?id=" + dcId + "&page=" + pageNum + "&exception_mode=recommend").get().html();
      }
      data2 = data.match(/"gall_num">\d{1,7}/g);

      // 글 랜덤
      var postNum = Math.floor(Math.random() * data2.length);
      if (isMgallery == "mgallery") {
        data3 = "gall.dcinside.com/mgallery/board/view/?id=" + dcId + "&no=" + String(data2[postNum]).replace(/"gall_num">/, ""); // 랜덤글 링크
      }
      else {
        data3 = "gall.dcinside.com/board/view/?id=" + dcId + "&no=" + String(data2[postNum]).replace(/"gall_num">/, "");
      }

      // 갤러리 이름 크롤링
      var galleryTitle = recommendedLinkHtml.match(/title.+title/);
      var galleryName = String(galleryTitle).replace(/title>/, "").replace(/<\/title/, "");

      // 날짜 크롤링
      var data4 = org.jsoup.Jsoup.connect("https://" + data3).get().html();
      data5 = data4.match(/"og:updated_time" content="\d+-\d+-\d+ \d+:\d+:\d+/);
      uploadDate = String(data5).replace(/"og:updated_time" content="/, "");

      replier.reply("🎲 " + galleryName + " 개념글\n🗓 " + uploadDate + "\n\n" + data3);
    } catch (error) {
      replier.reply("검색하지 못했습니다.");
    }
  }

  // 나무위키 1번 문단 크롤링
  if (msg.indexOf("?위키") == 0) {
    try {
      // 검색 내용 구글에 검색
      var toSearch = msg.replace(/\?위키 /, "");
      var toSearchUrl = toSearch.replace(/ /g, "%20");
      var searchLink = "https://www.google.com/search?q=" + "나무위키%20" + toSearchUrl;

      // 나무위키 링크 생성
      var googleHtml = org.jsoup.Jsoup.connect(searchLink).get().html();
      var namuData = googleHtml.match(/namu\.wiki\/w\/.+" ping/);
      var namuLink = "https://" + String(namuData).replace(/" ping/, "");
      var namuRawLink = namuLink.replace(/\/w\//, "/raw/");

      // 나무위키 제목/첫문단용 소스코드
      var namuHtml = org.jsoup.Jsoup.connect(namuLink).get().html();
      var namuRawHtml = org.jsoup.Jsoup.connect(namuRawLink).get().html();

      // 문서 제목
      var namuTitleData = namuHtml.match(/<title>.+<\/title>/);
      var namuTitle = String(namuTitleData).replace(/<title>/, "").replace(/<\/title>/, "").replace(/ - 나무위키/, "");

      // 문서 첫 문단
      var namuFirstTitle = namuRawHtml.split("==")[1].trim();
      var namuFirstContent = namuRawHtml.split("==")[2];

      // 나무위키 문법 다듬기
      namuFirstContent = namuFirstContent.replace(/\[\[http.+?\|#*/g, ""); // 링크 삭제
      namuFirstContent = namuFirstContent.replace(/\[\[[^\]]+\|/g, ""); // 링크와 텍스트가 다른 하이퍼링크 자르기
      namuFirstContent = namuFirstContent.replace(/\[\[/g, "").replace(/\]\]/g, ""); // 하이퍼링크 풀기
      namuFirstContent = namuFirstContent.replace(/\[\*.+?\]/g, ""); // 주석 삭제
      namuFirstContent = namuFirstContent.replace(/~~.+?~~/g, "").replace(/--.+?--/g, ""); // 취소선 삭제
      namuFirstContent = namuFirstContent.replace(/'''/g, ""); // 굵음 제거
      namuFirstContent = namuFirstContent.replace(/\|[^\|]+\|/g, "").replace(/\|/g, ""); // 표, 사진 등 삭제
      namuFirstContent = namuFirstContent.replace(/\[br\]/g, "\n"); // 엔터 활성화
      namuFirstContent = namuFirstContent.replace(/&\w+;/g, ""); // 인용 제거
      namuFirstContent = namuFirstContent.replace(/\[YouTube[^\]]+\]/gi, ""); // 유튜브 제거
      namuFirstContent = namuFirstContent.replace(/\[include.+?\]/g, ""); // include 제거
      namuFirstContent = namuFirstContent.replace(/{{{.\d/g, "").replace(/}}}/g, ""); // 글자 크기 제거
      namuFirstContent = namuFirstContent.replace(/width=\d+/g, "").replace(/height=\d+/g, ""); // width, height 제거
      namuFirstContent = namuFirstContent.trim();

      replier.reply("🔍 나무위키 '" + namuTitle + "' 검색 결과\n\n✔ " + namuFirstTitle + "\n\n" + namuFirstContent);

    } catch (error) {
      replier.reply("검색하지 못했습니다.");
    }
  }

  if ((msg.indexOf("?미세먼지") == 0) || (msg.indexOf("?미먼") == 0)) {
    try {
      if ((msg == "?미세먼지") || (msg == "?미먼")) {
        var searchArea = "반포동";
      }
      else {
        var searchArea = msg.replace(/\?미세먼지 /, "").replace(/\?미먼 /, "");
      }
      var searchAreaUrl = searchArea.replace(/ /g, "%20");
      var searchLink = "https://search.naver.com/search.naver?query=" + searchAreaUrl + "%20미세먼지";

      var naverText = org.jsoup.Jsoup.connect(searchLink).get().text();
      var areaData = naverText.match(/대기오염정보 .+? 대기오염/);
      var pm10Data = naverText.match(/에어코리아 미세먼지 현재\d+/);
      var pm25Data = naverText.match(/초미세먼지 [가-힣]+ \d+㎍\/㎥ 오존/);

      var area = String(areaData).replace(/대기오염정보 /, "").replace(/ 대기오염/, "");
      var pm10 = String(pm10Data).replace(/에어코리아 미세먼지 현재/, "");
      var pm25 = String(pm25Data).replace(/초미세먼지 [가-힣]+ /, "").replace(/㎍\/㎥ 오존/, "");

      // 미세먼지 기준
      if (pm10 > 150) {
        pm10State = "최악🤮";
      }
      else if (pm10 > 100) {
        pm10State = "매우 나쁨😷";
      }
      else if (pm10 > 75) {
        pm10State = "상당히 나쁨😣";
      }
      else if (pm10 > 50) {
        pm10State = "나쁨🙁";
      }
      else if (pm10 > 40) {
        pm10State = "보통😑";
      }
      else if (pm10 > 30) {
        pm10State = "양호🙂";
      }
      else if (pm10 > 15) {
        pm10State = "좋음😄";
      }
      else if (pm10 > 0) {
        pm10State = "최고 좋음😆";
      }

      // 초미세먼지 기준
      if (pm25 > 75) {
        pm25State = "최악🤮";
      }
      else if (pm25 > 50) {
        pm25State = "매우 나쁨😷";
      }
      else if (pm25 > 37) {
        pm25State = "상당히 나쁨😣";
      }
      else if (pm25 > 25) {
        pm25State = "나쁨🙁";
      }
      else if (pm25 > 20) {
        pm25State = "보통😑";
      }
      else if (pm25 > 15) {
        pm25State = "양호🙂";
      }
      else if (pm25 > 8) {
        pm25State = "좋음😄";
      }
      else if (pm25 > 0) {
        pm25State = "최고 좋음😆";
      }

      var toReply = "🌁 '" + area + "' 미세먼지 정보입니다.\n\n미세먼지: " + pm10 + "㎍/㎥ " + pm10State + "\n초미세먼지: " + pm25 + "㎍/㎥ " + pm25State;
      if (pm10 == "null") {
        toReply = "🤔 해당 지역을 검색하지 못했어요. 더 자세히 검색해보는건 어떨까요?\n\nex) 안암동, 용현1동, 을왕리";
      }

      replier.reply(toReply);
    } catch (error) {
      replier.reply("🤔 해당 지역을 검색하지 못했어요. 더 자세히 검색해보는건 어떨까요?\n\nex) 안암동, 용현1동, 을왕리");
    }
  }

  // 구글 이미지 검색
  /*
  if (msg.indexOf("?짤 ") == 0) {
    try {
      var toSearch = msg.replace(/\?짤 /, "");
      var toSearchUrl = toSearch.replace(/ /g, "%20");
      var searchLink = "https://www.google.com/search?q="+ toSearchUrl + "&tbm=isch";

      var imageData = org.jsoup.Jsoup.connect(searchLink).get().html().match(/"ru":".+?"/g); // ou는 이미지 링크, ru는 게시글 링크
      var imageNum = Math.floor(Math.random() * imageData.length);
      var resultImage = imageData[imageNum].replace(/"ru":"/,"").replace(/"/,"").replace(/https:\/\//,"");

      replier.reply("🎲 구글 '" + toSearch + "' 이미지 검색 결과\n\n" + resultImage);
    } catch (error) {
      replier.reply("검색하지 못했습니다.");
    }
  }
  */

  // 포켓몬 상성
  if (msg.indexOf("?푸키먼") == 0) {
    try {
      // 검색할 포켓몬
      var toSearch = msg.replace(/\?푸키먼 /, "");
      var toSearchUrl = toSearch.replace(/ /g, "%20");
      var searchLink = "https://pokemon.fandom.com/ko/wiki/" + toSearchUrl;

      // 포켓몬 위키 연결
      var pokemonWikiText = org.jsoup.Jsoup.connect(searchLink).get().text();

      // 포켓몬 타입
      var pokemonTypeData = pokemonWikiText.match(/\S+타입 포켓몬,/g);
      var pokemonType = String(pokemonTypeData).replace(/타입 포켓몬,/g, "").replace(/,/, ", ");

      // 방어 상성
      var attackType = pokemonWikiText.match(/\S+ (\d|0.5|0.25)+×/g);
      var attackTypeArray = new Array(Array(), Array(), Array(), Array(), Array(), Array());

      for (var i = 0; i < 18; i++) {
        var typeName = String(attackType[i].match(/[가-힣]+ /)).replace(/ /, "");
        var typeCoeff = attackType[i].match(/ (\d|0.5|0.25)×/)[1];
        if (typeCoeff == "4") {
          attackTypeArray[0].push(typeName);
        }
        else if (typeCoeff == "2") {
          attackTypeArray[1].push(typeName);
        }
        else if (typeCoeff == "1") {
          attackTypeArray[2].push(typeName);
        }
        else if (typeCoeff == "0.5") {
          attackTypeArray[3].push(typeName);
        }
        else if (typeCoeff == "0.25") {
          attackTypeArray[4].push(typeName);
        }
        else if (typeCoeff == "0") {
          attackTypeArray[5].push(typeName);
        }
      }

      var attackTypeResult = "\n"
      for (var i = 0; i < 6; i++) {
        if (attackTypeArray[i].length) {
          switch (i) {
            case 0:
              attackTypeResult += ("\n4배: " + attackTypeArray[i]);
              break;
            case 1:
              attackTypeResult += ("\n2배: " + attackTypeArray[i]);
              break;
            case 2:
              attackTypeResult += ("\n1배: " + attackTypeArray[i]);
              break;
            case 3:
              attackTypeResult += ("\n0.5배: " + attackTypeArray[i]);
              break;
            case 4:
              attackTypeResult += ("\n0.25배: " + attackTypeArray[i]);
              break;
            case 5:
              attackTypeResult += ("\n0배: " + attackTypeArray[i]);
              break;
            default:
              break;

          }
        }
      }

      // 출력
      var result = "이름: " + toSearch + "\n타입: " + pokemonType + attackTypeResult;
      replier.reply(result);

    } catch (error) {
      replier.reply("🤔 검색하지 못했습니다.");
    }
  }

  // 핑퐁 대화
  if (msg.indexOf(".") == 0) {
    msg = msg.replace(/./,"");
    let jsondata = { "request": { "query": msg } };

    function send() {
      try {
        let url = new java.net.URL("https://builder.pingpong.us/api/builder/5e1a1c75e4b010b663d37764/integration/v0.2/custom/{sessionId}");
        let con = url.openConnection();
        con.setRequestMethod("POST"); // 서버 접속 방법을 설정하세요. GET, POST, OPTIONS 등..
        con.setRequestProperty("Content-Type", "application/json; charset=utf-8"); // 서버 접속시 가져올 데이터의 형식을 지정
        con.setRequestProperty("Authorization", "Basic " + "a2V5OjBlMDY2ZjJlZTUxNmZhY2JmZDFmMGQyMThmMDJkZjkz"); // 인증키 입력. 사이트에 따라 Basic 또는 Bearer 를 사용합니다.
        con.setRequestProperty("User-Agent", "Mozilla"); // 일부 사이트의 경우 User-Agent 를 요구합니다.
        con.setRequestProperty("Accpet", "*.*"); // 일부 사이트의 경우, 이 헤더가 없으면 오류가 발생합니다.
        con.setDoOutput(true);
        let wr = new java.io.DataOutputStream(con.getOutputStream());
        let writer = new java.io.BufferedWriter(new java.io.OutputStreamWriter(wr, "UTF-8"));
        writer.write(JSON.stringify(jsondata));
        writer.close();
        wr.close();

        let responseCode = con.getResponseCode();
        let br;
        if (responseCode == 200) {
          br = new java.io.BufferedReader(new java.io.InputStreamReader(con.getInputStream()));
        } else {
          br = new java.io.BufferedReader(new java.io.InputStreamReader(con.getErrorStream()));
        }
        let inputLine;
        let response = "";
        while ((inputLine = br.readLine()) != null) {
          response += inputLine;
        }
        br.close();
        return response;
      } catch (e) {
        return e;
      }
    }


    let results = JSON.parse(send());
    replier.reply(results['response']['replies'][0]['text']);
  }


  // 기본 틀
  /*
  if (msg.indexOf("?명령어") == 0) {
    //try {
      
    //} catch (error) {
    //  replier.reply("오류 메시지");
    //}
  }
  */

  //// 비공개

  if ((msg == "야 바나나") || (msg == "야 꿀벌")) {
    replier.reply("https://image.dcinside.com/viewimagePop.php?id=21b8d121f0d737a062bad1b018d5376e&no=24b0d769e1d32ca73ced84fa11d0283162f18dd5505eb28abfc2607ab76a7bd3d937bdb559ba1ae55d0a9992a9c71453a5dba38a5f67907125fef765153d642b9602dad8d659c8ebb94de1ad76891f17ed23a25b464a651ff7d01c30011a6b4aa3fbcd97fc1e8779f978d1736b1a15c91f4bbe");
  }

  if (msg.indexOf("뭐야...") !== -1) {
    replier.reply("https://image.dcinside.com/viewimagePop.php?id=21b8d121f0d737a062bad1b018d5376e&no=24b0d769e1d32ca73ced84fa11d0283162f18dd5505eb28abfc2607ab76a7bd3d937bdb559ba1ae55d0a9992a9c71453a5dba38a5f67907125fef765153d642b9602dad8d659c8ebb94de1ad76891f17ed23a25b464a651ff7d01c30011a6b4aa3fbcd97fc1e8779f978d1736b1a15c91f4bbe");
    replier.reply("(...)")
  }

  if (msg == "...소난다") {
    replier.reply("https://image.dcinside.com/viewimagePop.php?id=21b8d121f0d737a062bad1b018d5376e&no=24b0d769e1d32ca73ced84fa11d0283162f18dd5505eb28abfc2607ab76a7bd3d937bdb559ba1ae55d0a9992a9c71453a5dba38a5f67907125fef765153d642b9602dad8d659c8ebb94de1ad76891f17ed23a25b464a651ff7d01c30011a6b4aa3fbcd97fc1e8779f978d1736b1a15c91f4bbe");
    replier.reply("...?");
  }

  if (msg == "넣을게.") {
    replier.reply("(나의 거대하고 훌륭한 육봉을 꿀벌의 생식기관에 삽입한다)")
    replier.reply("https://image.dcinside.com/viewimagePop.php?id=21b8d121f0d737a062bad1b018d5376e&no=24b0d769e1d32ca73ced84fa11d0283162f18dd5505eb28abfc2607ab76a7bd3d937bdb559ba1ae55d0a9992a9c71453a5dba38a5f67907125fef762106d6f2a09088b58c3953e951a9b3f90643106f6a7e90f270fdfeff5b84faa912336a7609f40340c13727addfb06712734427153a05104");
    replier.reply("...!!!!");
  }

  if (msg.indexOf("화낸척하기는...") !== -1) {
    replier.reply("https://image.dcinside.com/viewimagePop.php?id=21b8d121f0d737a062bad1b018d5376e&no=24b0d769e1d32ca73ced84fa11d0283162f18dd5505eb28abfc2607ab76a7bd3d937bdb559ba1ae55d0a9992a9c71453a5dba38a5f67907125fef762106d6f2a09088b58c3953e951a9b3f90643106f6a7e90f270fdfeff5b84faa912336a7609f40340c13727addfb06712734427153a05104");
    replier.reply("(...)")
    replier.reply("https://image.dcinside.com/viewimagePop.php?id=21b8d121f0d737a062bad1b018d5376e&no=24b0d769e1d32ca73ced84fa11d0283162f18dd5505eb28abfc2607ab76a7bd3d937bdb559ba1ae55d0a9992a9c71453a5dba38a5f67907125fef730403d6f2d18b024eb66b2de9d42b190f487ee9306eb375d1551f713fc1150e4e1cb96fba5e7e39fd79ae7392a0eccc74ef3dbba399d804e");
    replier.reply("(이후 매차쿠챠 범했다.)");
  }

  if (msg == "!바나나") {
    replier.reply("닥쳐 " + sender);
  }

  if (msg == "ㄱㅎㅈ") {
    replier.reply("왜");
  }

  if ((msg.indexOf("자살") !== -1) || msg.indexOf("죽고싶") !== -1) {
    replier.reply("※정신적 고통 등 주변에 말하기 어려워 전문가 도움이 필요하다면 자살예방상담전화(1393), 자살예방핫라인(1577-0199), 희망의 전화(129), 생명의 전화(1588-9191), 청소년 전화(1388) 등에서 24시간 상담을 받을 수 있다.");
  }

  if (msg == "?이현길이") {
    replier.reply("22.9cm");
  }

  if (msg == "?이현국적") {
    replier.reply("🇺🇸 이 새끼는 순도 100% 양키놈입니다.");
  }

  if (msg == "?사랑해") {
    replier.reply("(하트)");
  }

  if (msg == "?톡방") {
    replier.reply(room);
  }

  if (msg.indexOf("돼지새끼") !== -1) {
    replier.reply(sender + " 돼지새끼");
  }

  // 맞춤법 꼽주기
  if (msg.indexOf("됬") !== -1) {
    var toReply = ""
    for (i = 0; i < 36; i++) {
      toReply += "됐"
    }
    replier.reply(toReply);
  }

  if (msg.indexOf("됌") !== -1) {
    var toReply = ""
    for (i = 0; i < 36; i++) {
      toReply += "됨"
    }
    replier.reply(toReply);
  }

  if (msg.indexOf("됀") !== -1) {
    var toReply = ""
    for (i = 0; i < 36; i++) {
      toReply += "된"
    }
    replier.reply(toReply);
  }


}

// 현재시간 함수
function nowTime() {
  // 현재시간
  var d = new Date();
  // 오전 오후 표시
  var ampm = "오후 ";
  var hour = d.getHours();
  if (hour < 12) {
    ampm = "오전 ";
  }
  else if (hour > 12) {
    hour -= 12;
  }
  return (d.getFullYear() + "년 " + (d.getMonth() + 1) + "월 " + d.getDate() + "일 " + ampm + hour + "시 " + d.getMinutes() + "분");
}

// 조사 변환 함수
function Josa(txt, josa) {
  var code = txt.charCodeAt(txt.length - 1) - 44032;
  var cho = 19, jung = 21, jong = 28;
  var i1, i2, code1, code2;

  // 원본 문구가 없을때는 빈 문자열 반환
  if (txt.length == 0) return '';

  // 한글이 아닐때
  if (code < 0 || code > 11171) return txt;

  if (code % 28 == 0) return txt + Josa.get(josa, false);
  else return txt + Josa.get(josa, true);
}
Josa.get = function (josa, jong) {
  // jong : true면 받침있음, false면 받침없음

  if (josa == '을' || josa == '를') return (jong ? '을' : '를');
  if (josa == '이' || josa == '가') return (jong ? '이' : '가');
  if (josa == '은' || josa == '는') return (jong ? '은' : '는');
  if (josa == '와' || josa == '과') return (jong ? '와' : '과');

  // 알 수 없는 조사
  return '**';
}