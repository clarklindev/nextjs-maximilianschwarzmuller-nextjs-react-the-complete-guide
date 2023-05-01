import Link from 'next/link';

const ClientsPage = () => {
  return (
    <>
      <div>the clients page</div>
      <ul>
        <li>
          {/*method 1*/}
          <Link href='/clients/max'>Maximilian</Link>
        </li>

        <li>
          {/*method 2*/}
          <Link href={{ pathname: '/clients/[id]', query: { id: 'john' } }}>
            John
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ClientsPage;
