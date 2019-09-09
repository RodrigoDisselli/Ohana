var codeBox = document.getElementById("code-box");

codeBox.value = "<script src=" + "https://ohana.s3.us-east-2.amazonaws.com/js/defineStyle.js></script>\n<script> defineStyle(" + inputPrimaryColor.value + "," + inputBorderRadius.value + "," + inputBackgroundColor.value + "," + inputTextColor.value + ", #AAAAAA, 10)</script>"