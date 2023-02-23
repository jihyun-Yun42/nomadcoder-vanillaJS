const quotes = [
  {
    quote: "큰 목표를 이루고 싶으면 허락을 구하지 마라.",
    author: "미상",
  },
  {
    quote: "늘 하던 대로 하면 늘 얻던 것을 얻는다.",
    author: "미상",
  },
  {
    quote: "성공한 사업가들은 긍정적인 에너지를 주는 사람들이지 가져가는 사람들이 아니다.",
    author: "미상",
  },
  {
    quote: "한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. 그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. 당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른 생각은 다 내버려둬라. 이것이 성공하는 방법이다.",
    author: "스와미 비베카난다",
  },
  {
    quote: "언성을 높이지 말고 논거를 강화하라. ",
    author: "미상",
  },
  {
    quote: "성공은 매일 반복한 작은 노력들의 합이다.",
    author: "로버트 콜리어",
  },
  {
    quote: "성공(success)이 노력(work)보다 먼저 나타나는 유일한 곳은 사전이다.",
    author: "비달 사순",
  },
  {
    quote: " 당신이 다수의 편에 서 있다는 걸 깨닫게 될 때가 다시 생각해볼 때이다.",
    author: "마크 트웨인",
  },
  {
    quote: "당신이 정말로 뭔가를 원한다면 기다리지 마라. 견디지 못하는 법을 스스로에게 가르쳐라.",
    author: "구르박쉬 차할",
  },
  {
    quote: "사람들이 인생에서 실패하는 가장 큰 이유는 친구, 가족, 이웃들의 말을 듣기 때문이다.",
    author: "나폴레온 힐",
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author