// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">Tontolo fanoratam-pandaharana ara-pijery</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Hijery ny kaody JavaScript namboarina.</span><span id="linkTooltip">Hitahiry ary hampirohy amin\'ny bolongana.</span><span id="runTooltip">Handefa ny fandaharana voafaritry ny bolongana ao amin\'ny erana iasana.</span><span id="runProgram">Handefa ny fandaharana</span><span id="resetProgram">Averina</span><span id="dialogOk">OK</span><span id="dialogCancel">Aoka ihany</span><span id="catLogic">Lôjika</span><span id="catLoops">Tondro mifolaka</span><span id="catMath">Matematika</span><span id="catText">Soratra</span><span id="catLists">Lisitra</span><span id="catColour">Loko</span><span id="catVariables">Ova</span><span id="catProcedures">Paika</span><span id="httpRequestError">Nisy olana tamin\'ilay hataka.</span><span id="linkAlert">Zarao amin\'ity rohy ity ny bolonganao: \n\n%1</span><span id="hashError">Miala tsiny, tsy miady amin\'ny fandaharana notehirizina \'%1\'.</span><span id="xmlError">Tsy nahasokatra ny rakitra voatahirinao. Mety namboarina tamin\'ny versionan\'i Blockly hafa angamba ilay izy?</span><span id="listVariable">lisitra</span><span id="textVariable">soratra</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof puzzlepage == 'undefined') { var puzzlepage = {}; }


puzzlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_country1">Australia</span><span id="Puzzle_country1Flag">flag_au.png</span><span id="Puzzle_country1FlagHeight">50</span><span id="Puzzle_country1FlagWidth">100</span><span id="Puzzle_country1Language">English</span><span id="Puzzle_country1City1">Melbourne</span><span id="Puzzle_country1City2">Sydney</span><span id="Puzzle_country1HelpUrl">https://en.wikipedia.org/wiki/Australia</span><span id="Puzzle_country2">Germany</span><span id="Puzzle_country2Flag">flag_de.png</span><span id="Puzzle_country2FlagHeight">60</span><span id="Puzzle_country2FlagWidth">100</span><span id="Puzzle_country2Language">German</span><span id="Puzzle_country2City1">Berlin</span><span id="Puzzle_country2City2">Munich</span><span id="Puzzle_country2HelpUrl">https://en.wikipedia.org/wiki/Germany</span><span id="Puzzle_country3">China</span><span id="Puzzle_country3Flag">flag_cn.png</span><span id="Puzzle_country3FlagHeight">66</span><span id="Puzzle_country3FlagWidth">100</span><span id="Puzzle_country3Language">Chinese</span><span id="Puzzle_country3City1">Beijing</span><span id="Puzzle_country3City2">Shanghai</span><span id="Puzzle_country3HelpUrl">https://en.wikipedia.org/wiki/China</span><span id="Puzzle_country4">Brazil</span><span id="Puzzle_country4Flag">flag_br.png</span><span id="Puzzle_country4FlagHeight">70</span><span id="Puzzle_country4FlagWidth">100</span><span id="Puzzle_country4Language">Portuguese</span><span id="Puzzle_country4City1">Rio de Janeiro</span><span id="Puzzle_country4City2">São Paulo</span><span id="Puzzle_country4HelpUrl">https://en.wikipedia.org/wiki/Brazil</span><span id="Puzzle_flag">flag:</span><span id="Puzzle_language">Fiteny:</span><span id="Puzzle_languageChoose">fidio...</span><span id="Puzzle_cities">tanàna:</span><span id="Puzzle_error0">Tena tsara! Marina daholo ny bolongana %1.</span><span id="Puzzle_error1">Saika! Bolongana iray sisa no diso.</span><span id="Puzzle_error2">Bolongana %1 no diso.</span><span id="Puzzle_tryAgain">Diso ilay bolongana mangirangirana.\nAndramo fanindroany.</span></div>';
};


puzzlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1><span id="title"><a href="../index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">Blockly</a> : Piozila</span></h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp; &nbsp;<button id="helpButton">Fanoroana</button>&nbsp; &nbsp;<button id="checkButton" class="primary">Hanamarina ny valiny</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each country (green), attach its flag, choose its language, and make a stack of its cities.</div><iframe style="height: 200px; width: 100%; border: none;" src="readonly.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22country%22+x%3D%225%22+y%3D%225%22%3E%3Cmutation+country%3D%221%22%3E%3C%2Fmutation%3E%3Ctitle+name%3D%22LANG%22%3E1%3C%2Ftitle%3E%3Cvalue+name%3D%22FLAG%22%3E%3Cblock+type%3D%22flag%22%3E%3Cmutation+country%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cstatement+name%3D%22CITIES%22%3E%3Cblock+type%3D%22city%22%3E%3Cmutation+country%3D%221%22+city%3D%222%22%3E%3C%2Fmutation%3E%3Cnext%3E%3Cblock+type%3D%22city%22%3E%3Cmutation+country%3D%221%22+city%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E"></iframe>' + apps.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


puzzlepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>';
};
