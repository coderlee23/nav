const sButton = document.querySelector('.search-btn')
sButton.addEventListener('click', function () {
    document.querySelector('form').submit()
})

document.querySelector('.search-input').focus()

const websites = [
    'https://www.google.com',
    'https://github.com',
    'https://gitee.com',
    'https://www.csdn.net',
    'https://segmentfault.com',
    'https://juejin.im',
    'https://cn.vuejs.org',
    'https://reactjs.org',
    'https://www.tslang.cn',
    'https://mail.google.com',
    'https://www.bilibili.com',
    'https://www.bootcss.com'

]

const boxs = document.querySelectorAll('.label-box')

for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener('click', function () {
        window.open(websites[i])
    })

}
