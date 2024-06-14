// Function to open the modal
function openModal(fullText) {
    document.getElementById('modal-content').innerText = fullText;
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal-backdrop').classList.remove('hidden');
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal-backdrop').classList.add('hidden');
  }
  
  // Function to show the top message bar
  function showMessageBar(message, button) {
    var messageBar = document.getElementById('message-bar');
    messageBar.innerText = message;
    messageBar.classList.remove('hidden');
    
    // Hide the message bar after 5 seconds
    setTimeout(function() {
      messageBar.classList.add('hidden');
    }, 5000);
  
    // Revert button color after 5 seconds
    setTimeout(function() {
      button.classList.remove('bg-green-500');
      button.innerText = '复制提示词';
    }, 5000);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
      // Event listener for view buttons
      var viewButtons = document.querySelectorAll('.view-button');
      viewButtons.forEach(function(button) {
          button.addEventListener('click', function(event) {
              var fullText = button.parentElement.querySelector('.prompt-text').innerText;
              openModal(fullText);
          });
      });
  
      // Event listener for copy buttons
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
  
              // Update button appearance and show message bar
              button.classList.add('bg-green-500');
              button.innerText = '复制成功';
              showMessageBar('提示词已复制到剪贴板🎉', button);
          });
      });
  
      // Search functionality
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
  
      // Anchor scrolling functionality
      var tags = document.querySelectorAll('.tag');
      tags.forEach(function(tag) {
          tag.addEventListener('click', function() {
              var target = document.getElementById(tag.getAttribute('data-target'));
              target.scrollIntoView({ behavior: 'smooth' });
          });
      });
  });
  //回到顶部按钮
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "flex"; // 显示按钮
    } else {
      document.getElementById("myBtn").style.display = "none"; // 隐藏按钮
    }
  }
  
  // 当用户点击按钮时，回到页面顶部
  function topFunction() {
    document.body.scrollTop = 0; // 对于 Safari
    document.documentElement.scrollTop = 0; // 对于 Chrome, Firefox, IE 和 Opera
  }