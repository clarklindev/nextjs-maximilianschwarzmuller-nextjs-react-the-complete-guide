import { useRouter } from 'next/router';
const selectedClientProject = () => {
  const router = useRouter();

  console.log(router.query);

  return <div>the project page - for a selected client </div>;
};

export default selectedClientProject;
