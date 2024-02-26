// Бібліотека React Icons

import { HiUser } from 'react-icons/hi';

const UserMenu = ({ name }) => {
  return (
    <div>
      <p>
        <HiUser className="my-icon" size="24" /> {name}
      </p>
    </div>
  );
};

export default UserMenu;
