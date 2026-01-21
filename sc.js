
function addData(e) {
  const form = $("form");

  const name    = form.elements["name"].value;
  const mail    = form.elements["mail"].value;
  const fruits  = form.elements["fruits"].value;
  const message = form.elements["message"].value;


  if(!name || !mail || !message) return;

  $("main").append(create("p", [`名前：`, name]));
  $("main").append(create("p", [`選んだ果物：`, fruits]));
  $("main").append(create("p", [`メッセージ：`, message]));

  document.asideForm.reset()
}

const radio = ["いちご", "バナナ", "もも"]
  .map(t => [create("input", null, {type: "radio", name: "fruits", value: t}), create("span", t)])
  .map(Wrap("label"));
const formParts = [
  create("span", "お名前"),
  create("input", null, { name: "name", type: "text" }),
  create("span", "メールアドレス"),
  create("input", null, { name: "mail", type: "email" }),
  create("span", "好きな果物を一つ選んでね"),
  create("div", radio, {id: "fruitsRadio"}),
  create("span", "メッセージ"),
  create("textarea", null, { name: "message" }),
  create("button", "追加", { type: "button", events: { click: addData } }),
];

const form = create("form", formParts, {name: "asideForm"});

const links = create("div");

const mainData = articleData.map(d => {
  const article = create("article", [
    create("h2", d.title),
    d.sub,
    d.sections.map(dd => create("section", [
      create("h3", dd.title),
      dd.p
    ]))
  ].flat());
  return article;
});
const main = create("main", mainData);
// const main = create("main", create("article", [
//   create("h2", "クラフロ配信開始！！"),
//   "前作のCraft Warriorsがサービス終了して早1年…パワーアップして遂に復活！",
//   create("section", [
//     create("h3", "何が違うの？"),
//     "前作は簡単に言えばクラクラ（クラッシュオブクラン）のボクセルバージョンだったが、今作ではキャラを自ら動かせる！"
//   ]),
//   create("section", [
//     create("h3", "面白い？"),
//     "おもしろい！自ら組み立てた城から出撃し、攻め入ってくる敵たちを仲間と協力して倒すという展開がとても楽しいよ！",
//   ])
// ]));
const header = create("header", "Craft Warriors Frontier 攻略の記し");
const footer = create("footer", "ふったぁだよ");
const aside  = create("aside", [create("span", "あさいどだよ"), links, form]);

// const contents = create("div", [aside, main]);
const contents = create("div", [aside, main]);
const all = [header, contents, footer];
$("body").append(...all);


function aesfvsdfgas(params) {
  // 下部に得られたネットワーク部を追加
  const style = create("style", `table#index-${index}::after { content: "Network:${network.join(".")}"; }`);
  table.appendChild(style);
}
