const modalOverlay = document.querySelector("div.modal-overlay")

const Modal = {

    open() {
        modalOverlay.classList.add("active")
    },

    close() {
        modalOverlay.classList.remove("active")
    }
}