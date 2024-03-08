const MockData = [
  '20代と長いテキスト',
  '30代と長いテキスト',
  '40代と長いテキスト',
  '50代と長いテキスト',
  '60代と長いテキスト',
  '70代と長いテキスト',
  '80代と長いテキスト',
  '90代と長いテキスト',
  '100代と長いテキスト',
  '110代と長いテキスト',
  '120代と長いテキスト',
  '130代と長いテキスト',
  '140代と長いテキスト',
  '150代と長いテキスト',
  '160代と長いテキスト',
  '170代と長いテキスト',
  '180代と長いテキスト',
  '190代と長いテキスト',
];

const FlexLayout = ({ data = MockData }) => {
  const getData = (_data, currentPage = 3, perPage = 5) => {
    const result = [];
    for (let i = currentPage - 1; i < _data.length; i += perPage) {
      result.push(_data.slice(i, i + perPage));
    }
    console.log(result);
    return result.slice(currentPage - 1, currentPage + 1);
  };

  return (
    // Unit Component
    <div className="flex flex-row-reverse
     w-[700px] h-[400px] bg-red-500/20">
      {/* Chart 80% */}
      <div className="w-[80%] h-full bg-green-500/20 scale-[0.98] flex justify-center items-center">
        Chart
      </div>
      {/* Legend 20% */}
      <div className="w-[20%] h-full bg-blue-500/20 scale-[0.98] flex flex-col justify-between items-center">
        {/* legend title list 80% */}
        <div className="w-full h-[80%] bg-yellow-500/20 scale-[0.98] flex flex-row justify-between items-center">
          {/* list 1 */}
          {getData(data, 1, 5).map((list, i) => (
            <div
              key={i}
              className={`w-[${
                getData(data, 1, 5).length > 1 ? '50%' : '100%'
              }] h-full bg-red-500/20 scale-[0.98] flex flex-col justify-center items-center gap-2`}
            >
              {list &&
                list.length &&
                list.map((item, j) => (
                  <div
                    key={j}
                    className="w-full h-[50%] max-h-[19%] bg-green-200/20 scale-[0.98] flex flex-row justify-between items-center"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded"></div>
                    <div
                      className="w-[80%] h-fit text-stone/80 overflow-hidden whitespace-nowrap overflow-ellipsis"
                      title={item}
                    >
                      {item}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
        {/* legend pagination 20% */}
        {/* When mobile then flex-col */}
        <div className="w-full h-[20%] bg-purple-500/20 scale-[0.98] flex justify-center items-center gap-2 ">
          {/* next */}
          <div className="cursor-pointer bg-white/20 p-1 rounded-md">Next</div>
          {/* page n/m */}
          <div className="bg-white/20 p-1 rounded-md text-center">1/5</div>
          {/* prev */}
          <div className="cursor-pointer bg-white/20 p-1 rounded-md">Prev</div>
        </div>
      </div>
    </div>
  );
};

export default FlexLayout;

// const unitComponent = document.createElement("div");
// const chart = document.createElement("div");
// const legend = document.createElement("div");
// unitComponent.appendChild(chart);
// unitComponent.appendChild(legend);

// const legendTitleList = document.createElement("div");
// const pagination = document.createElement("div");
// legend.appendChild(legendTitleList);
// legend.appendChild(pagination);
// ...
