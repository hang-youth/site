import BasePage from '../components/BasePage';
import { createClient } from 'contentful';

import styles from '../styles/Tour.module.scss';

const parseDate = (date) => {
  const [year, month, day] = date.split('-');
  const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

  return `${day} ${months[month - 1]} ‘${year.substring(2)}`;
}

export default function Tour({tour}) {
  return (
    <BasePage title="Tour - Hang Youth" description="Koop kaarten voor de tour. Wees snel want de vorige tour was razendsnel uitverkocht.">
      <h1>Tour</h1>
      <table className={styles.table}>
        <tbody>
          {tour.map((item, key) => (
            <tr key={key}>
              <td>{parseDate(item.date)}</td>
              <td>{item.venue}, {item.city}</td>
              <td><a href={item.ticketSaleUrl} target="_blank" className="link">Koop Kaarten</a></td>
            </tr>
          ))}
          <tr><td>Etc.</td></tr>
          <tr><td>Etc.</td></tr>
          <tr><td>Etc.</td></tr>
        </tbody>
      </table>
    </BasePage>
  );
}

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries({
    content_type: 'tourDate',
    order: 'fields.date',
    'fields.date[gte]': new Date(),
  })

  const tour = data.items.map(({fields}) => {
    return {
      city: fields.city,
      date: fields.date,
      venue: fields.venue,
      ticketSaleUrl: fields.ticketSaleUrl,
    }
  })

  return {
    props: {
      tour: tour
    }
  }
}
