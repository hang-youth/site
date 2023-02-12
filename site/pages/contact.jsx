import BasePage from '../components/BasePage';
import Link from 'next/link';

export default function Contact() {
  return (
    <BasePage title="Contact - Hang Youth" description="Contactinformatie voor boekingen, pers, management enzo en fanmail.">
      <h1>Contact</h1>
      <p><b>Boekingen:</b> Jeps Salfischberger op <a className='link link--inline' href="mailto:j.salfischberger@mojo.nl">j.salfischberger@mojo.nl</a><br />
        <b>Pers, management, etc:</b> Rick Bakker op <a className='link link--inline' href="mailto:rick@resort.net">rick@resort.net</a><br />
        <b>Fanmail &amp; opbouwende kritiek:</b> <a className='link link--inline' href="mailto:info@hangyouth.nl">info@hangyouth.nl</a><br />
        <b>Bestellingen &amp; retouren:</b> <a className='link link--inline' href="mailto:merchandise@hangyouth.nl">merchandise@hangyouth.nl</a></p>

      <h3>Contactgegevens</h3>
      <p>
        PUNKBAND<br />
        Pieter Vlamingstraat 38<br />
        1093 AE Amsterdam
      </p>

      <p>
        <a href="mailto:info@hangyouth.nl">info@hangyouth.nl</a><br />
        <a href="https://instagram.com/hang.youth">instagram.com/hang.youth</a>
      </p>
      <p>
        KVK: 82731853<br />
        Vestigingsnummer: 0000489448489
      </p>
      <p><b><Link href="/verzend-beleid">Verzend- en Leveringsbeleid</Link></b> en <b><Link href="/algemene-voorwaarden">Algemene Voorwaarden</Link></b></p>
    </BasePage>
  );
}
