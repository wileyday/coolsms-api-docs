jQuery(document).ready(function() {
  jQuery('pre-syntax')
    .find('.s2')
    .css('color','rgb(223, 50, 240)');
  jQuery('pre-syntax')
    .children('.highlight')
    .css('background', 'none');
  jQuery('pre-syntax')
    .find('pre')
    .css('float', 'none')
    .css('text-shadow', 'none')
    .css('background-color', '#f1f6f9');
  jQuery('pre-syntax')
    .find('.p')
    .css('color', '#828281'); 
  jQuery('pre-syntax')
    .find('.err')
    .css('background-color', '#f1f6f9')
    .css('color', '#828281'); 
  jQuery('pre-syntax')
    .css('float','left')
    .css('width','50%');
  jQuery('blockquote')
    .css('margin-top','-3%');
  jQuery('pre-syntax')  
    .children('.highlight')
    .children('pre')
    .css('width','100%');
});
