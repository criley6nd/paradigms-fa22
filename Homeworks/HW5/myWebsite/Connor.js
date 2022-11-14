players = [
    ['Kam Chancellor', "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/xolsaez2rrbkk825znnx"],
    ['Ichiro', 'https://www.gannett-cdn.com/presto/2019/03/21/USAT/0ee03b09-dcae-4168-9308-2001f6b01ffa-USATSI_12377003.jpg?crop=3303,1858,x1,y56&width=3200&height=1680&fit=bounds'],
    ['Julio Rodriguez', 'https://www.oregonlive.com/resizer/Ln5GYmPzmZKb-F13y-n6nFJLuus=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FIEH6ZB36BEKJF2QIEU2CXJ6U4.jpg']
]
playerlen = 3;
currplayer = 0;

function nextPlayer() {
    //updates the webpage to display the next player in the array
    //displays first player if it reaches the end
    currplayer++;
    if(currplayer == 3){
        currplayer = 0;
    }
    document.getElementById("playername").innerText = players[currplayer][0]
    document.getElementById("playerimg").src = players[currplayer][1]
}