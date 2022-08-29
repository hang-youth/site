import BasePage from '../components/BasePage';

export default function Contact() {
  return (
    <BasePage title="Contact - Hang Youth" description="Contactinformatie voor boekingen, pers, management enzo en fanmail.">
      <h1>Contact</h1>
      <p><b>Boekingen:</b> Jeps Salfischberger op <a className='link link--inline' href="mailto:j.salfischberger@mojo.nl">j.salfischberger@mojo.nl</a><br/>
      <b>Pers, management, etc:</b> Rick Bakker op <a className='link link--inline' href="mailto:rick@resort.net">rick@resort.net</a><br/>
      <b>Fanmail &amp; opbouwende kritiek:</b> <a className='link link--inline' href="mailto:info@hangyouth.nl">info@hangyouth.nl</a></p>
    </BasePage>
  );
}
