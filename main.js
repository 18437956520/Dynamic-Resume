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

`

var n = 0
var id = setInterval(()=>{
    n += 1
    code.innerHTML = result.substring(0,n)
    code.innerHTML = 
        Prism.highlight(code.innerHTML, Prism.languages.css)
    styleTag.innerHTML = result.substring(0,n)
    if(n >= result.length){
        window.clearInterval(id)
    }
},10)       