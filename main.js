// 즉시 실행 함수
// 전체 영역을 더럽히지 않게 모듈화하는 것
(function (window, document) {
  'use strict';

  const $toggles = document.querySelectorAll('.toggle'); // 유사 배열(NodeList)
  const $toggleBtn = document.getElementById('toggle-btn');
  
  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      // off toggle element 
      offElements();
    }
  })

  function toggleElements() {
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offElements() {
    [].forEach.call($toggles, function(toggle) {
      toggle.classList.remove('on');
    });
  }
}) (window, document)