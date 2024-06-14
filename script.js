// 打开模态框的函数
function openModal(fullText) {
    document.getElementById('modal-content').innerText = fullText;
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal-backdrop').classList.remove('hidden');
}
  
// 关闭模态框的函数
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal-backdrop').classList.add('hidden');
}

// 显示顶部消息栏的函数
function showMessageBar(message, button) {
    var messageBar = document.getElementById('message-bar');
    messageBar.innerText = message;
    messageBar.classList.remove('hidden');
    
    // 5秒后隐藏消息栏
    setTimeout(function() {
      messageBar.classList.add('hidden');
    }, 5000);
  
    // 5秒后恢复按钮颜色
    setTimeout(function() {
      button.classList.remove('bg-green-500');
      button.innerText = '复制提示词';
    }, 5000);
}

// 当文档加载完成后，设置事件监听器
document.addEventListener('DOMContentLoaded', function () {
    // 查看按钮的事件监听器
    var viewButtons = document.querySelectorAll('.view-button');
    viewButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var fullText = button.parentElement.querySelector('.prompt-text').innerText;
            openModal(fullText);
        });
    });

    // 复制按钮的事件监听器
    var copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var text = button.parentElement.querySelector('.prompt-text').innerText;
            var textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            // 更新按钮外观并显示消息栏
            button.classList.add('bg-green-500');
            button.innerText = '复制成功';
            showMessageBar('提示词已复制到剪贴板🎉', button);
        });
    });

    // 搜索功能
    var searchBox = document.querySelector('input[type="text"]');
    searchBox.addEventListener('input', function(e) {
        var searchText = e.target.value.toLowerCase();
        var cards = document.querySelectorAll('.prompt-card');
        cards.forEach(function(card) {
            var title = card.querySelector('h2').innerText.toLowerCase();
            var author = card.querySelector('p.text-blue-500').innerText.toLowerCase();
            var content = card.querySelector('.prompt-text').innerText.toLowerCase();
            if(title.includes(searchText) || author.includes(searchText) || content.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // 锚点滚动功能
    var tags = document.querySelectorAll('.tag');
    tags.forEach(function(tag) {
        tag.addEventListener('click', function() {
            var target = document.getElementById(tag.getAttribute('data-target'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
