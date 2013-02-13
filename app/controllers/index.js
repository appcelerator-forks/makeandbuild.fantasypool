// function addPlayer() {
//   var player = Alloy.createModel('player', {name:'Jamal Charles', team:'Kansas City', position: 'RB'}); 
//   player.save();
//   
//   Alloy.Collections.player.fetch();
// }

// function doTransform(model) {
//   var transform = model.toJSON();
// 
//   // transform.dateSince = moment(transform.dateCreated,'YYYYMMDDHHmmss').fromNow();
//   // switch(transform.mood) {
//   //   case 'mad':
//   //     transform.moodColor = '#a00';
//   //     break;
//   //   case 'happy':
//   //     transform.moodColor = '#0a0';
//   //     break;
//   //   case 'neutral':
//   //   default:
//   //     transform.moodColor = '#88f';
//   //     break;
//   // }
//   return transform;
// }

function addPlayer() {
  Alloy.createController('add').getView().open();
}

// Alloy.Collections.player.comparator = function(entry1, entry2) {
//   return entry1.get('name') > entry2.get('name') ? -1 : 1;
// }

// var player = Alloy.createModel('player', {name:'Jamal Charles', team:'Kansas City', position: 'RB'}); 
// player.save();



function IndexOpen(e) {
    $.logo.init({ image: '/images/alloy.png', width: 216, height: 200 });
}

// Initialize the drawer with our buttons
$.drawer.init({
    mainWindow: $.index,
    buttons: [
        { id: 'One', title: 'Scores', click: function (e) { alert("Scores"); }, enabled: function (e) { return false; } },
        { id: 'Two', title: 'Trades',  click: function (e) { alert("Trades"); } },    
        { id: 'Three', title: 'Lineups',  click: function (e) { alert("Lineups"); } }    
    ], 
    autoClose: true,
    gutter: 5,
    overrideMenu: false, // Set to true to see the drawer vs the activity menu
    annoy: true
});
$.drawer.checkEnabled();

Alloy.Collections.player.fetch();

$.index.open();


// function doClick(e) {  
//     alert($.label.text);
// }
// 
// $.index.open();
