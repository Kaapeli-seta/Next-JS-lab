import { fetchAllMedia } from "@/models/mediaModel";
const MediaList = async () => {
  const mediaList = await fetchAllMedia();

  if (!mediaList) {
    return <p>No media found</p>;
  }

  return (
    <section className="flex flex-col p-8 bg-inherit">
      <ul className="grid grid-cols-3 gap-4 transform-3d bg-inherit">
        {mediaList.map((item, index) => (
          <li
            draggable="true"
            key={index}
            className="flex flex-col items-center transition p-4 shadow-2xl shadow-sd-drop rounded-md bg-inherit hover:scale-110 hover:cursor-grab active:cursor-grabbing text-inherit "
          >
            <h3 className="text-lg font-bold self-start">{item.title}</h3>
            <p>Description: {item.description}</p>
            <p>Date: {new Date(item.created_at).toLocaleDateString("fi-FI")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MediaList;
