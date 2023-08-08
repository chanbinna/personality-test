const main = document.querySelector('#main');
const qna = document.querySelector('#qna');

qna.style.display = 'none';
final.style.display = 'none';

const percent = document.getElementById("percent");

function answer(qIdx) {
    var a1 = document.querySelector('.a1');
    var a2 = document.querySelector('.a2');
    a1.innerHTML = qnaList[qIdx].a[0].answer;
    a2.innerHTML = qnaList[qIdx].a[1].answer;

}

// function goNext(qIdx) {
//     var n = document.querySelector('.qNum');
//     var numS = qIdx + 1;
//     if (numS < 10) {
//         n.innerHTML = '# 0' + numS;
//     } else {
//         n.innerHTML = '# ' + numS;
//     }

//     var q = document.querySelector('.qBox');
//     q.innerHTML = qnaList[qIdx].q;
//     answer(qIdx);

//     function buttonPressed(event) {
//         if (event.target.id === "a1" || event.target.id === "a2") {
//             console.log("Button " + event.target.id + " was pressed");
//             qna.style.WebkitAnimation = "fadeOut 1s";
//             qna.style.animation = "fadeOut 1s";
//             setTimeout(() => {
//                 qna.style.WebkitAnimation = "fadeIn 1s";
//                 qna.style.animation = "fadeIn 1s";
//                 setTimeout(() => {
//                     qna.style.display = 'none';
//                     qna.style.display = 'block';
//                 }, 450)
//                 qIdx++;
//                 if(qIdx < 12){
//                     goNext(qIdx);
//                 } else {
//                     qna.style.display = 'none';
//                     final.style.display = 'block';
//                     continueExecution = false;
//                 }

//             }, 450)
//         }
//         if (!continueExecution) {
//             return; // Exit the function if the flag is set
//         }
//         // event.stopPropagation();
        
//     }
//     document.addEventListener("click", buttonPressed);
// }


function buttonPressed(event, qIdx) {
    if (event.target.id === "a1" || event.target.id === "a2") {
        console.log("Button " + event.target.id + " was pressed");
        qna.style.WebkitAnimation = "fadeOut 1s";
        qna.style.animation = "fadeOut 1s";
        setTimeout(() => {
            qna.style.WebkitAnimation = "fadeIn 1s";
            qna.style.animation = "fadeIn 1s";
            // setTimeout(() => {
            //     qna.style.display = 'none';
            //     qna.style.display = 'block';
            // }, 450)
            qIdx++;
            if(qIdx < 12){
                goNext(qIdx);
            } else {
                qna.style.display = 'none';
                final.style.display = 'block';
                return;
            }

        }, 450)
    }
}

function goNext(qIdx) {
    var n = document.querySelector('.qNum');
    var numS = qIdx + 1;
    if (numS < 10) {
        n.innerHTML = '# 0' + numS;
    } else {
        n.innerHTML = '# ' + numS;
    }

    percent.style.width = (numS * 8) + "%";

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    answer(qIdx);

    document.addEventListener("click", function(event) {
        buttonPressed(event, qIdx); // Pass qIdx as an argument
    });
}





function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = 'none';
            qna.style.display = 'block';
        }, 450)
        let qIdx = 0;
        goNext(qIdx);
    }, 450)
}

