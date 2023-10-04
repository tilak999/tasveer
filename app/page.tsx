export default function Index() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex items-center px-2 shadow h-14">text</div>
      <div className="flex bg-red-50 grow">
        <div className="h-full w-64 bg-blue-50">text</div>
        <div className="h-full bg-green-50 grow">text</div>
      </div>
    </div>
  );
}
