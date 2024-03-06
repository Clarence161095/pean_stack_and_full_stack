/* eslint-disable react/no-unknown-property */
function Loading() {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-300"></div>
    </div>
  );
}

export default Loading;
