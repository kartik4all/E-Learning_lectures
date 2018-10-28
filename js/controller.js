app.controller("myctrl", function ($scope, topSongs,$compile) {
    var songsrc;
    var songimg;
    var songname;
$scope.showPlayer = false;

 $scope.toggle=true;
 $scope.img = "images/meantTobe.jpg";
    
    $scope.$on('song', function (eventName, args) {
        $scope.showPlayer=true;
        songsrc = args.url;
        songimg = args.image;
        songname = args.name;
        process();

    });
    function process() {
       
        $scope.toggle =true;
        audio.src = songsrc;
        $scope.songName = songname;
      
        $scope.toggleSong();

        $scope.seeksong();
    }
    $scope.seeksong = () => {
        setTimeout(function(){
            $scope.startTime = audio.currentTime;
        },500);
        // setTimeout(function(){
        //     var duration = audio.duration;
        //     $scope.totalTime = duration;
        // },200);

        // $scope.slider.value = audio.currentTime;

    };

    $scope.toggleSong = () => {
        if ($scope.toggle) {
            $scope.startSong();
        }
        else{
            pauseSong();
        }
    };
    $scope.nextSong = () => {
        console.log(topSongs);
        for (let key in topSongs) {
            var newKey = parseInt(key) + 1;
    
            if (songname == topSongs[key].songName) {
                console.log(topSongs[key]);
                songsrc = topSongs[newKey].songUrl;
                songimg = topSongs[newKey].songImg;
                songname = topSongs[newKey].songName;
                console.log(songsrc, songimg, songname);
                $scope.toggle;
                process();
                
                break;
            }

        }



    };
    $scope.startSong = () => {
        
        console.log("new Song started");
        audio.play();
        $scope.toggle = false;
    
    }
    function pauseSong() {
        audio.pause();
        $scope.toggle = true;

    }
    $scope.stopSong = () => {
        audio.currentTime = 0;
        $scope.toggle = true;
        audio.pause();
    };

});