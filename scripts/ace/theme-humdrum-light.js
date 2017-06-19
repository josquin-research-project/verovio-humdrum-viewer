define("ace/theme/humdrum_light",["require","exports","module","ace/lib/dom"],function(e,t,n) {
  t.isDark=false,
  t.cssClass="ace-humdrum-light",
  t.cssText=".ace-humdrum-light .ace_gutter {background: #fbf1d3;color: #333}\
  .ace-humdrum-light .ace_print-margin {width: 1px;background: #e8e8e8}\
  .ace-humdrum-light {background-color: #FDF6E3;color: black}\
  .ace-humdrum-light .ace_cursor {color: black}\
  .ace-humdrum-light .ace_marker-layer .ace_selection {background: rgba(7, 54, 67, 0.09)}\
  .ace-humdrum-light.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FDF6E3;}\
  .ace-humdrum-light .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}\
  .ace-humdrum-light .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(147, 161, 161, 0.50)}\
  .ace-humdrum-light .ace_marker-layer .ace_active-line {background: #EEf3D5}\
  .ace-humdrum-light .ace_gutter-active-line {background-color : #EDE5C1}\
  .ace-humdrum-light .ace_marker-layer .ace_selected-word {border: 1px solid #073642}\
  .ace-humdrum-light .ace_invisible {color: rgba(147, 161, 161, 0.50)}\
  .ace-humdrum-light .ace_bibliographic {color: green}\
  .ace-humdrum-light .ace_exinterp {color: red}\
  .ace-humdrum-light .ace_interp {color: darkviolet}\
  .ace-humdrum-light .ace_comment {color: darkblue}\
  .ace-humdrum-light .ace_unknown {color: darkgoldenrod}\
  .ace-humdrum-light .ace_comment.ace_global {color: blue}\
  .ace-humdrum-light .ace_barline {color: gray; background-color: #00000010}\
  .ace-humdrum-light .ace_invalid.ace_tab {background-color: red}\
  .ace-humdrum-light .ace_invalid.ace_space {background-color: blue}\
  .ace-humdrum-light .ace_kern.ace_note {color: black; font-weight:bold}\
  .ace-humdrum-light .ace_kern.ace_other {color: brown}\
  .ace-humdrum-light .ace_kern.ace_duration {color: gray}\
  .ace-humdrum-light .ace_dot {color: gray}\
  .ace-humdrum-light .ace_fold {background-color: #268BD2;border-color: #586E75}\
  .ace-humdrum-light .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHjy8NJ/AAjgA5fzQUmBAAAAAElFTkSuQmCC) right repeat-y}";
  var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)
})
