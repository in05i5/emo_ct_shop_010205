export function CategoryBar() {
  const categories = ['NEW', 'GIÀY NAM', 'GIÀY NỮ'];

  return (
    <div className="bg-[#e8d5d0] py-4">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-center gap-6">
          {categories.map((category) => (
            <button
              key={category}
              className="px-12 py-2 bg-[#d4a5a5] hover:bg-[#c89595] transition-colors text-sm font-medium text-gray-800 rounded-md shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}