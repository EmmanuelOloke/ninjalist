import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/Link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
