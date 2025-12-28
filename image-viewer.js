document.addEventListener("DOMContentLoaded", () => {
    const modal = document.createElement("div");
    modal.id = "imageModal";
    modal.style.cssText = `
        display:none;
        position:fixed;
        top:0; left:0;
        width:100%; height:100%;
        background:rgba(0,0,0,0.85);
        justify-content:center;
        align-items:center;
        z-index:9999;
    `;

    modal.innerHTML = `
        <span id="closeModal" style="
            position:absolute;
            top:20px;
            right:30px;
            font-size:30px;
            color:white;
            cursor:pointer;
        ">&times;</span>
        <img id="modalImage" style="
            max-width:90%;
            max-height:90%;
            border-radius:10px;
            box-shadow:0 0 30px rgba(255,255,255,0.3);
        ">
    `;

    document.body.appendChild(modal);

    const modalImg = modal.querySelector("#modalImage");
    const closeBtn = modal.querySelector("#closeModal");

    document.addEventListener("click", e => {
        if (
            e.target.tagName === "IMG" &&
            !e.target.closest(".navbar") &&
            !e.target.closest(".center-logo")
        ) {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        }
    });

    closeBtn.onclick = () => modal.style.display = "none";
    modal.onclick = e => {
        if (e.target === modal) modal.style.display = "none";
    };
});
