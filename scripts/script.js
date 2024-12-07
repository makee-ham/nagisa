document.addEventListener("DOMContentLoaded", () => {
    // 모든 .summary 요소에 이벤트 리스너 추가
    document.querySelectorAll('.summary').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active'); // active 클래스 토글
        });
    });
});
