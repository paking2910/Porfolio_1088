
window.onload = pageLoad;

function pageLoad() {
    initContactForm();
    initSmoothAnchors();
}


function initContactForm() {
    const contactForm = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.onsubmit = function(event) {
          
            event.preventDefault();

            const nameInput = document.getElementById("senderName").value.trim();
            const emailInput = document.getElementById("senderEmail").value.trim();
            const messageInput = document.getElementById("senderMsg").value.trim();

            if (nameInput === "" || emailInput === "" || messageInput === "") {
                alert("กรุณากรอกข้อมูลให้ครบถ้วนทุกช่องก่อนส่งข้อความครับ");
                return;
            }

            
            if (feedback) {
                feedback.textContent = `ขอบคุณครับคุณ ${nameInput} ข้อมูลของคุณถูกส่งเรียบร้อยแล้ว`;
                feedback.style.color = "#48bb78";
            }

          
            contactForm.reset();
        };
    }
}



function initSmoothAnchors() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < internalLinks.length; i++) {
        internalLinks[i].onclick = function(event) {
            const targetId = this.getAttribute("href");
            if (targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        };
    }
}