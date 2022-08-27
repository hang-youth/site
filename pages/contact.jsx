import BasePage from '../components/BasePage';

export default function Contact() {
  return (
    <BasePage title="Contact - Hang Youth">
      <h1>Contact</h1>
      <p><b>Boekingen:</b> Jeps Salfischberger (<a className='link link--inline' href="mailto:j.salfischberger@mojo.nl">j.salfischberger@mojo.nl</a>)<br/>
      <b>Pers, management, etc:</b> Rick Bakker (<a className='link link--inline' href="mailto:rick@resort.net">rick@resort.net</a>)<br/>
      <b>Fanmail &amp; opbouwende kritiek:</b> <a className='link link--inline' href="mailto:info@hangyouth.nl">info@hangyouth.nl</a></p>
    </BasePage>
  );
}