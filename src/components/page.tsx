import Light from "../assets/images/icon-moon.svg";

const MainPage = () => {
  return (
    <div className=" relative bg-small-screen sm:bg-medium-screen bg-no-repeat bg-cover bg-center h-52">
      <div className="z-10 p-8">
        <div className="flex justify-between ">
          <span className=" text-white font-bold text-3xl">
            <span className="p-2">T</span>
            <span className="p-2">O</span>
            <span className="p-2">D</span>
            <span className="p-2">O</span>
          </span>
          <img
            src={Light}
            alt="light-icon"
            className="h-6 items-center justify-center"
          />
        </div>

        <div>
          <input
            type="text"
            name="input"
            id="input-text"
            placeholder="Create a new todo..."
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
