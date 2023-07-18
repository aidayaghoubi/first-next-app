async function List({ params }) {
  //by this we can access to our url and its dynamic part
  let data;

  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const dataRepo = await res.json();

  return (
    <div className="text-gray-0">
      {params.listId}
      <div>{dataRepo.datetime}</div>
    </div>
  );
}
export default List;
