const PersonalInfo = ({ user }) => {
  return (
    <div className="pl-6 min-w-[248px] lg:pr-[108px] lg:border-x lg:border-x-DBDADE border-y border-y-DBDADE lg:border-y-0 py-3 md:py-0 min-h-[140px]">
      <p className="text-8B909A text-[13px] font-medium uppercase">
        Personal Information
      </p>
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex gap-4">
          <p className="text-[13px] min-w-[116px]">Contact Number</p>
          <p className="text-[13px] font-semibold">{user.contact}</p>
        </div>
        <div className="flex gap-4">
          <p className="text-[13px] min-w-[116px]">Date of Birth</p>
          <p className="text-[13px] font-semibold">{user.date_of_birth}</p>
        </div>
        <div className="flex gap-4">
          <p className="text-[13px] min-w-[116px]">Member Since</p>
          <p className="text-[13px] font-semibold">{user.member_since}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
