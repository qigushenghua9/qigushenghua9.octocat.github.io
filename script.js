// 导航栏点击高亮效果
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // 给每个链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 阻止默认跳转（初稿先做样式，后续再加页面跳转）
            e.preventDefault();
            
            // 移除所有链接的active类
            navLinks.forEach(item => item.classList.remove('active'));
            
            // 给当前点击的链接添加active类
            this.classList.add('active');
        });
    });
});