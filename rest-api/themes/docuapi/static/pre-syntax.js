jQuery(document).ready(function() {
  jQuery('pre-syntax')
    .find('pre')
    .css('float', 'none')
    .css('background-color', '#f1f6f9')
    .css('text-shadow', 'none');
  jQuery('pre-syntax')
    .find('.p')
    .css('color', '#828281'); 
  jQuery('pre-syntax')
    .find('.err')
    .css('background-color', '#f1f6f9')
    .css('color', '#828281'); 
});
