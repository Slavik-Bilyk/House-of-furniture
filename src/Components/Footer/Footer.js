import { FooterTag } from "./Footer.styled";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterTag>
      <div>
        <span>Всьо чікен бамбоні (с) {currentYear} </span>
      </div>
    </FooterTag>
  );
}