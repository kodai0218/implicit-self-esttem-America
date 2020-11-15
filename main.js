//画像パス
var repo_site = "https://kodai0218.github.io/implicit-self-esttem-America/";

// 乱数
var l = 8;
var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var cl = c.length;
var r_num = "";
for(var i=0; i<l; i++){
  r_num += c[Math.floor(Math.random()*cl)];
}
// 日付時刻
var time_date= new Date();
var year = time_date.getFullYear();
var month = time_date.getMonth()+1;
var date = time_date.getDate();
var hour = time_date.getHours();
var minute = time_date.getMinutes();
var second = time_date.getSeconds();
// ID
var exp_id = year +'_'+ month +'_'+ date +'_'+ hour +'_'+ minute +'_'+ second +'_' + r_num;


jsPsych.data.addProperties({
  subject: r_num
});

var random = Math.floor( Math.random() * 2 )

jsPsych.data.addProperties({
  condition: random
});

var ic = {
    type: 'survey-multi-select',
    questions: [{
        prompt: "<span style = 'font-size: 14pt;'><b>Please check the box if you agree to participate in the experiment after carefully reading and understanding the above information. If you do not agree, please close the window.</b></span>",
        options: ["<span style = 'font-size: 18pt; text-align: center;'>I agree to participate in the research after reading and understanding the instructions carefully.</span>"],
        required: true,
        name: 'approval'
    }],
    preamble: "<div style = 'text-align: center'><h1>Request for Corporation about the Values Survey</h1></div>"+"<div><br></div>"+"<div style = 'font-size: 1.5em; text-align: center'><p><b>You will not be able to complete the answer on your smartphone.<br><br>Please access the site on a computer with a keyboard. (Laptops are acceptable.)</b><p></div>"+
    "<div style = 'font-size: 14pt; text-align: left;'><br><p>Kwansei Gakuin University　Hiroshi Shimizu</br></br>The purpose of this survey is to survey you about your usual thoughts. Please allow approximately 15 minutes for a response.</br>If you lose your internet connection while answering the question, you will not be able to finish the question correctly. Please answer at a place with a good connection.</p>"+"<p> All responses will be treated as anonymous, so no personal information will be made public.</br></br>Please contact the investigator if you have any questions about this study or if you encounter any problems.</p></div>",
    button_label: 'Next'
};

var pc_check = {
  type: "html-keyboard-response",
  stimulus:"<p style = 'font-size:1.5em; text-align: center'>Verify that you are accessing the site on your computer. Press the spacebar to move on.</p>",
  choices: ["space"]
};


var name_get = {
    type: 'survey-text',
    questions: [
          {prompt: '<p>We ask you to fill in your name as we need it for the next experiment.</p>'+'<p>We will take great care to protect your privacy.</p>'+'Please enter your <b>last name</b> (e.g.<b> Davis<b/> if you are Noah Davis).', name: 'name_up', required:'True'},
          {prompt: 'Please enter your <b>first </b>name (e.g., <b>Noah</b> if you are Noah Davis).', name: 'name_do', required:'True'},
        ],
    button_label: 'Next',
    on_finish: function(data){
      nameup = JSON.parse(data.responses).name_up;
      jsPsych.data.addProperties({name01: nameup});
      namedo = JSON.parse(data.responses).name_do;
      jsPsych.data.addProperties({name02: namedo});
    }
};



//教示文を読んで入力してもらう
var iat_instruction_test = {
  type: "html-keyboard-response",
  stimulus:"<img src='https://kodai0218.github.io/implicit-self-esttem-America/Picture1.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>Practice.</p>"+"<p>This is a keyboard-based word classification task.</p>"+"<p>If you think the word in the middle of the screen fits into the <b> 'Good' </b>or<b> 'Bug' </b>category in the upper left corner, press the<b> 'E' </b>key,or if you think the word in <br>the upper right corner fits into the<b> 'Bad' </b>category,Press the<b> 'I'</b> key.</p>"+ "<p><b>The categories on the left and right are fixed, and the words in the middle change.</b></p>"+"<p>If you make a mistake, an X(wrong) will appear in the center of the screen, so press the opposite key.</br>Press the <b> spacebar </b>to start.</p>"+"<p style = 'font-size: 1.5em;'>When a word appears, please answer it as soon as possible.</p>",
  choices: ["space"]
};

var iat_instruction = {
  type: "html-keyboard-response",
  stimulus:"<img src='https://kodai0218.github.io/implicit-self-esttem-America/Picture2.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>We're on.</p>"+"<p style = 'font-size: 2em;'><b>The categories on the left and right have changed.</b></p>"+"<p>This is a keyboard-based word classification task.</p>"+"<p>If you think the word in the middle of the screen fits into the<b> 'Good' </b> or <b> 'Self' </b>category in the upper left corner, press<b> 'E'. </b><br>If you think the word in the upper right corner fits into the<b> 'Bad' </b>category, press<b> 'I'. </b></p>"+ "<p><b>The categories on the left and right are fixed, and the words in the middle change.</b></p>"+"<p>If you make a mistake, an X (wrong) will appear in the center of the screen, so press the opposite key.</br>Press the<b> spacebar </b>to start.</p>"+"<p style = 'font-size: 1.5em;'>When a word appears, please answer it as soon as possible.</p>",
  choices: ["space"]
};

var iat_brakegood = {
  type: "html-keyboard-response",
  stimulus:"<img src='https://kodai0218.github.io/implicit-self-esttem-America/Picture2.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>Break time.</p>"+"<p>This is a keyboard-based word classification task.</p>"+"<p>If you think the word displayed in the center of the screen falls into the category of <b> 'Good' </b>or<b> 'Self' </b>in the upper left corner, press the<b> 'E' </b> key, <br>If you think you fit into the<b> 'Bad' </b> category in the upper right hand corner, press the <b>'I'</b> key.</p>"+ "<p><b>The categories on the left and right are fixed, and the words in the middle change.</b></p>"+"<p>If you make a mistake, an X (wrong) will appear in the center of the screen, so press the opposite key.</br>Press the <b>spacebar </b>to start.</p>"+"<p style = 'font-size: 1.5em;'>When a word appears, please answer it as soon as possible.</p>",
  choices: ["space"]
};


var iat_brakechange = {
  type: "html-keyboard-response",
  stimulus:"<img src='https://kodai0218.github.io/implicit-self-esttem-America/Picture3.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>Break time.</p>"+"<p>This is a keyboard-based word classification task.</p>"+"<p style = 'font-size: 2em;'><b>The categories on the left and right have changed.</b></p>"+"<p>If you think the word displayed in the center of the screen fits into the<b>'Good'</b>category in the upper left corner, press the<b>'E'</b> key, <br>If you think you fall into the<b> 'Bad' </b>or<b> 'Self' </b>category in the upper right corner, press the<b> 'I' </b>key.</p>"+ "<p><b>The categories on the left and right are fixed, and the words in the middle change.</b></p>"+"<p>If you make a mistake, an X (wrong) will appear in the center of the screen, so press the opposite key.</br>Press the <b>spacebar </b>to start.</p>"+"<p style = 'font-size: 1.5em;'>When a word appears, please answer it as soon as possible.</p>",
  choices: ["space"]
};

var iat_brakebad = {
  type: "html-keyboard-response",
  stimulus:"<img src='https://kodai0218.github.io/implicit-self-esttem-America/Picture3.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>Break time.</p>"+"<p>This is a keyboard-based word classification task.</p>"+"<p>If you think the word in the middle of the screen fits into the<b> 'Good' </b>category in the upper left corner, press the <b> 'E' </b>key, <br>If you think you fall into the<b> 'Bad' </b>or<b> 'Self' </b>category in the upper right hand corner, press the<b> 'I' </b>key.</p>"+ "<p><b>The categories on the left and right are fixed, and the words in the middle change.</b></p>"+"<p>If you make a mistake, an X (wrong) will appear in the center of the screen, so press the opposite key.</br>Press the<b> spacebar </b>to start.</p>"+"<p style = 'font-size: 1.5em;'>When a word appears, please answer it as soon as possible.</p>",
  choices: ["space"]
};


//練習試行
var trial_test01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you make a mistake, a "X" will be displayed. Press the opposite key when the "X" is displayed.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["Good","Bug"],
      right_category_label: ["Bad"],
      response_ends_trial: true
    }
    ],
  //IATで使う刺激
  timeline_variables: [
    /* 快語 */
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "beetle", stim_key_association: "left"},
    {stimulus: "brutal", stim_key_association: "right"},
    {stimulus: "dislike", stim_key_association: "right"},
    {stimulus: "nasty", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "ugly", stim_key_association: "right"},
    {stimulus: "splendid", stim_key_association: "left"},
    {stimulus: "beetle", stim_key_association: "left"},
    {stimulus: "glad", stim_key_association: "left"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "bee", stim_key_association: "left"}
    ],
  randomize_order: true
};


// SC-IAT：研究1バージョン
//Block1:self+good vs bad
var trial01_prac01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you make a mistake, a "X" will be displayed. If you see a "X" on the screen, press the opposite key.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["Good","Self"],
      right_category_label: ["Bad"],
      response_ends_trial: true
    }
    ],
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "me", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "me", stim_key_association: "left"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},

    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "I", stim_key_association: "left"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "I", stim_key_association: "left"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "stupid", stim_key_association: "right"}
    ],
  randomize_order: true
};


//Block3:self+bad
var trial01_prac02 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you make a mistake, a "X" will be displayed. Press the opposite key when the "X" is displayed.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["Good"],
      right_category_label: ["Bad","Self"],
      response_ends_trial: true
    }
    ],
  //IATで使う刺激
  timeline_variables: [
 {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
  {stimulus: "I", stim_key_association: "right"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "right"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "I", stim_key_association: "right"},
  {stimulus: "nice", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"}
    ],
  randomize_order: true
};

//main1:self+good vs bad
var trial01_main01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you make a mistake, a "X" will be displayed. Press the opposite key when the "X" is displayed.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["Good", "Self"],
      right_category_label: ["Bad"],
      response_ends_trial: true
    }
    ],
  //IATで使う刺激
  timeline_variables: [
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
   {stimulus: "beautiful", stim_key_association: "left"},
   {stimulus: "stupid", stim_key_association: "right"},
   {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
   {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"}
    ],
  randomize_order: true
};


//Block4:self+bad
var trial01_main02 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you make a mistake, a "X" will be displayed. Press the opposite key when the "X" is displayed.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["Good"],
      right_category_label: ["Bad", "Self"],
      response_ends_trial: true
    }
    ],
  //IATで使う刺激
  timeline_variables: [
     /* 快語32 */
    {stimulus: "I", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
     {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
     {stimulus: "I", stim_key_association: "right"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
     {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "I", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "I", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "I", stim_key_association: "right"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "stupid", stim_key_association: "right"}
    ],
 randomize_order: true
};



// SC-IAT：研究3バージョン
//Block1:self+good vs bad
var trial03_prac01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you make a mistake, a "X" will be displayed. Press the opposite key when the "X" is displayed.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["Good", "Self"],
      right_category_label: ["Bad"],
      response_ends_trial: true
    }
    ],
  //IATで使う刺激
  timeline_variables: [
  {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "me", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "myself", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "me", stim_key_association: "left"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "myself", stim_key_association: "left"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "my", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "my", stim_key_association: "left"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "I", stim_key_association: "left"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "I", stim_key_association: "left"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"}
    ],
  randomize_order: true,
  on_finish: function(data){
    namedo = "abc"
    jsPsych.data.addProperties({
    name01: namedo,
    name02: namedo});
  }
};


//Block3:self+bad
var trial03_prac02 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you make a mistake, a "X" will be displayed. Press the opposite key when the "X" is displayed.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["Good"],
      right_category_label: ["Bad", "Self"],
      response_ends_trial: true
    }
    ],
  //IATで使う刺激
  timeline_variables: [
 {stimulus: "my", stim_key_association: "right"},
  {stimulus: "I", stim_key_association: "right"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "right"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "my", stim_key_association: "right"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "myself", stim_key_association: "right"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "I", stim_key_association: "right"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "myself", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"}
    ],
  randomize_order: true
};

//main1:self+good vs bad
var trial03_main01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you make a mistake, a "X" will be displayed. Press the opposite key when the "X" is displayed.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["Good", "Self"],
      right_category_label: ["Bad"],
      response_ends_trial: true
    }
    ],
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "myself", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: "my", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
   {stimulus: "beautiful", stim_key_association: "left"},
   {stimulus: "stupid", stim_key_association: "right"},
   {stimulus: "my", stim_key_association: "left"},
   {stimulus: "myself", stim_key_association: "left"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "myself", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "myself", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "my", stim_key_association: "left"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: "dirty", stim_key_association: "right"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"},
  {stimulus: "me", stim_key_association: "left"},
  {stimulus: "gross", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "I", stim_key_association: "left"},
  {stimulus: "my", stim_key_association: "left"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "myself", stim_key_association: "left"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "beautiful", stim_key_association: "left"},
  {stimulus: "nice", stim_key_association: "left"},
  {stimulus: "stupid", stim_key_association: "right"},
  {stimulus: "wonderful", stim_key_association: "left"},
  {stimulus: "my", stim_key_association: "left"},
  {stimulus: "excellent", stim_key_association: "left"},
  {stimulus: "terrible", stim_key_association: "right"}
    ],
  randomize_order: true
};


//Block4:self+bad
var trial03_main02 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you make a mistake, a "X" will be displayed. Press the opposite key when the "X" is displayed.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["Good"],
      right_category_label: ["Bad", "Self"],
      response_ends_trial: true
    }
    ],
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "I", stim_key_association: "right"},
    {stimulus: "myself", stim_key_association: "right"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "my", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "my", stim_key_association: "right"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
     {stimulus: "my", stim_key_association: "right"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
     {stimulus: "I", stim_key_association: "right"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
     {stimulus: "myself", stim_key_association: "right"},
    {stimulus: "I", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "dirty", stim_key_association: "right"},
    {stimulus: "I", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "my", stim_key_association: "right"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "myself", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "me", stim_key_association: "right"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "my", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "terrible", stim_key_association: "right"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "stupid", stim_key_association: "right"},
    {stimulus: "excellent", stim_key_association: "left"},
    {stimulus: "myself", stim_key_association: "right"},
    {stimulus: "wonderful", stim_key_association: "left"},
    {stimulus: "nice", stim_key_association: "left"},
    {stimulus: "myself", stim_key_association: "right"},
    {stimulus: "beautiful", stim_key_association: "left"},
    {stimulus: "I", stim_key_association: "right"},
    {stimulus: "gross", stim_key_association: "right"},
    {stimulus: "stupid", stim_key_association: "right"}
    ],
  randomize_order: true
};

var experimentend = {
    type: 'instructions',
    pages: ["<p>That's all for the assignment. Thank you for  your corporation.</p>"+"<p>次へを押していただくと、クラウドワークスの支払コード欄に記入していただく文字列が表示されます。<b>（ここの文章どうしましょう）</b></p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "Next",
    on_finish: function() {
    firebase.database().ref(exp_id).set({
      data: jsPsych.data.get().values()
    })
   }
};

var endmessage = {
    type: 'instructions',
    pages: ["<p>調査にご協力いただき、どうもありがとうございました。調査終了後、以下の8桁の文字列をクラウドワークスの支払コード欄に記入して作業を完了させてください。</p>"+"<p>入力間違い防止のため、必ずコピー＆ペーストしてください。正しく記入されたことが確認できた場合に、報酬をお支払いします。</p><b>ここの文章悩んでます</b>"+ r_num +"<p>ただし、上記コードを間違いなく納品して下さっても、ご回答の性別がクラウドワークスでのご登録と異なる場合、</br>いくつかの項目へのご回答が不適切だった場合には、謝礼をお支払いできませんので，あしからずご了承下さい</p>" + "<p>「次へ」をクリックして画面が白転してから、ウィンドウを閉じてください。</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "Next"

};






/* 実験の提示の順番 */
var timeline = [];
timeline.push(ic);
timeline.push(pc_check);


timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});


timeline.push(name_get);
timeline.push(iat_instruction_test);
timeline.push(trial_test01);
timeline.push(iat_instruction);
timeline.push(trial01_prac01);
timeline.push(iat_brakegood);
timeline.push(trial01_main01);
timeline.push(iat_brakechange);
timeline.push(trial01_prac02);
timeline.push(iat_brakebad);
timeline.push(trial01_main02);



timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});




timeline.push(experimentend);
timeline.push(endmessage);
