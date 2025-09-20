
import "../style/Header.css"
function Header() {
  return (
    <div className="Header">
      <div><img src="./Animalogo.svg" alt="" /></div>
      <div className="NavHeader"><a href="">Каталог</a></div>
      <div className="NavHeader"><a href="">Акции</a></div>
      <div className="NavHeader"><a href="">Блог</a></div>
      <div className="NavHeader"><a href="">Сотрудничество</a></div>
      <div className="NavHeader"><a href="">Оплата и доставка</a></div>
      <div className="contact"></div>
    </div>
  );
}

export default Header;
