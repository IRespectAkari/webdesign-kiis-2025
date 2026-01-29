
function addData(e) {
  const form = $("form");

  const name    = form.elements["name"].value;
  const mail    = form.elements["mail"].value;
  const fruits  = form.elements["fruits"].value;
  const message = form.elements["message"].value;


  if(!name || !mail || !message) return;

  const text = [
    create("p", [`名前：`, name]),
    create("p", [`好きな果物：`, fruits]),
    create("p", [`メッセージ：`, message]),
  ];

  $("#comment").append(create("div", text, {className: "comment"}));

  document.asideForm.reset()
}

const radio = ["いちご", "バナナ", "もも", "りんご", "キウイ"]
  .map(t => [create("input", null, {type: "radio", name: "fruits", value: t}), create("span", t)])
  .map(Wrap("label"));
const formParts = [
  create("span", "コメント入力欄"),
  create("span", "お名前"),
  create("input", null, { name: "name", type: "text" }),
  create("span", "メールアドレス（任意）"),
  create("input", null, { name: "mail", type: "email" }),
  create("span", "好きな果物を一つ選んでね"),
  create("div", radio, {id: "fruitsRadio"}),
  create("span", "メッセージ"),
  create("textarea", null, { name: "message" }),
  create("button", "追加", { type: "button", events: { click: addData } }),
];

const form = create("form", formParts, {name: "asideForm"});

const linklist = {
  "公式サイト": "https://www.craft-warriors.com/",
  "リリースページ": "https://translimit.co.jp/posts/cwf",
  "App Store": "https://apps.apple.com/jp/app/craft-warriors-frontier/id6749217735",
  "Google Play": "https://play.google.com/store/apps/details?id=jp.co.translimit.dream",
  "Twitter@craft_warriors": "https://x.com/craft_warriors",
  "代表Twitter@hiroki_takaba": "https://x.com/hiroki_takaba",
};
const aList = Object.entries(linklist).map(([t,url])=>create("a", t, {href: url}));

const links = create("div", aList);

const mainData = articleData
  .map(d => [
    create("h2", d.title),
    create("span", d.sub),
    d.sections.map(dd => create("section", [
      create("h3", dd.title),
      dd.a ? create("a", dd.p, {href: dd.a}) : dd.p
    ]))
  ].flat())
  .map(Wrap("article"));
const main = create("main", mainData);

const header = create("header", "Craft Warriors Frontier 攻略の記し");
const footer = create("footer", "ふったぁだよ");
const aside  = create("aside", [create("span", "あさいどだよ"), create("span", "公式リンク集"), links, create("hr"), form]);

const commentList = [
  ["ああああ", "りんご", "楽しい！"],
  ["キラ", "りんご", "マジお勧め"],
  ["ゆうと", "バナナ", "4回まで報酬多めだよ！"],
  ["サトシ", "いちご", "よき"],
]
.map(([name, fruits, message]) => [`名前：${name}`, `好きな果物：${fruits}`, `メッセージ：${message}`])
.map(ary => ary.map(Wrap("P")))
.map(text => create("div", text, {className: "comment"}));

const comments = create("div", [create("h3", "コメント欄"), commentList].flat(), {id: "comment"});

// const contents = create("div", [aside, main]);
const contents = create("div", [aside, main, comments]);
const all = [header, contents, footer];
$("body").append(...all);


function aesfvsdfgas(params) {
  // 下部に得られたネットワーク部を追加
  const style = create("style", `table#index-${index}::after { content: "Network:${network.join(".")}"; }`);
  table.appendChild(style);
}
