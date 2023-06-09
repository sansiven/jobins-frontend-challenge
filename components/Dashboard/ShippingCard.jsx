const ShippingCard = ({ user }) => {
  return (
    <div className="pl-6 min-w-[308px]">
      <p className="text-8B909A text-[13px] font-medium uppercase">
        Shipping address
      </p>
      <div className="flex flex-col mt-4">
        <p className="text-[13px]">{user.shipping}</p>

        <div className="flex gap-6 mt-6">
          <StatCard header={"Total Order"} number={user.orders.total} />
          <StatCard header={"Completed"} number={user.orders.completed} />
          <StatCard header={"Canceled"} number={user.orders.canceled} />
        </div>
      </div>
    </div>
  );
};

export default ShippingCard;

const StatCard = ({ number, header }) => (
  <div className="flex flex-col gap-2 min-w-[100px]">
    <p className="text-2xl font-bold">{number}</p>
    <p className="text-8B909A tracking-0.02 text-[13px] font-medium">
      {header}
    </p>
  </div>
);
