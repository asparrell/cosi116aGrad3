// Define the passages
const passages = [
  `<p><mark class="alice">Alice</mark> <mark class="was">was</mark> <mark class="beginning">beginning</mark> 
<mark class="to">to</mark> <mark class="get">get</mark> <mark class="very">very</mark> <mark class="tired">tired</mark> <mark class="of">of</mark> <mark class="sitting">
sitting</mark> <mark class="by">by</mark> <mark class="her">her</mark> <mark class="sister">sister</mark> <mark class="on">on</mark> <mark class="the">the</mark> 
<mark class="bank">bank</mark>, <mark class="and">and</mark> <mark class="of">of</mark> <mark class="having">having</mark> <mark class="nothing">nothing</mark> <mark class="to">to</mark> 
<mark class="do">do</mark>: <mark class="once">once</mark> <mark class="or">or</mark> <mark class="twice">twice</mark> <mark class="she">she</mark> <mark class="had">had</mark> 
<mark class="peeped">peeped</mark> <mark class="into">into</mark> <mark class="the">
   the</mark> <mark class="book">book</mark> <mark class="her">her</mark> <mark class="sister">sister</mark> <mark class="was">was</mark> <mark class="reading">reading</mark>, 
   <mark class="but">but</mark> <mark class="it">it</mark> <mark class="had">had</mark> <mark class="no">no</mark> <mark class="pictures">pictures</mark> <mark class="or">or</mark> 
   <mark class="conversations">conversations</mark> <mark class="in">in</mark> <mark class="it">it</mark>, “<mark class="and">and</mark> <mark class="what">what</mark> 
   <mark class="is">is</mark> <mark class="the">
   the</mark> <mark class="use">use</mark> <mark class="of">of</mark> <mark class="a">a</mark> <mark class="book">book</mark>,” <mark class="thought">thought</mark> 
   <mark class="alice">Alice</mark> “<mark class="without">without</mark> <mark class="pictures">
   pictures</mark> <mark class="or">or</mark> <mark class="conversations">conversations</mark>?”</p><p><mark class="so">So</mark> <mark class="she">she</mark> 
   <mark class="was">was</mark> <mark class="considering">considering</mark> <mark class="in">in</mark> <mark class="her">her</mark> <mark class="own">own</mark> <mark class="mind">mind</mark> 
   (<mark class="as">as</mark> <mark class="well">well</mark> <mark class="as">as</mark> <mark class="she">she</mark> <mark class="could">could</mark>, <mark class="for">
   for</mark> <mark class="the">the</mark> <mark class="hot">hot</mark> <mark class="day">day</mark> <mark class="made">made</mark> <mark class="her">her</mark> 
   <mark class="feel">feel</mark> <mark class="very">very</mark> <mark class="sleepy">sleepy</mark> <mark class="and">and</mark> <mark class="stupid">stupid</mark>), 
   <mark class="whether">whether</mark> <mark class="the">the</mark> <mark class="pleasure">pleasure</mark> <mark class="of">of</mark> <mark class="making">
   making</mark> <mark class="a">a</mark> <mark class="daisy-chain">daisy-chain</mark> <mark class="would">would</mark> <mark class="be">be</mark> <mark class="worth">worth</mark> 
   <mark class="the">the</mark> <mark class="trouble">trouble</mark> <mark class="of">of</mark> <mark class="getting">getting</mark> <mark class="up">up</mark> 
   <mark class="and">and</mark> <mark class="picking">picking</mark> <mark class="the">the</mark> <mark class="daisies">daisies</mark>, <mark class="when">when</mark> <mark class="suddenly">
   suddenly</mark> <mark class="a">a</mark> <mark class="white">White</mark> <mark class="rabbit">Rabbit</mark> <mark class="with">with</mark> <mark class="pink">pink</mark> <mark class="eyes">eyes</mark> <mark class="ran">ran</mark> <mark class="close">close</mark> 
   <mark class="by">by</mark> <mark class="her">her</mark>.</p><p><mark class="there">There</mark> <mark class="was">was</mark> <mark class="nothing">nothing</mark> <mark class="so">so</mark> <mark class="very"><i>very</i></mark> <mark class="remarkable">remarkable</mark> <mark class="in">in</mark> <mark class="that">that</mark>; <mark class="nor">nor</mark> <mark class="did">did</mark> <mark class="alice">Alice</mark> <mark class="think">think</mark> <mark class="it">it</mark> <mark class="so">so</mark> <mark class="very"><i>very</i>
   </mark> <mark class="much">much</mark> <mark class="out">out</mark> <mark class="of">of</mark> <mark class="the">the</mark> <mark class="way">way</mark> <mark class="to">to</mark> <mark class="hear">hear</mark> <mark class="the">the</mark> <mark class="rabbit">Rabbit</mark> <mark class="say">say</mark> <mark class="to">to</mark> <mark class="itself">itself</mark>, “<mark class="oh">Oh</mark> <mark class="dear">dear</mark>! <mark class="oh">
  Oh</mark> <mark class="dear">dear</mark>! <mark class="i">I</mark> <mark class="shall">shall</mark> <mark class="be">be</mark> <mark class="late">late</mark>!” (<mark class="when">when</mark> <mark class="she">she</mark> <mark class="thought">thought</mark> <mark class="it">it</mark> <mark class="over">over</mark> <mark class="afterwards">afterwards</mark>, <mark class="it">it</mark> <mark class="occurred">occurred</mark> <mark class="to">to</mark> <mark class="her">her</mark> <mark class="that">that</mark> <mark class="she">she</mark> <mark class="ought">ought</mark> <mark class="to">to</mark> <mark class="have">
  have</mark> <mark class="wondered">wondered</mark> <mark class="at">at</mark> <mark class="this">this</mark>, <mark class="but">but</mark> <mark class="at">at</mark> <mark class="the">the</mark> <mark class="time">time</mark> <mark class="it">
  it</mark> <mark class="all">all</mark> <mark class="seemed">seemed</mark> <mark class="quite">quite</mark> <mark class="natural">natural</mark>); <mark class="but">but</mark> <mark class="when">when</mark> <mark class="the">the</mark> <mark class="rabbit">Rabbit</mark> <mark class="actually">actually</mark> <i><mark class="took">took</mark> <mark class="a">a</mark> <mark class="watch">watch</mark> <mark class="out">out</mark> <mark class="of">of</mark> <mark class="its">its</mark> <mark class="waistcoat-pocket">waistcoat-pocket</mark></i>, <mark class="and">
  and</mark> <mark class="looked">looked</mark> <mark class="at">at</mark> <mark class="it">it</mark>, <mark class="and">and</mark> <mark class="then">then</mark> <mark class="hurried">hurried</mark> <mark class="on">on</mark>, <mark class="alice">
  Alice</mark> <mark class="started">started</mark> <mark class="to">to</mark> <mark class="her">her</mark> <mark class="feet">feet</mark>, <mark class="for">for</mark> <mark class="it">it</mark> <mark class="flashed">flashed</mark> <mark class="across">across</mark> <mark class="her">her</mark> <mark class="mind">mind</mark> <mark class="that">that</mark> <mark class="she">she</mark> <mark class="had">had</mark> <mark class="never">never</mark> <mark class="before">before</mark> <mark class="seen">seen</mark> <mark class="a">a</mark> <mark class="rabbit">rabbit</mark> <mark class="with">with</mark> <mark class="either">
  either</mark> <mark class="a">a</mark> <mark class="waistcoat-pocket">waistcoat-pocket</mark>, <mark class="or">or</mark> <mark class="a">a</mark> <mark class="watch">watch</mark> <mark class="to">
  to</mark> <mark class="take">take</mark> <mark class="out">out</mark> <mark class="of">of</mark> <mark class="it">it</mark>, <mark class="and">and</mark> <mark class="burning">burning</mark> <mark class="with">with</mark> 
  <mark class="curiosity">curiosity</mark>, <mark class="she">she</mark> <mark class="ran">ran</mark> <mark class="across">across</mark> <mark class="the">the</mark> <mark class="field">field</mark> <mark class="after">after</mark> 
  <mark class="it">it</mark>, <mark class="and">and</mark> <mark class="fortunately">fortunately</mark> <mark class="was">was</mark> <mark class="just">
  just</mark> <mark class="in">in</mark> <mark class="time">time</mark> <mark class="to">to</mark> <mark class="see">see</mark> <mark class="it">it</mark> <mark class="pop">pop</mark> <mark class="down">down</mark> 
  <mark class="a">a</mark> <mark class="large">large</mark> <mark class="rabbit-hole">rabbit-hole</mark> <mark class="under">under</mark> <mark class="the">the</mark> <mark class="hedge">hedge</mark>.</p>`
  ,
  `<p><mark class="it">It</mark> <mark class="is">is</mark> <mark class="a">a</mark> <mark class="truth">truth</mark> <mark class="universally">universally</mark> <mark class="acknowledged">acknowledged</mark>, <mark class="that">that</mark> <mark class="a">a</mark> <mark class="single">single</mark> <mark class="man">man</mark> <mark class="in">in</mark> <mark class="possession">possession</mark> <mark class="of">of</mark> <mark class="a">a</mark> <mark class="good">good</mark> <mark class="fortune">fortune</mark> <mark class="must">must</mark> <mark class="be">be</mark> <mark class="in">in</mark> <mark class="want">want</mark> <mark class="of">of</mark> <mark class="a">a</mark> <mark class="wife">wife</mark>.
  </p><p><mark class="however">However</mark> <mark class="little">little</mark> <mark class="known">known</mark> <mark class="the">the</mark> <mark class="feelings">feelings</mark> <mark class="or">or</mark> <mark class="views">views</mark> <mark class="of">of</mark> <mark class="such">such</mark> <mark class="a">a</mark> <mark class="man">man</mark> <mark class="may">may</mark> <mark class="be">be</mark> <mark class="on">on</mark> <mark class="his">his</mark> <mark class="first">first</mark> <mark class="entering">entering</mark> <mark class="a">a</mark> <mark class="neighbourhood">neighbourhood</mark>, <mark class="this">this</mark> <mark class="truth">truth</mark> <mark class="is">is</mark> <mark class="so">so</mark> <mark class="well">well</mark> <mark class="fixed">
  fixed</mark> <mark class="in">in</mark> <mark class="the">the</mark> <mark class="minds">minds</mark> <mark class="of">of</mark> <mark class="the">the</mark> <mark class="surrounding">surrounding</mark> <mark class="families">families</mark>, <mark class="that">that</mark> <mark class="he">he</mark> <mark class="is">is</mark> <mark class="considered">considered</mark> <mark class="as">as</mark> <mark class="the">the</mark> <mark class="rightful">rightful</mark> <mark class="property">property</mark> <mark class="of">of</mark> <mark class="some">some</mark> <mark class="one">one</mark> <mark class="or">or</mark> <mark class="other">other</mark> <mark class="of">of</mark> <mark class="their">their</mark> <mark class="daughters">daughters</mark>.
  </p><p>“<mark class="my">My</mark> <mark class="dear">dear</mark> <mark class="mr">Mr.</mark> <mark class="bennet">Bennet</mark>,” <mark class="said">said</mark> <mark class="his">his</mark> <mark class="lady">lady</mark> <mark class="to">to</mark> <mark class="him">him</mark> <mark class="one">one</mark> <mark class="day">day</mark>, “<mark class="have">have</mark> <mark class=you>you</mark> <mark class="heard">heard</mark> <mark class="that">that</mark> <mark class="netherfield">Netherfield</mark> <mark class="park">Park</mark> <mark class="is">is</mark> <mark class="let">let</mark> <mark class="at">at</mark> <mark class="last">last</mark>?”
  </p><p><mark class="mr">Mr.</mark> <mark class="bennet">Bennet</mark> <mark class="replied">replied</mark> <mark class="that">that</mark> <mark class="he">he</mark> <mark class="had">had</mark> <mark class="not">not</mark>.
  </p><p>“<mark class="but">But</mark> <mark class="it">it</mark> <mark class="is">is</mark>,” <mark class="returned">returned</mark> <mark class="she">she</mark>; “<mark class="for">for</mark> <mark class="mrs">Mrs.</mark> <mark class="long">Long</mark> <mark class="has">has</mark> <mark class="just">just</mark> <mark class="been">been</mark> <mark class="here">here</mark>, <mark class="and">and</mark> <mark class="she">she</mark> <mark class="told">told</mark> <mark class="me">me</mark> <mark class="all">all</mark> <mark class="about">about</mark> <mark class="it">it</mark>.”
  </p><p><mark class="mr">Mr.</mark> <mark class="bennet">Bennet</mark> <mark class="made">made</mark> <mark class="no">no</mark> <mark class="answer">answer</mark>.
  </p><p>“<mark class="do">Do</mark> <mark class="not">not</mark> <mark class="you">you</mark> <mark class="want">want</mark> <mark class="to">to</mark> <mark class="know">know</mark> <mark class="who">who</mark> <mark class="has">has</mark> <mark class="taken">taken</mark> <mark class="it">it</mark>?” <mark class="cried">cried</mark> <mark class="his">his</mark> <mark class="wife">wife</mark>, <mark class="impatiently">impatiently</mark>.
  </p><p>“<mark class="you">You</mark> <mark class="want">want</mark> <mark class="to">to</mark> <mark class="tell">tell</mark> <mark class="me">me</mark>, <mark class="and">and</mark> <mark class="i">I</mark> <mark class="have">have</mark> <mark class="no">no</mark> <mark class="objection">objection</mark> <mark class="to">to</mark> <mark class="hearing">hearing</mark> <mark class="it">it</mark>.”</p>`
  ,
  `<p><mark class="in">In</mark> <mark class="my">my</mark> <mark class="younger">younger</mark> <mark class="and">and</mark> <mark class="more">more</mark> <mark class="vulnerable">vulnerable</mark> <mark class="years">years</mark> <mark class="my">my</mark> <mark class="father">father</mark> <mark class="gave">gave</mark> <mark class="me">me</mark> <mark class="some">some</mark> <mark class="advice">advice</mark> <mark class="that">that</mark> <mark class="i've">I’ve</mark> <mark class="been">been</mark> <mark class="turning">turning</mark> <mark class="over">over</mark> <mark class="in">in</mark> <mark class="my">my</mark> <mark class="mind">mind</mark> <mark class="ever">ever</mark> <mark class="since">since</mark>.
  “<mark class="whenever">Whenever</mark> <mark class="you">you</mark> <mark class="feel">feel</mark> <mark class="like">like</mark> <mark class="criticizing">criticizing</mark> <mark class="anyone">anyone</mark>,” <mark class="he">he</mark> <mark class="told">told</mark> <mark class="me">me</mark>, “<mark class="just">just</mark> <mark class="remember">remember</mark> <mark class="that">that</mark> <mark class="all">all</mark> <mark class="the">the</mark> <mark class="people">people</mark> <mark class="in">in</mark> <mark class="this">this</mark> <mark class="world">world</mark> <mark class="haven't">haven’t</mark> <mark class="had">had</mark> <mark class="the">the</mark> <mark class="advantages">
  advantages</mark> <mark class="that">that</mark> <mark class="you've">you’ve</mark> <mark class="had">had</mark>.”</p>
  <p><mark class="he">He</mark> <mark class="didn't">didn’t</mark> <mark class="say">say</mark> <mark class="any">any</mark> <mark class="more">more</mark>, <mark class="but">but</mark> <mark class="we've">we’ve</mark> <mark class="always">always</mark> <mark class="been">been</mark> <mark class="unusually">unusually</mark> <mark class="communicative">communicative</mark> <mark class="in">in</mark> <mark class="a">a</mark> <mark class="reserved">reserved</mark> <mark class="way">way</mark>, <mark class="and">and</mark> <mark class="i">I</mark> <mark class="understood">understood</mark> <mark class="that">that
  </mark> <mark class="he">he</mark> <mark class="meant">meant</mark> <mark class="a">a</mark> <mark class="great">great</mark> <mark class="deal">deal</mark> <mark class="more">more</mark> <mark class="than">than</mark> <mark class="that">that</mark>. <mark class="in">In</mark> <mark class="consequence">consequence</mark>, <mark class="i'm">I’m</mark> <mark class="inclined">inclined</mark> <mark class="to">to</mark> <mark class="reserve">reserve</mark> <mark class="all">all</mark> <mark class="judgements">judgements</mark>, <mark class="a">a</mark> <mark class="habit">habit</mark> <mark class="that">that</mark> <mark class="has">
  has</mark> <mark class="opened">opened</mark> <mark class="up">up</mark> <mark class="many">many</mark> <mark class="curious">curious</mark> <mark class="natures">natures</mark> <mark class="to">to</mark> <mark class="me">me</mark> <mark class="and">and</mark> <mark class="also">also</mark> <mark class="made">made</mark> <mark class="me">me</mark> <mark class="the">the</mark> <mark class="victim">victim</mark> <mark class="of">of</mark> <mark class="not">not</mark> <mark class="a">a</mark> <mark class="few">few</mark> <mark class="veteran">veteran</mark> <mark class="bores">bores</mark>. <mark class="the">The</mark> <mark class="abnormal">abnormal</mark> <mark class="mind">mind</mark> <mark class="is">is</mark> <mark class="quick">quick</mark> <mark class="to">to</mark> <mark class="detect">
  detect</mark> <mark class="and">and</mark> <mark class="attach">attach</mark> <mark class="itself">itself</mark> <mark class="to">to</mark> <mark class="this">this</mark> <mark class="quality">quality</mark> <mark class="when">when</mark> <mark class="it">it</mark> <mark class="appears">appears</mark> <mark class="in">in</mark> <mark class="a">a</mark> <mark class="normal">normal</mark> <mark class="person">person</mark>, <mark class="and">and</mark> <mark class="so">so</mark> <mark class="it">it</mark> <mark class="came">came</mark> <mark class="about">about</mark> <mark class="that">that</mark> <mark class="in">in</mark> <mark class="college">college</mark> <mark class="i">I</mark> <mark class="was">was</mark> <mark class="unjustly">unjustly</mark> <mark class="accused">
  accused</mark> <mark class="of">of</mark> <mark class="being">being</mark> <mark class="a">a</mark> <mark class="politician">politician</mark>, <mark class="because">because</mark> <mark class="i">I</mark> <mark class="was">was</mark> <mark class="privy">privy</mark> <mark class="to">to</mark> <mark class="the">the</mark> <mark class="secret">secret</mark> <mark class="griefs">griefs</mark> <mark class="of">of</mark> <mark class="wild">wild</mark>, <mark class="unknown">unknown</mark> <mark class="men">men</mark>. <mark class="most">Most</mark> <mark class="of">of</mark> <mark class="the">the</mark> <mark class="confidences">confidences</mark> <mark class="were">were</mark> <mark class="unsought">
  unsought</mark>—<mark class="frequently">frequently</mark> <mark class="i">I</mark> <mark class="have">have</mark> <mark class="feigned">feigned</mark> <mark class="sleep">sleep</mark>, <mark class="preoccupation">preoccupation</mark>, <mark class="or">or</mark> <mark class="a">a</mark> <mark class="hostile">hostile</mark> <mark class="levity">levity</mark> <mark class="when">when</mark> <mark class="i">I</mark> <mark class="realized">realized</mark> <mark class="by">by</mark> <mark class="some">some</mark> <mark class="unmistakable">unmistakable</mark> <mark class="sign">sign</mark> <mark class="that">that</mark> <mark class="an">an</mark> <mark class="intimate">
  intimate</mark> <mark class="revelation">revelation</mark> <mark class="was">was</mark> <mark class="quivering">quivering</mark> <mark class="on">on</mark> <mark class="the">the</mark> <mark class="horizon">horizon</mark>; <mark class="for">for</mark> <mark class="the">the</mark> <mark class="intimate">intimate</mark> <mark class="revelations">revelations</mark> <mark class="of">of</mark> <mark class="young">young</mark> <mark class="men">men</mark>, <mark class="or">or</mark> <mark class="at">at</mark> <mark class="least">least</mark> <mark class="the">the</mark> <mark class="terms">terms</mark> <mark class="in">in</mark> <mark class="which">which</mark> <mark class="they">they</mark> <mark class="express">express
  </mark> <mark class="them">them</mark>, <mark class="are">are</mark> <mark class="usually">usually</mark> <mark class="plagiaristic">plagiaristic</mark> <mark class="and">and</mark> <mark class="marred">marred</mark> <mark class="by">by</mark> <mark class="obvious">obvious</mark> <mark class="suppressions">suppressions</mark>. <mark class="reserving">Reserving</mark> <mark class="judgements">judgements</mark> <mark class="is">is</mark> <mark class="a">a</mark> <mark class="matter">matter</mark> <mark class="of">of</mark> <mark class="infinite">infinite</mark> <mark class="hope">hope</mark>. <mark class="i">I</mark> <mark class="am">am</mark> <mark class="still">still</mark> <mark class="a">a 
  </mark> <mark class="little">little</mark> <mark class="afraid">afraid</mark> <mark class="of">of</mark> <mark class="missing">missing</mark> <mark class="something">something</mark> <mark class="if">if</mark> <mark class="i">I</mark> <mark class="forget">forget</mark> <mark class="that">that</mark>, <mark class="mark">as</mark> <mark class="my">my</mark> <mark class="father">father</mark> <mark class="snobbishly">snobbishly</mark> <mark class="suggested">suggested</mark>, <mark class="and">and</mark> <mark class="i">I</mark> <mark class="snobbishly">snobbishly</mark> <mark class="repeat">repeat</mark>, <mark class="a">a</mark> <mark class="sense">sense</mark> <mark class="of">of</mark> <mark class="the">the 
  </mark> <mark class="fundamental">fundamental</mark> <mark class="decencies">decencies</mark> <mark class="is">is</mark> <mark class="parcelled">parcelled</mark> <mark class="out">out</mark> <mark class="unequally">unequally</mark> <mark class="at">at</mark> <mark class="birth">birth</mark>.</p>`
];

let selected;

const vis = (newTop = 5) => {

  d3.csv("data/dataset.csv", (data) => {
    // General event type for selections, used by d3-dispatch
    // https://github.com/d3/d3-dispatch
    const dispatchString = "selectionUpdated";

    let top = newTop;

    function getTopSorted(text, top) {
      return data.sort(function(b, a) {
        return b[text] - a[text];
      }).slice(data.length-top, data.length);
    }

    let aliceSort = getTopSorted("alice_prob", top);
    let austenSort = getTopSorted("austen_prob", top);
    let gatsbySort = getTopSorted("gatsby_prob", top);

    if (selected != null) {
      deleteChartsKeepSelection(selected);
    } else {
      deleteCharts();
    }

    function createChart(id, sortData) {
      if (id === "#barchart_alice") {
        obj = barchart_alice();
        attr = "alice_prob";
      }
      if (id === "#barchart_austen") {
        obj = barchart_austen();
        attr = "austen_prob";
      }
      if (id === "#barchart_gatsby") {
        obj = barchart_gatsby();
        attr = "gatsby_prob";
      }
      return obj.x(d => d[attr])
      .xLabel("UNIPROB")
      .y(d => d.unigram)
      .yLabel("UNIGRAM")
      .yLabelOffset(40)
      .selectionDispatcher(d3.dispatch(dispatchString))
      (id, sortData);
    }

    createChart("#barchart_alice", aliceSort);
    createChart("#barchart_austen", austenSort);
    createChart("#barchart_gatsby", gatsbySort);

    d3.select("#barchart_alice").on("click", () => {selected = 0; replaceChart(0)});
    d3.select("#barchart_austen").on("click", () => {selected = 1; replaceChart(1)});
    d3.select("#barchart_gatsby").on("click", () => {selected = 2; replaceChart(2)});

      function replaceChart(data_idx) {
        ids = ["#barchart_alice", "#barchart_austen", "#barchart_gatsby"];
        sortedData = [aliceSort, austenSort, gatsbySort];
        d3.select("#textbox").html(passages[data_idx]);
        colors = ["#52b7d8", "#e16031", "#ffab40"];
        for (i = 0; i < sortedData[data_idx].length; i++) {
          d3.select("#textbox").selectAll("." + sortedData[data_idx][i].unigram).style("color", colors[data_idx]);
        }
        for (i = 0; i < ids.length; i++) {
          selection = d3.select(ids[i]);
          selection.selectAll("svg").remove();
          createChart(ids[i], sortedData[data_idx]);
        }
      }

      function deleteChartsKeepSelection(data_idx) {
        ids = ["#barchart_alice", "#barchart_austen", "#barchart_gatsby"];
        sortedData = [aliceSort, austenSort, gatsbySort];
        d3.select("#textbox").html(passages[data_idx]);
        colors = ["#52b7d8", "#e16031", "#ffab40"];
        for (i = 0; i < sortedData[data_idx].length; i++) {
          d3.select("#textbox").selectAll("." + sortedData[data_idx][i].unigram).style("color", colors[data_idx]);
        }
        for (i = 0; i < ids.length; i++) {
          selection = d3.select(ids[i]);
          selection.selectAll("svg").remove();
        }
      }

      function deleteCharts() {
        ids = ["#barchart_alice", "#barchart_austen", "#barchart_gatsby"];
        sortedData = [aliceSort, austenSort, gatsbySort];
        colors = ["#52b7d8", "#e16031", "#ffab40"];
        for (i = 0; i < ids.length; i++) {
          selection = d3.select(ids[i]);
          selection.selectAll("svg").remove();
        }
      }
  });

};

vis();