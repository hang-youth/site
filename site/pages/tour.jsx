import BasePage from '../components/BasePage';
import { createClient } from 'contentful';

import styles from '../styles/Tour.module.scss';

const parseDate = (date) => {
  const [year, month, day] = date.split('-');
  const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

  return `${day} ${months[month - 1]} ‘${year.substring(2)}`;
}

export default function Tour({tour, festivals}) {
  return (
    <BasePage title="Tour - Hang Youth" description="Koop kaarten voor de tour. Wees snel want de vorige tour was razendsnel uitverkocht.">
      <h1>Tour</h1>
      {
        (tour.length === 0) ?
          <p>Er zijn momenteel geen tourdata bekend.</p>
        :
        <table className={styles.table}>
          <tbody>
            {tour.map((item, key) => (
              <tr key={key}>
                <td>{parseDate(item.date)}</td>
                <td>{item.venue}, {item.city}</td>
                    <td>{
                      item.ticketSaleUrl &&
                      <a href={item.ticketSaleUrl} target="_blank" className="link">Koop Kaarten</a>
                    }</td>
              </tr>
            ))}
          </tbody>
        </table>
      }

      {
        festivals.length > 0 &&
        <>
          <h2>Festivals</h2>
          <table className={styles.table}>
            <tbody>
              {festivals.map((item, key) => (
                <tr key={key}>
                  <td>{parseDate(item.date)}</td>
                  <td>{item.festival}, {item.city}</td>
                  <td>{
                    item.ticketSaleUrl &&
                    <a href={item.ticketSaleUrl} target="_blank" className="link">Koop Kaarten</a>
                  }</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      }
    </BasePage>
  );
}

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const tourData = await client.getEntries({
    content_type: 'tourDate',
    order: 'fields.date',
    'fields.date[gte]': new Date(),
  })

  const festivalData = await client.getEntries({
    content_type: 'festivalDate',
    order: 'fields.date',
    'fields.date[gte]': new Date(),
  })

  const tour = tourData.items.map(({fields}) => {
    return {
      city: fields.city,
      date: fields.date,
      venue: fields.venue,
      ticketSaleUrl: fields.ticketSaleUrl,
    }
  })

  const festivals = festivalData.items.map(({fields}) => {
    return {
      city: fields.city,
      date: fields.date,
      festival: fields.festival,
      ticketSaleUrl: fields.ticketSaleUrl,
    }
  })

  return {
    props: {
      tour: tour,
      festivals: festivals,
    }
  }
}
