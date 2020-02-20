$(document).ready(function(){
    for(var i=1;i<152;i++)
    {
        $("#pokemon").append("<img src=http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+i+".png id="+i+">");
    }
    $(document).on('click', 'img', function(){
        var x=$(this).attr("id");
        $.get("https://pokeapi.co/api/v2/pokemon/"+x+"/", function(resp) {
            var name = "";
            name += "<h3>" + resp.name + "</h3>";
            $("#name").html("<div>"+name+"</div>");
        }, "json");
        $("#imagen").html("<img src=http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+x+".png id="+x+">");
        $.get("https://pokeapi.co/api/v2/pokemon/"+x+"/", function(resp1) {
            var tipo = "";
            tipo += "<h3>Types</h3>";
            tipo += "<ul>"; 
            for(var i = 0; i < resp1.types.length; i++) {
                tipo += "<li>" + resp1.types[i].type.name + "</li>";
            }
            tipo += "</ul>";
            $("#tipo").html("<div>"+tipo+"</div>");
        }, "json");
        $.get("https://pokeapi.co/api/v2/pokemon/"+x+"/", function(resp2) {
            var height = "";
            height += "<h3>Height</h3>";
            height += "<ul>";
            height += "<li>" + resp2.height + "</li>";
            height += "</ul>";
            $("#height").html("<div>"+height+"</div>");
        }, "json");
        $.get("https://pokeapi.co/api/v2/pokemon/"+x+"/", function(resp3) {
            var weight = "";
            weight += "<h3>Weight</h3>";
            weight += "<ul>";
                weight += "<li>" + resp3.weight + "</li>";
                weight += "</ul>";
            $("#weight").html("<div>"+weight+"</div>");
        }, "json");
    })
})