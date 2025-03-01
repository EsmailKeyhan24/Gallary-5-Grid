let _code = [27, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 9, 81, 87, 69, 82, 87, 89, 85, 73, 79, 80, 219, 221, 220, 8, 65, 83, 68, 70, 71, 72, 74, 75, 76, 16, 16, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16]
let span = document.querySelectorAll('main>span')
let number 
function _rand() {
    // for(i=0;i<53;i++){
    //     span[i].style.background='red'
    // }
    number=parseInt((Math.random()) * _code.length)
    if (_code[number] == 27) {
        span[0].style.background = 'purple'
    } else if (_code[number] == 49) {
        span[1].style.background = 'purple'
    } else if (_code[number] == 50) {
        span[2].style.background = 'purple'
    } else if (_code[number] == 51) {
        span[3].style.background = 'purple'
    } else if (_code[number] == 52) {
        span[4].style.background = 'purple'
    } else if (_code[number] == 53) {
        span[5].style.background = 'purple'
    } else if (_code[number] == 54) {
        span[6].style.background = 'purple'
    } else if (_code[number] == 55) {
        span[7].style.background = 'purple'
    } else if (_code[number] == 56) {
        span[8].style.background = 'purple'
    } else if (_code[number] == 57) {
        span[9].style.background = 'purple'
    }
    else if (_code[number] == 48) {
        span[10].style.background = 'purple'
    } else if (_code[number] == 189) {
        span[11].style.background = 'purple'
    } else if (_code[number] == 187) {
        span[12].style.background = 'purple'
    } else if (_code[number] == 9) {
        span[13].style.background = 'purple'
    } else if (_code[number] == 81) {
        span[14].style.background = 'purple'
    } else if (_code[number] == 87) {
        span[15].style.background = 'purple'
    } else if(_code[number]==69){
        span[16].style.background='purple'
       }
       else if(_code[number]==82){
        span[17].style.background='purple'
       }
       else if(_code[number]==87){
        span[18].style.background='purple'
       }
    else if (_code[number] == 89) {
        span[19].style.background = 'purple'
    } else if (_code[number] == 85) {
        span[20].style.background = 'purple'
    } else if (_code[number] == 73) {
        span[21].style.background = 'purple'
    } else if (_code[number] == 79) {
        span[22].style.background = 'purple'
    } else if (_code[number] == 80) {
        span[23].style.background = 'purple'
    } else if (_code[number] == 219) {
        span[24].style.background = 'purple'
    } else if (_code[number] == 221) {
        span[25].style.background = 'purple'
    } else if (_code[number] == 220) {
        span[26].style.background = 'purple'
    } else if (_code[number] == 8) {
        span[27].style.background = 'purple'
    } else if (_code[number] == 65) {
        span[28].style.background = 'purple'
    } else if (_code[number] == 83) {
        span[29].style.background = 'purple'
    } else if (_code[number] == 68) {
        span[30].style.background = 'purple'
    } else if (_code[number] == 70) {
        span[31].style.background = 'purple'
    } else if (_code[number] == 71) {
        span[32].style.background = 'purple'
    } else if (_code[number] == 72) {
        span[33].style.background = 'purple'
    } else if(_code[number]==74){
        span[34].style.background='purple'
       }
    else if (_code[number] == 75) {
        span[35].style.background = 'purple'
    } else if (_code[number] == 76) {
        span[36].style.background = 'purple'
    } else if (_code[number] == 16) {
        span[37].style.background = 'purple'
    } else if (_code[number] == 16) {
        span[38].style.background = 'purple'
    } else if (_code[number] == 13) {
        span[39].style.background = 'purple'
    } else if (_code[number] == 16) {
        span[40].style.background = 'purple'
    } else if (_code[number] == 90) {
        span[41].style.background = 'purple'
    } else if (_code[number] == 88) {
        span[42].style.background = 'purple'
    } else if (_code[number] == 67) {
        span[43].style.background = 'purple'
    } else if (_code[number] == 86) {
        span[44].style.background = 'purple'
    } else if (_code[number] == 66) {
        span[45].style.background = 'purple'
    } else if (_code[number] == 78) {
        span[46].style.background = 'purple'
    } else if (_code[number] == 77) {
        span[47].style.background = 'purple'
    } else if (_code[number] == 188) {
        span[48].style.background = 'purple'
    } else if (_code[number] == 190) {
        span[49].style.background = 'purple'
    } else if (_code[number] == 191) {
        span[50].style.background = 'purple'
    } else if (_code[number] == 16) {
        span[51].style.background = 'purple'
    }
}
_rand()
function key(e) {
    temp = e.keyCode || e.which
    if(temp==_code[number]){
        span[number].style.background='red'
    }
    setTimeout(() => {
        _rand()
    }, 3000);
}
