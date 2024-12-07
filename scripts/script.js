document.addEventListener("DOMContentLoaded", () => {
    /** 1. .summary 클릭 시 내용 표시/숨김 **/
    document.querySelectorAll('.summary').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active'); // active 클래스 토글
        });
    });

    /** 2. 맨 위로 가기 버튼 동작 **/
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // 스크롤 이벤트: 버튼 나타나기/사라지기
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show"); // 버튼 표시
        } else {
            scrollToTopBtn.classList.remove("show"); // 버튼 숨기기
        }
    });

    // 버튼 클릭 시 페이지 맨 위로 부드럽게 이동
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 부드러운 스크롤
        });
    });
});
