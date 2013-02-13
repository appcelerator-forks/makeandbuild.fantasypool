function addPlayer() {
  Alloy.createController('add').getView().open();
}


// function IndexOpen(e) {
//     $.logo.init({ image: '/images/alloy.png', width: 216, height: 200 });
// }

if (OS_IOS) {
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
}

Alloy.Collections.player.fetch();

$.index.open();