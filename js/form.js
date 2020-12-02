class Form {
    constructor() {

    }
    display() {
        var title = createElement('h2'); 
        title.html("Car Racing Game");
        title.position(150,30);

        var input = createInput("Name");
        input.position(300,160);
        
        var button = createButton("play");
        button.position(300,200);

        button.mousePressed(function() {
            input.hide();
            button.hide();

            var name = input.value();

            var greeting = createElement('h3');
            greeting.html("Hello " + name);
            greeting.position(300,160);

            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
        });       
    }
}
