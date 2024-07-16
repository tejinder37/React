import { getImageUrl } from "../helpers/utils";

const Avatar = ({ person, size }) => {
  console.log(size);
  return (
    <img
      className="avatar"
        // src={`https://i.imgur.com/${person.imageId}s.jpg`}
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
