const UserAvatar = ({ user }) => {
  return (
    <div className="flex gap-4 items-center max-w-[316px] lg:pr-[101px]">
      <div className="w-[72px] h-[72px] bg-avatar bg-7367F0 rounded-full flex justify-center items-center">
        <div className="w-[58px] h-[58px] bg-white bg-opacity-30 rounded-full"></div>
      </div>
      <div>
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-[15px] text-8B909A">{user.email}</p>
      </div>
    </div>
  );
};

export default UserAvatar;
