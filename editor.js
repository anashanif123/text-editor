
var inputText = document.getElementById('inputs');

document.getElementById('bold').addEventListener('click', function() {
    // var inputText = document.getElementById('inputs');
    inputText.style.fontWeight = (inputText.style.fontWeight === 'bold'? 'normal' : 'bold');
  });
  
  document.getElementById('italic').addEventListener('click', function()  {
    // var inputText = document.getElementById('inputs');
    inputText.style.fontStyle = (inputText.style.fontStyle === 'italic'? 'normal' : 'italic');
  });
  
  document.getElementById('underline').addEventListener('click', function()  {
    inputText.style.textDecoration = (inputText.style.textDecoration === 'underline'? 'none' : 'underline');
  });
  
  document.getElementById('fontsize').addEventListener('click', function()  {
    // var inputText = document.getElementById('inputs');
    var fontSize = document.getElementById('sizes').value;
    inputText.style.fontSize = fontSize;
  });
  
  document.getElementById('fontfamily').addEventListener('click',function ()  {
    // var inputText = document.getElementById('inputs');
    var fontFamily = document.getElementById('fontfamilies').value;
    inputText.style.fontFamily = fontFamily;
  });
  
  document.getElementById('textcolor').addEventListener('click',function ()  {
    var inputText = document.getElementById('inputs');
    var colorPicker = document.getElementById('textcolor').children[0];
    inputText.style.color = colorPicker.value;
});
document.getElementById('clear').addEventListener('click', function() {
  var inputText = document.getElementById('inputs');
  inputText.value = ''; 
  inputText.style.fontWeight = 'normal';
  inputText.style.fontStyle = 'normal';
  inputText.style.textDecoration = 'none';
  inputText.style.fontSize = ''; 
  inputText.style.fontFamily = ''; 
  inputText.style.color = ''; 
});