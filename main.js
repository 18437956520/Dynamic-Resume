/* 把code写到#code和style标签中 */
function writeCode(code) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = code.substring(0, n)
        if (n >= result.length) {
            window.clearInterval(id)
        }
    }, 10)
}

var result = `
/*
 * 面试官您好，我是xx
 * 下面我将用动画的形式来介绍自己
 * 只用文字介绍太单调了
 * 那就用代码来显示吧
 * 首先准备一些样式
 */

*{
    transition: all 0.5s;
}

html{
    background: #ddd;
    font-size: 16px;
}

#code{
    border: 1px solid red;
    padding: 10px;
}

/* 我现在需要一点代码高亮 */
.token.selector{
    color: #690;
}

.token.punctuation{
    color: #999;
}

.token.property{
    color: #905;
}

/* 加点3D效果 */
#code{
    transform: rotateY(360deg);
}

/* 好了好了，我来介绍一下自己吧 */
/* 我需要一张白纸 */

`
writeCode(result)

function fn2() {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function fn3(preResult) {
    var result = `
        #paper{
            width: 200px; 
            height: 100px;
            background: red;
        }
    `

    var n = 0
    var id = setInterval(() => {
        n += 1
        code.innerHTML = preResult + result.substring(0, n)
        code.innerHTML =
            Prism.highlight(code.innerHTML, Prism.languages.css)
        styleTag.innerHTML = preResult + result.substring(0, n)
        if (n >= result.length) {
            window.clearInterval(id)
        }
    }, 10)
}