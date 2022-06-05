// inspired by: https://codepen.io/bennettfeely/pen/esrtc

function characterCombo() {
  let result = "";
  let characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?><,!"@#$%^&*()[]{}|;:-_=+لأـ،/÷×؛ٍِ~ْآ’.؟ذّضصثقفغعهخحجدشسيباتنمكطئءؤرىةوزظ١٢٣٤٥٦٧٨٩٠ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻ৼ৽৾αβΓγΔδεΖζηΘθικΛλμνΞξΟοΠπρΣστΥυΦφΧχΨψΩωςάᾱώἄῆέἦἰῶῦῥῖίἐόἔὀὄὐὔὠήϋաբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆևיוהאבגדזחטכךלמםנןסעפףצץקרשתﭏִֵֶַָֹּ ׳ְֱֲֻ״֞װױײֿለሐመሠረሰቀበተኀነ𐩠አከወዐዘየደገጠጸፀጰፐኘኙኚኛኜኝኞኟጀጁጂጃጄጅጆጇ';
  let charactersLength = characters.length;
  for (let i = 0; i < 3; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function createSnowFlake() {
  let cmb = characterCombo();
  let flake =
    '<div class="snowflake"><s>' +
    cmb +
    "</s><s>" +
    "<s>" +
    cmb +
    "</s><s>" +
    "<s>" +
    cmb +
    "</s><s>" +
    "<s>" +
    cmb +
    "</s><s>" +
    "<s>" +
    cmb +
    "</s><s>" +
    "<s>" +
    cmb +
    "</s></div>";
  let div = document.createElement("div");
  let left = window.event.clientX - 20;
  let top = window.event.clientY + 25;
  div.setAttribute("id", "content");
  div.style.position = "absolute";
  div.style.left = left + "px";
  div.style.top = top + "px";
  div.innerHTML += flake;
  document.getElementById("container").appendChild(div);
  setTimeout(function () {
    document.getElementById("content").remove();
  }, 10000);
}