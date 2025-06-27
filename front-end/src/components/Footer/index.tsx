import React from 'react';
import "./style.css";

type FooterProps = {
  tema?: string;
};

const Footer: React.FC<FooterProps> = ({ tema }) => {
  const temaClasse = tema ? tema : '';

  return (
    <footer className={`container-footer ${temaClasse}`}>
      <h4 className="footer-title">World Beauty</h4>
      <p className="footer-copy">
        © 2025 - Desenvolvido por <strong>Maria Fernanda Diniz Hansen de Souza</strong>
      </p>
    </footer>
  );
};

export default Footer;