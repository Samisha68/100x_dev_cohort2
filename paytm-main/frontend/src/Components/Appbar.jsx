export const Appbar = () => {
    return (
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        {/* Paytm App Title */}
        <div className="text-2xl font-bold">
          Paytm App
        </div>
  
        {/* User Greeting and Avatar */}
        <div className="flex items-center">
          <div className="text-lg mr-4">
            Hello
          </div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex items-center justify-center text-blue-600 font-semibold">
            U
          </div>
        </div>
      </div>
    );
  };
  