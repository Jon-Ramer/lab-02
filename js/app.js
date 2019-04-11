'use strict';

const all_animals = [];

function Animal (horn){
    this.image_url = horn.image_url;
    this.title = horn.title;
    this.description = horn.description;
    this.keyword = horn.keyword;
    this.horns = horn.horns;
  all_animals.push(this);
}

Animal.prototype.render = function(){
  const photo_section_html = $('#photo-template').html()

  $('main').append('<section id="clone"></section>');
  $('#clone').html(photo_section_html);
  $('#clone').find('h2').text(this.name);
  $('#clone').find('img').attr('src', this.image_url);
  $('#clone').find('p').text(this.title).text(this.description);
  $('#clone').attr('id', '');
}

const test_animal = new Animal({});
test_animal.render();

Animal.get_animal_data = function(){
  $.get('../data/page-1.json', 'json').then( data => {
    data.forEach(horn => new Animal(horn));
    all_animals.forEach(horn => horn.render());
})
}

$('select').on('change', function() {
    select_value = $(this).val();
    $('select').append('<option id="horny_animals"></option>');
    $('#horny_animals').text(this.keyword);
    $('#horny_animals').attr('id','')
    
});
