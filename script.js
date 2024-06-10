// 当文档加载完毕时
document.addEventListener('DOMContentLoaded', function () {
    // 实现复制功能的代码
    var copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var text = button.previousElementSibling.innerText;
            var textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            alert('提示词已复制！');
        });
    });

    // 实现搜索功能的代码
    var searchBox = document.querySelector('input[type="text"]');
    searchBox.addEventListener('input', function(e) {
        var searchText = e.target.value.toLowerCase();
        var cards = document.querySelectorAll('.prompt-card');
        cards.forEach(function(card) {
            var title = card.querySelector('h2').innerText.toLowerCase();
            var author = card.querySelector('p.text-gray-600').innerText.toLowerCase();
            var content = card.querySelector('p.mt-2').innerText.toLowerCase();
            if(title.includes(searchText) || author.includes(searchText) || content.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    // 添加锚点滚动功能
    var tags = document.querySelectorAll('.tag');
    tags.forEach(function(tag) {
        tag.addEventListener('click', function() {
            var target = document.getElementById(tag.getAttribute('data-target'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
