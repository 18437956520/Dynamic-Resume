/* 把code写到#code和style标签中 */
function writeCode(prefix,code,fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = 10000
        if (n >= code.length) {
            window.clearInterval(id)
            fn()
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
var result2 = `
#paper{
    width: 200px; 
    height: 100px;
    background: red;
}
`
writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2)
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    fn()
}

