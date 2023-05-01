import { useRouter } from 'next/router'; //gets dynamic path segment data

const PortfolioProjectPage = () => {
  const router = useRouter(); //exposes data props eg pathname
  console.log(router.pathname); //eg. /portfolio/something console.logs: portfolio/[projectid]
  console.log(router.query); //url data eg. {projectid:'something'} //router.query.projectid

  return <div>Portfolio Project Page</div>;
};

export default PortfolioProjectPage;
