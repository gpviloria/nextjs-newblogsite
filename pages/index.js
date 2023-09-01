import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a third year computer engineering student of the University of the Assumption.
          I love listening to music that are relaxing and inspiring. I also love watching videos
          of theological sermons from renowned preachers like Billy Graham and Derek Prince. 
          I love burgers and steaks. I spend most of my time alone wondering about our life in
          eternity.
        </p>
        <p>
          I took up computer engineering in the hope of contributing something helpful in 
          our world today.
        </p>
        <p>
          I see myself exploring web development or something between software and hardware
          design after my graduation.
        </p>
      </section>
    </Layout>
  );
}