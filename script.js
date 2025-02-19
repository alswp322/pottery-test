const results = {
  ISTJ:
    "<img src='https://ifh.cc/g/RjdOmo.png' alt='ISTJ - 클래식 작업 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>클래식한 작업을 하는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #ffffff;'>화이트</span><br><strong>• 스팟:</strong> <span style='color: #000000;'>블랙</span> x3<br><br>신뢰감있고 깔끔한 작품을 만드는 당신<br>단정한 화이트 베이스 위에<br>블랙 스팟을 더해 균형 있는 조합<br>정식 명칭은 달마시안 유약인 블랙&amp;화이트 유약이 당신의 유약 ☕️🔲</span>",
  ISFJ:
    "<img src='https://ifh.cc/g/myRVQ7.png' alt='ISFJ - 따뜻한 감성 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>따뜻한 감성을 담아내는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #ffffff;'>화이트</span><br><strong>• 스팟:</strong> <span style='color: #ff69b4;'>핑크</span>, <span style='color: #6a0dad;'>퍼플</span><br><br>포근한 감성이 작품에서 느껴지는 당신<br>마치 부드러운 꽃잎이 흩날리는 듯한 조합이 어울려요<br>부드럽고 깔끔한 화이트 베이스에<br>핑크와 퍼플 스팟 포인트가 당신의 유약 🌸</span>",
  INFJ:
    "<img src='https://ifh.cc/g/LOzsy7.png' alt='INFJ - 영감 전달 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>영감을 전하는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #6a0dad;'>퍼플</span><br><strong>• 스팟:</strong> <span style='color: #ffa500;'>오렌지</span><br><br>당신의 작품에서는 무언가 신비로움이 느껴져요<br>클리어 젤리 퍼플 베이스에<br>따뜻한 오렌지 포인트를 더해<br>몽환적인 느낌을 연출되는 조합이 당신의 유약 🔮🍊</span>",
  INTJ:
    "<img src='https://ifh.cc/g/GBKotk.png' alt='INTJ - 혁신 설계 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>혁신을 설계하는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #000080;'>네이비</span><br><strong>• 스팟:</strong> <span style='color: #000000;'>블랙</span>, <span style='color: #ffffff;'>화이트</span><br><br>작품에 디테일이 돋보이는 당신!<br>짙은 코발트 네이비 베이스에 블랙으로 깊이를 주고<br>화이트 스팟으로 하이라이트를 주는 조합 <br>디테일이 표현되는 조합이 당신의 유약⚙️</span>",
  ISTP:
    "<img src='https://ifh.cc/g/l9X91q.png' alt='ISTP - 기술 능력 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>기술에 능한 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #006400;'>딥그린</span>(오리베)<br><strong>• 스팟:</strong> <span style='color: #000000;'>블랙</span>, <span style='color: #ffffff;'>화이트</span><br><br>손기술이 뛰어나시군요!<br>기술을 돋보이게 할 독특한 조합을 추천드립니다<br>기물의 쉐잎과 라인이 강조되는 유약 조합!<br>전통 유약인 오리베의 진한 딥 그린에<br>블랙과 화이트 스팟을 얹은 무드가 바로 당신의 유약 👷✍️</span>",
  ISFP:
    "<img src='https://ifh.cc/g/OlN6ks.png' alt='ISFP - 감성 표현 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>감성을 표현하는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #6a0dad;'>퍼플</span><br><strong>• 스팟:</strong> <span style='color: #6a0dad;'>미</span><span style='color: #0000ff;'>스</span><span style='color: #008000;'>테</span><span style='color: #ff69b4;'>리</span><span style='color: #000000;'>믹</span><span style='color: #ffa500;'>스</span><br><br>감각적인 아티스트로군요!<br>어디서도 볼 수 없는 신비한 조합<br>반투명한 젤리 퍼플 베이스에<br>미스테리 믹스 스팟을 더한 유약이 어울려요 🎭✨</span>",
  INFP:
    "<img src='https://ifh.cc/g/8W6B0M.png' alt='INFP - 감각과 상상 조형 세라미스트 결과 이미지'><br>" +
    "<span class='result-title'>감각과 상상을 조형하는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #87ceeb;'>스카이 블루</span><br><strong>• 스팟:</strong> <span style='color: #ffffff;'>화이트</span>, <span style='color: #ffa500;'>오렌지</span><br><br>자유로운 상상력을 가진 당신에게 딱!<br>맑은 하늘 같은 스카이 블루에<br>화이트와 오렌지 스팟을 톡톡 💭🌞</span>",
  INTP:
    "<img src='https://ifh.cc/g/t0LMrx.png' alt='INTP - 철학 담은 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>철학을 담은 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #ffffff;'>화이트</span><br><strong>• 스팟:</strong> <span style='color: #0000ff;'>블루</span>, <span style='color: #000000;'>블랙</span><br><br>작품에 본질을 담아내는 당신을 위한 조합!<br>차분한 화이트 베이스 위에<br>스카이 블루와 블랙 스팟이 어우러져<br>단정한 무드를 연출하는 유약 📖🖋️</span>",
  ESTP:
    "<img src='https://ifh.cc/g/dYzGFq.png' alt='ESTP - 모험 즐기는 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>모험을 즐기는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #ffffff;'>화이트</span><br><strong>• 스팟:</strong> <span style='color: #ff0000;'>레드</span>, <span style='color: #ffa500;'>오렌지</span><br><br>생동감 넘치는 당신에게 어울리는 컬러 조합!<br>화이트 베이스에 레드와 오렌지 스팟을 더해 에너지를 가득 🔥🎢</span>",
  ESFP:
    "<img src='https://ifh.cc/g/MsWxmd.png' alt='ESFP - 트랜디 감각 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>트랜디한 감각의 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #ff69b4;'>핑크</span><br><strong>• 스팟:</strong> <span style='color: #000000;'>블랙</span> x3<br><br>자유롭고 독창적인 작업물을 제작하는 당신!<br>부드럽고 채도높은 밀키 핑크 베이스에<br>블랙 스팟으로 강렬한 포인트를 더한<br>BlackPink 유약을 추천 💖🖤</span>",
  ENFP:
    "<img src='https://ifh.cc/g/SVp0rn.png' alt='ENFP - 열정 불어넣는 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>열정을 불어넣는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #ffff00;'>옐로우</span><br><strong>• 스팟:</strong> <span style='color: #ff69b4;'>핑크</span>, <span style='color: #ffa500;'>오렌지</span>, <span style='color: #008000;'>그린</span>, <span style='color: #ffffff;'>화이트</span><br><br>엄청나게 다채로운 색감으로 작업의 열정을 보여주세요<br>옐로우 베이스에 핑크, 오렌지, 그린, 화이트 스팟을 조합해<br>가장 실험적이고 생기 넘치는 조합을 만들었습니다 🌈<br><br>심지어 이 유약의 정식 명칭은 오무라이스 🥫</span>",
  ENTP:
    "<img src='https://ifh.cc/g/qDXaXO.png' alt='ENTP - 창의성 넘치는 세라미스트 결과 이미지'><br>" +
    "<span class='result-title'>창의성 넘치는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #87ceeb;'>스카이 블루</span><br><strong>• 스팟:</strong> <span style='color: #ff0000;'>레드</span><br><br>작업에서 색다른 시도를 해보는 걸 좋아하는 당신<br>스카이 블루 베이스에 레드 스팟 ✈️🚀클리어한 블루 베이스에<br>파프리카 파우더가 뿌려진 느낌이 당신의 유약!</span>",
  ESTJ:
    "<img src='https://ifh.cc/g/67M7Vs.png' alt='ESTJ - 실용적인 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>실용적인 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #ffffff;'>화이트</span><br><strong>• 스팟:</strong> <span style='color: #000080;'>네이비</span>, <span style='color: #0000ff;'>블루</span><br><br>실용성과 조화가 균형잡힌 작업을 하는 당신<br>화이트 베이스에 작은 네이비와 블루 스팟을 더해<br>깔끔하면서도 포인트를 줘서 밸런스가 잡힌 인상을 주는 조합이 당신의 유약 ⚖️💼</span>",
  ESFJ:
    "<img src='https://ifh.cc/g/vVz1Vm.png' alt='ESFJ - 협력 이끄는 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>협력을 이끄는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #ff69b4;'>핑크</span><br><strong>• 스팟:</strong> <span style='color: #ffffff;'>화이트</span>, <span style='color: #ffa500;'>오렌지</span><br><br>사람을 위한 예술을 하는 당신!<br>당신의 도자기는 누군가에게 선물하고 싶은 작품이에요<br>핑크 베이스에 화이트와 오렌지 스팟을 더해<br>따뜻하고 친근한 감성을 담은 조합 🦩</span>",
  ENFJ:
    "<img src='https://ifh.cc/g/sWahnQ.png' alt='ENFJ - 영감 주는 세라미스트 결과 이미지'><br>" +
    "<span class='result-title'>영감을 주는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #87ceeb;'>스카이 블루</span><br><strong>• 스팟:</strong> <span style='color: #ff69b4;'>핑크</span>, <span style='color: #6a0dad;'>퍼플</span><br><br>다른 도예가들에게도 영감을 주는 작업을 하는 당신<br>감성적인 분위기가 연출되는 작품이 멋져요<br>유약에 스카이 블루 베이스에 핑크와 퍼플 스팟이 어우러지면<br>더 신비롭고 몽환적인 분위기를 연출할 수 있을지도? 🍇💧</span>",
  ENTJ:
    "<img src='https://ifh.cc/g/67M7Vs.png' alt='ENTJ - 건축적 조형미 세라미스트 결과 이미지' style='width:100px; display:block; margin:0 auto;'><br>" +
    "<span class='result-title'>건축적 조형미를 담는 세라미스트</span><br><br>" +
    "<span class='result-detail'><strong>• 베이스:</strong> <span style='color: #000080;'>네이비</span><br><strong>• 스팟:</strong> <span style='color: #ffffff;'>화이트</span><br><br>강렬한 존재감을 가진 작품!<br>구조적이면서 강한 조형미가 작품에서 느껴집니다<br>깊은 네이비 베이스에 강렬하고 신뢰감 있는 분위기🏆<br>마치 볼레이트 광물을 닮은 컬러가 당신의 유약 🌌</span>"
};

function startTest() {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("test-page").style.display = "flex";
}

function nextQuestion(currentId, nextId) {
  var currentElem = document.getElementById(currentId);
  var nextElem = document.getElementById(nextId);
  if (currentElem && nextElem) {
    currentElem.classList.remove("active");
    nextElem.classList.add("active");
  }
}

function calculateResult() {
  const form = document.getElementById("testForm");
  const formData = new FormData(form);
  let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  for (let [_, value] of formData.entries()) {
    scores[value]++;
  }

  let mbti = "";
  mbti += (scores["E"] > scores["I"]) ? "E" : ((scores["E"] < scores["I"]) ? "I" : (Math.random() < 0.5 ? "E" : "I"));
  mbti += (scores["S"] > scores["N"]) ? "S" : ((scores["S"] < scores["N"]) ? "N" : (Math.random() < 0.5 ? "S" : "N"));
  mbti += (scores["T"] > scores["F"]) ? "T" : ((scores["T"] < scores["F"]) ? "F" : (Math.random() < 0.5 ? "T" : "F"));
  mbti += (scores["J"] > scores["P"]) ? "J" : ((scores["J"] < scores["P"]) ? "P" : (Math.random() < 0.5 ? "J" : "P"));

  document.getElementById("test-page").style.display = "none";
  document.getElementById("result-page").style.display = "flex";
  document.getElementById("result-text").innerHTML = results[mbti];

  let resultPage = document.getElementById("result-page");
  resultPage.style.backgroundImage = "none"; /* iOS Safari 대응 */
  resultPage.style.backgroundImage = "url('https://ifh.cc/g/HYmp9D.png')";
  resultPage.style.backgroundSize = "cover";
  resultPage.style.backgroundPosition = "center";
  resultPage.style.backgroundRepeat = "no-repeat";
}

function restartTest() {
  window.location.href = window.location.origin + window.location.pathname;
}
