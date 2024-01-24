"use client";

function DashboardCard(props) {
  return (
    <div className="display flex shadow-lg items-center rounded-lg transform hover:scale-105 transition ease-out duration-500 cursor-pointer">
      <img src={props.image} alt="Employees" className="w-48 h-36 rounded-l-lg" />

      <div className="flex-grow">
        <h5 className="text-lg font-bold tracking-tight  text-slate-500 uppercase text-center">
          {props.title}
        </h5>
        <h3 className="font-normal text-red-700 dark:text-gray-400 text-3xl text-center">
          {props.count}
        </h3>
      </div>
    </div>
  );
}

export default DashboardCard;
