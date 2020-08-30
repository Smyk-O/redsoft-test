import React from 'react';
import './Footer.scss';
import siteLogo from '../../assets/img/logo.png';
import Menu from '../common/Menu/Menu';

const FooterContacts = ({contact}) => {
  return (
    <div className={'footer__contact'}>
      {contact.map((item) => (
        <div className={'contact__item'}>
          <img src={item.icoUrl} alt="" />
          {item.data}
        </div>
      ))}
    </div>
  );
};

const Footer = ({contact}) => {
  return (
    <footer className={'footer'}>
      <div className={'footer__left'}>
        <img className={'logo'} src={siteLogo} alt="logo" />
        <Menu />
      </div>
      <FooterContacts contact={contact.contactData}/>
    </footer>
  );
};

export default Footer;
