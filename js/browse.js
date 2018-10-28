app.controller("browse", function ($scope, $compile, topSongs) {

    $scope.Ssongs = topSongs;


    $scope.play = () => {
        console.log(event);
        var matchadd = event.srcElement.innerHTML;
        console.log(matchadd.trim());
        fetchSongDetails(matchadd.trim());
    };
    var x=0;
    $scope.todaysTopNext=()=>{
      
         document.querySelector(".songs").style.transition = "1s";
        document.querySelector(".songs").style.transform += "translate(-10%,0px)";
    };
    $scope.todaysTopBack=()=>{
       
        document.querySelector(".songs").style.transition = "1s";
       document.querySelector(".songs").style.transform += "translate(10%,0px)";
   };

    function fetchSongDetails(matchadd) {

        for (let address in topSongs) {

            var a = '<img ng-src="' + topSongs[address].songImg + '" src="' + topSongs[address].songImg + '">';
            console.log("a is", a);
            if (matchadd == a) {
                console.log("found");
                $scope.$emit('song', {
                    image: topSongs[address].songImg
                    , name: topSongs[address].songName
                    , url: topSongs[address].songUrl
                });

            }
        }

    };









});
