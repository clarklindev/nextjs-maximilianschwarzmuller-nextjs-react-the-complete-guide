import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // navigate to different page

    //Method1 - replace removes ability to go back -replaces current page
    // router.push('/clients/max/projecta');
    // router.replace('/clients/max/projecta');

    //Method2 - use object
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' },
    });
  };

  return (
    <div>
      <div>the projects of a given client</div>
      <button onClick={loadProjectHandler}>click me</button>
    </div>
  );
};

export default ClientProjectsPage;
