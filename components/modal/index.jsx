import classes from "./modal.module.css";

function Modal({ isOpen, setIsOpen }) {
  return <section className={isOpen ? classes.modalOpen : classes.modalClose } onClick={() => setIsOpen()}></section>
}

export default Modal;