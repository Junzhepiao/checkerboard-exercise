// Your JS goes here
                                //CheckerBoard
function CheckerBlack() {
    var block=document.createElement('div')
    document.body.appendChild(block)
    block.style.width='11.1%'
    block.style.paddingBottom='11.1%'
    block.style.cssFloat = "left"
    block.style.backgroundColor="black"
}

function CheckerRed() {
    var block=document.createElement('div')
    document.body.appendChild(block)
    block.style.width='11.1%'
    block.style.paddingBottom='11.1%'
    block.style.cssFloat = "left"
    block.style.backgroundColor="red"
}

function repeat() {
    for ( var i =0; i < 90; i++) {
    CheckerBlack()
    CheckerRed()
    }
}
repeat()// call master function



                                //Random color
function randomBox() {
    for ( var i =0; i < 90; i++) {

    function randomColor() {
    var color='#'
    var number='0123456789ABCDEF'
    for ( var i = 0; i <= 5; i++) {
        color += number[Math.floor(Math.random() * 16)];// **note** math.random() --creates random number from 0 to 1.
    }
    return color
    }// function to create random color

    function CheckBox() {
    var block=document.createElement('div')
    document.body.appendChild(block)
    block.style.width='11.1%'
    block.style.paddingBottom='11.1%'
    block.style.cssFloat = "left"
    block.style.backgroundColor=randomColor()
    }// function to create box with random color
    CheckBox()
    }
}
randomBox()//call master function




                            //Gradient

var dark = ['#000000','#000010','#000020','#000030','#000040','#000050','#000060','#000070','#000080','#000090']
var bright = ['#ff0000','#ff0010','#ff0020','#ff0030','#ff0040','#ff0050','#ff0060','#ff0070','#ff0080','#ff0090']
function gradient() {
    for (var i = 0; i < 10; i++) {
        function CheckBoxDark() {
            var block=document.createElement('div')
            document.body.appendChild(block)
            block.style.width='11.1%'
            block.style.paddingBottom='11.1%'
            block.style.cssFloat = "left"
            block.style.backgroundColor=dark[i]
            }// function to create box with random color
            CheckBoxDark()
        function CheckBoxBright() {
        var block=document.createElement('div')
        document.body.appendChild(block)
        block.style.width='11.1%'
        block.style.paddingBottom='11.1%'
        block.style.cssFloat = "left"
        block.style.backgroundColor=bright[i]
            }// function to create box with random color
            CheckBoxBright()
            CheckBoxDark()
            CheckBoxBright()
            CheckBoxDark()
            CheckBoxBright()
            CheckBoxDark()
            CheckBoxBright()
            CheckBoxDark()
            CheckBoxBright()
    }
}
gradient()//call master function